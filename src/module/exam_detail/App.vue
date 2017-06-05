<template>
  <div id="app">
    <lc-header :active="2"></lc-header>
    <div class="center_box clear">
      <div class="classification">
        <a :href="url.index">全部视频</a>
      </div>
    </div>
    <div class="lc_main_container">
      <!--某某类目-->
      <div class="lc_container lc_exam_detail">
        <p class="lc_title">
          <a>会计科目</a>
        </p>
        <ul class="clear">
          <li v-for="item in hot_list">
            <a :href="item.href_url">
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
      <!--某某类目-->
      <div class="lc_container lc_exam_detail">
        <p class="lc_title">
          <a>会计科目</a>
        </p>
        <ul class="clear">
          <li v-for="item in hot_list">
            <a :href="item.href_url">
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
      <!--VIP专享视频-->
      <div class="lc_main_container">
        <div class="lc_container">
          <p class="lc_title lc_ed_title">
            <a href="javascript:void (0)">VIP专享视频</a>
            <a href="javascript:void (0)">更多</a>
          </p>
          <ul class="clear video_like">
            <li v-for="item in hot_list">
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
      <!--精品视频-->
      <div class="lc_main_container">
        <div class="lc_container">
          <p class="lc_title lc_ed_title">
            <a href="javascript:void (0)">精品视频</a>
            <a href="javascript:void (0)">更多</a>
          </p>
          <ul class="clear video_like">
            <li v-for="item in hot_list">
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
      $.getJSON('http://stone.com/index/guess',function (list) {
        $this.like_list=list.data;
      });
    },
    methods:{

    }
  }
</script>
profession
<style lang="less" type="text/less">
  .lc_main_container{
    .lc_exam_detail{
      padding: 10px;
      background: #f7f7f7;
      ul{
        width: 78%!important;
        li{
          width: 22%!important;
          a{
            .lc_detail{
              p{
                text-align: center;
              }
            }
          }
        }
      }
    }
    .lc_container{
      .lc_ed_title{
        a{
          &:last-child{
            float: right;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
