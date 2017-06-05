<template>
  <div id="app">
    <lc-header :active="2"></lc-header>
    <div class="lc_main_container">
      <!--广告-->
      <div class="lc_container">
        <a :href="banner_banner_list.href_url">
          <img :src="banner_banner_list.img" style="width: 100%" alt="">
        </a>
      </div>
      <!--热门视频-->
      <div class="lc_container">
        <p class="lc_title">
          <a href="javascript:void (0)">热门视频</a>
        </p>
        <ul class="clear">
          <li v-for="item in hot_list">
            <a :href="url.examination">
              <div class="lc_img">
                <!--<i></i>-->
                <img :src="item.video_imgs" alt="">
              </div>
              <div class="lc_detail">
                <p>{{item.video_title}}</p>
                <div class="clear">
                  <span class="lc_price lf">￥{{item.video_price}}</span>
                  <div class="lc_talk rt">
                    <span> <i></i>{{item.video_msg}}</span>
                  </div>
                  <div class="lc_like rt">
                    <span> <i></i>{{item.video_click}}次</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!--广告-->
      <div class="lc_container">
        <a :href="url.examination">
          <img :src="banner_banner_list.img" style="width: 100%" alt="">
        </a>
      </div>
      <!--某某类目-->
      <div class="lc_container lc_exam">
        <p class="lc_title">
          <a :href="url.exam_detail">
            <span>某某类目</span>
          </a>
        </p>
        <div class="lc_exam_content">
          <a @click="slider(1)" class="lc_exam_lf" href="javascript:void (0)"></a>
          <a @click="slider(-1)" class="lc_exam_rt" href="javascript:void (0)"></a>
          <ul class="clear">
            <li v-for="item in hot_list">
                <a :href="item.href_url" @click="mask(-1)">
                  <div class="lc_img">
                    <!--<i></i>-->
                    <img :src="item.video_imgs" alt="">
                  </div>
                  <div class="lc_detail">
                    <p>{{item.video_title}}</p>
                  </div>
                </a>
              </li>
            <li v-for="item in hot_list">
                <a :href="item.href_url" @click="mask(-1)">
                  <div class="lc_img">
                    <!--<i></i>-->
                    <img :src="item.video_imgs" alt="">
                  </div>
                  <div class="lc_detail">
                    <p>{{item.video_title}}</p>
                  </div>
                </a>
              </li>
          </ul>
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
                      <span> <i></i>{{item.video_msg}}</span>
                    </div>
                    <div class="lc_like rt">
                      <span> <i></i>{{item.video_click}}万次</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lc_exam_mask">
      <div class="lc_mask_pop">
        <p class="clear"><a @click="closeMask()" href="javascript:void(0)">×</a></p>
        <p>抱歉，您还未通过本专业VIP</p>
        <p><i></i>客服电话：028-2880802 / 15198005504</p>
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
        hot_list:[],
        like_list:[],
        banner_banner_list:[],
      }
    },
    components: {
      'lc-header':header,
      lc_footer
    },
    created() {
      var $this = this;
      $.getJSON('http://stone.com/index/video',function (list) {
        $this.hot_list=list.data;
      });
      $.getJSON('http://stone.com/index/banner',function (list) {
        $this.banner_banner_list=list.data[0];
      });
      $.getJSON('http://stone.com/index/guess',function (list) {
        $this.like_list=list.data;
      });
    },
    methods:{
      slider(num){
        const list=$(".lc_exam_content>ul");
        if(num==1){
          $(".lc_exam_content>ul>li:eq(0)").remove().appendTo(list);
        }else{
          $(".lc_exam_content>ul>li:eq(-1)").remove().prependTo(list);
        }
      },
      mask(num){
        if(num==-1){
          $(".lc_exam_mask").css("display","block");
        }
      },
      closeMask(){
        $(".lc_exam_mask").css("display","none");
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .lc_main_container{
    .lc_exam{
      .lc_title{
        padding: 0!important;
        border-bottom: 2px solid #2d50b6!important;
        span{
          display: inline-block;
          padding: 10px 15px;
          font-size: 18px;
          color: #fff;
          background: #2d50b6;
          &:hover{
            opacity: .9;
          }
        }
      }
      &>div{
        position: relative;
        &>a{
          position: absolute;
          top: 25%;
          width: 25px;
          height: 50px;
          z-index: 20;
          &.lc_exam_lf{
            background: url("../../common/image/icon/lf_arrow.png") no-repeat;
          }
          &.lc_exam_rt{
            right: 0;
            background: url("../../common/image/icon/rt_arrow.png") no-repeat;
          }
          &:hover{
            opacity: .8;
          }
        }
        ul{
          li{
            height: 202px;
            &:nth-child(5n){
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  .lc_exam_mask{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(20,20,20,.5);
    z-index: 30;
    .lc_mask_pop{
      width: 30%;
      height: 200px;
      background: #fff;
      margin: 30% auto;
      border-radius: 10px;
      p{
        width: 100%;
        text-align: center;
        a{
          font-size: 35px;
          color: #333;
          float: right;
          opacity: .6;
          margin-right: 10px;
        }
        &:first-child{
          border-bottom: 1px solid #eee;
        }
        &:nth-child(2){
          font-size: 24px;
          margin: 30px 0;
        }
        &:last-child{
          font-size: 14px;
          color: #666;
          position: relative;
          i{
            position: absolute;
            top: -4px;
            left: 35px;
            width: 24px;
            height: 22px;
            background: url("../../common/image/icon/tel-2.png");
          }
        }
      }
    }
  }
</style>
