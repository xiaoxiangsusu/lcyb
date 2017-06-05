<template>
  <div id="app">
    <lc-header :active="1"></lc-header>
    <div class="center_box clear">
      <div class="classification">
        <a :href="url.index">全部视频</a>
      </div>
      <div class="video_left">
        <div class="video_select">
          <ul>
            <li class="video_select_li" v-for="item in select_items">
              <div class="video_select_title">
                {{item.name}}
              </div>
              <div class="video_select_list">
                <span class="active">全部</span>
                <span v-for="(box,$index) in item.list" @click="list(box,$event)">
                  {{box.name}}
                </span>
                <span class="video_more" v-if="item.list.length>8?true:false">更多</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="video_sort">
          <ul>
            <li @click="sort" id="sort">综合排序</li>
            <li class="active" @click="sort" id="new_sort">最新</li>
            <li  id="heat_sort" @click="sort">最热</li>
            <li @click="sort" id="price_sort">价格</li>
          </ul>
        </div>
        <div class="lc_main_container">
          <div class="lc_container">
            <ul class="clear video_left_ul">
              <li v-for="item in video_list">
                <a :href="url.video_detail">
                  <div class="lc_img">
                    <img :src="item.video_imgs" alt="">
                  </div>
                  <div class="lc_detail">
                    <p>{{item.video_title}}</p>
                    <div class="clear">
                      <span class="lc_price lf">￥{{item.video_price}}</span>
                      <div class="lc_talk rt">
                        <span><i></i>{{item.video_msg}}</span>
                      </div>
                      <div class="lc_like rt">
                        <span><i></i>{{item.video_click}}万次</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="lc_page">
            <a class="lc_back lf" href="javascript:void(0)"><i></i></a>
            <a class="lc_go rt" href="javascript:void(0)"><i></i></a>
            <ul class="clear">
              <li class="lc_page_active">
                <a href="javascript:void(0)">1</a>
              </li>
              <li>
                <a href="javascript:void(0)">2</a>
              </li>
              <li class="lc_page_more"> ...</li>
              <li>
                <a href="javascript:void(0)">33</a>
              </li>
              <li>
                <a href="javascript:void(0)">34</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="video_right">
        <div class="lc_main_container">
          <div class="lc_container">
            <p class="lc_title">
              <a href="javascript:void (0)">热门推荐</a>
            </p>
            <ul class="clear video_rt_ul">
              <li v-for="item in video_list">
                <a :href="item.href_url">
                  <div class="lc_img">
                    <!--<i></i>-->
                    <img :src="item.video_imgs" alt="">
                  </div>
                  <div class="lc_detail">
                    <p>{{item.video_title}}</p>
                    <div class="clear">
                      <span class="lc_price lf">￥{{item.video_price}}</span>
                      <div class="lc_talk rt">
                        <span><i></i>{{item.video_msg}}</span>
                      </div>
                      <div class="lc_like rt">
                        <span><i></i>{{item.video_click}}万次</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--猜你喜欢-->
    <div class="lc_main_container">
      <div class="lc_container">
        <p class="lc_title">
          <a href="javascript:void (0)">猜你喜欢</a>
        </p>
        <ul class="clear video_like">
          <li v-for="item in like_list">
            <a :href="item.href_url">
              <div class="lc_img">
                <!--<i></i>-->
                <img :src="item.video_imgs" alt="">
              </div>
              <div class="lc_detail">
                <p>{{item.video_title}}</p>
                <div class="clear">
                  <span class="lc_price lf">￥{{item.video_price}}</span>
                  <div class="lc_talk rt">
                    <span><i></i>{{item.video_msg}}</span>
                  </div>
                  <div class="lc_like rt">
                    <span><i></i>{{item.video_click}}万次</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <lc_footer></lc_footer>
  </div>
</template>
<script>
  import mock from 'common/js/mock'
  import utils from 'common/js/utils'
  import script from 'common/js/script'
  import header from 'components/header/header'
  import lc_footer from 'components/footer/footer'
  import $ from 'jquery'
  export default {
    data(){
      return{
        url:utils.url,
        select_items:[],
        video_list:[],
        like_list:[],
      }
    },
    components: {
      'lc-header':header,
      lc_footer
    },
    created() {
      var $this = this;
      $.getJSON('http://stone.com/video_list',function( data){
        console.log(data);
        $this.select_items = data.data;
      });
      $.getJSON('http://stone.com/member/vide_order',function( data){
         console.log(data)
      });
      $.getJSON('http://stone.com/index/all_video',function( data){
        $this.video_list = data.data;
      });
      $.getJSON('http://stone.com/index/guess',function (list) {
        $this.like_list=list.data;
      });
    },
    methods:{
      list(item,e){
        e=e.target;
        $(e).toggleClass("active");
      },
      sort(event){
          event = event.target;
          let val = $(event).attr("id");
          if(val=="sort"){
            $.getJSON("http://stone.com/index/all_video",function(data){
              console.log(data)
            })
          }else if(val=="new_sort"){

          }else if(val=="heat_sort"){

          }else if(val=="price_sort"){

          }

      }



    }
  }
</script>

<style lang="less" type="text/less">
  .lc_main_container{
    .lc_container{
      ul{
        &.video_left_ul{
          height: 1270px!important;
          li{
            margin-bottom: 10px;
          }
        }
        &.video_like{
          li:nth-child(5n){
            margin-right: 0;
          }
        }
        &.video_rt_ul {
          height: 1230px !important;
        }
      }
    }
  }
</style>
