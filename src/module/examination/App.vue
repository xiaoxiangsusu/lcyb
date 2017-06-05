<template>
  <div id="app">
  <l_header :active="0"></l_header>
     <div class="center_box">
       <div class="box_title color_hui">
        <a :href="url.index">首页</a>
        <a :href="url.index">考试中心</a>
        <a :href="url.index">全镇模拟</a>
      </div>
      <div class="examin_num">
       <ul>
         <li v-for="(item,$index) in list" @click="list_select($index)">{{$index+1}}</li>
       </ul>
     </div>
     <div class="examin_content">
       <div class="examin_title">
         <span class="examin_title_s">
           第{{num+1}}题
         </span>
       </div>
       <div class="examin_text">
         {{html.examination_subject}}
       </div>
       <div class="examin_select">
         <ul>
           <li v-for="(item,$index) in html.examination_select" >
              <input type="radio" :id="item.exmain_id" :name="num" :value="item.exmain_option" v-model='picked' @click="option_item(item.exmain_option,$event)">
              <label :for="item.exmain_id" >
                <span>{{$index}}:{{item.exmain_option}}</span>
              </label>
          </li>
         </ul>
       </div>
       <div class="examin_page">
         <button class="left" @click="page_top">上一题</button>
         <button class="right" @click="page_bottom">下一题</button>
       </div>
       <div class="exmain_submit">
         <button><a :href="url.exam_score">交卷</a></button>
       </div>
     </div>
     </div>
  </div>
</template>

<script>
  import mock from 'common/js/mock'
  import utils from 'common/js/utils'
  import $ from 'jquery'
  import l_header from 'components/header/header'
  export default {
    data() {
        return {
          url: utils.url,
          list: [],
          html: [],
          num: 0,
          select_arr:[],
          picked:''
        }
      },
      components: {
l_header
      },
      created() {
        const $this = this;
        $.getJSON("http://stone.com/member/examination_list", function(data) {
          console.log(data.data)
          $this.list = data.data;
          $this.html = data.data[$this.num];
        })
      },
      mounted() {

      },
      methods: {
        /*题目列表*/
        list_select(num) {
          this.html = this.list[num];
          this.num = num;
          // let select = this.html.examination_select;
          this.picked=this.select_arr[num];
        },
        /*上一题*/
        page_top() {
          if(this.num==0)return;
          this.num -= 1;
          this.html = this.list[this.num];
          this.picked=this.select_arr[this.num];
        },
        /*下一题*/
        page_bottom() {
          console.log(this.list.length,this.num)
          if((this.num+1)== this.list.length) return;
          this.num +=1;
          this.html = this.list[this.num];
           this.picked=this.select_arr[this.num];
        },
        /*选择答案*/
        option_item(val,e){
          e=e.target;
          console.log(e)
          this.select_arr[this.num] = this.picked; 
          if((this.num+1)== this.list.length) return;
          const $this = this;
          setTimeout(()=>{
            $this.num ++;
            $this.html = $this.list[$this.num];
          },200);
          return;
        }
      }
  }
</script>

<style lange="less">
  
</style>
