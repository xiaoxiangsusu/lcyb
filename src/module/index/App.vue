<template>
  <div id="app">
    <lc_header :active="0"></lc_header>
    <div class="lc_slider">
      <a :href="banner_list.href_url">
        <img :src="banner_list.img" alt="">
      </a>
    </div>
    <div class="lc_main_container">
      <!--猜你喜欢-->
      <div class="lc_container">
        <p class="lc_title">
          <a href="javascript:void (0)">猜你喜欢</a>
        </p>
        <ul class="clear">
          <li v-for="(item,index) in like_list" v-if="index<4">
            <a :href="url.video_detail">
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
          <li class="lc_notice">
            <p><i></i>系统公告</p>
            <ul>
              <li v-for="item in notice_list">
                <a :href="url.news">
                  {{item.index_msg}}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--热门视频-->
      <div class="lc_container">
        <p class="lc_title">
          <a href="javascript:void (0)">热门视频</a>
        </p>
        <ul class="clear">
          <li v-for="item in hot_list">
            <a :href="url.video_detail">
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
                    <span><i></i>{{item.video_click}}次</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!--广告-->
      <div class="lc_container">
        <a :href="banner_banner_list.href_url">
          <img :src="banner_banner_list.img" style="width: 100%" alt="">
        </a>
      </div>
      <!--主体-->
      <div class="lc_container lc_index_main clear" v-for="list in index_list">
        <p class="lc_title">
          <a href="javascript:void (0)">{{list.name}}</a>
        </p>
        <div class="lc_lf_content lf">
          <a href="javascript:void(0)">
            <img :src="list.index_img" alt="">
          </a>
        </div>
        <div class="lc_rt_content lf">
          <ul class="clear">
            <li v-for="item in list.list">
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
      </div>
    </div>
    <lc_footer></lc_footer>
  </div>
</template>

<script>
  import mock from 'common/js/mock'
  import utils from 'common/js/utils'
  import $ from 'jquery'
  import lc_header from 'components/header/header'
  import lc_footer from 'components/footer/footer'
  export default {
    data(){
      return{
        url:utils.url,
        banner_list:[],
        banner_banner_list:[],
        like_list:[],
        notice_list:[],
        hot_list:[],
        index_list:[],
      }
    },
    components: {
      lc_header,
      lc_footer
    },
    created() {
      var $this=this;
      $.getJSON('http://stone.com/index/banner',function (list) {
        $this.banner_list=list.data[0];
        console.log($this.banner_list)
      });
      $.getJSON('http://stone.com/index/banner',function (list) {
        $this.banner_banner_list=list.data[0];
        console.log($this.banner_banner_list)
      });
      $.getJSON('http://stone.com/index/guess',function (list) {
        $this.like_list=list.data;
      });
      $.getJSON('http://stone.com/index/system_msg',function (list) {
        $this.notice_list=list.data;
      });
      $.getJSON('http://stone.com/index/video',function (list) {
        $this.hot_list=list.data;
      });
      $.getJSON('http://stone.com/index/index_list',function (list) {
        $this.index_list=list.data;
      });
    }
  }
</script>

<style lang="less" type="text/less">
  .lc_slider{
    width: 100%;
    min-width: 1200px;
    margin-bottom: 10px;
    img{
      width: 100%;
    }
  }
  .lc_main_container{
    .lc_container{
      ul{
        li:last-child{
          margin-right: 0;
        }
        li.lc_notice{
          p{
            font-size: 14px;
            color: #141414;
            padding:0 0 10px 18px;
            position: relative;
            i{
              position: absolute;
              width: 14px;
              height: 12px;
              background: url("../../common/image/icon/laba.png") no-repeat;
              background-size: contain;
              top: 0;
              left: 0;
            }
          }
          ul{
            li{
              width: 100%;
              line-height: 25px;
              a{
                font-size: 14px;
                color: #666666;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-left: 5px;
                &:hover{
                  background: rgba(153,153,153,.3);
                }
              }
            }
          }
        }
      }
      &.lc_index_main{
        .lc_lf_content{
          width: 18%;
          height: 460px;
          margin-right: 30px;
        }
        .lc_rt_content{
          width:79.5% ;
          ul{
            height: 460px;
            li{
              width: 216px;
              margin: 25px 30px 25px 0;
              &:nth-child(4n){
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }
</style>
