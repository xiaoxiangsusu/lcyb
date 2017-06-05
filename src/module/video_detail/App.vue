<template>
  <div id="app">
    <lc-header :active="1"></lc-header>
    <div class="center_box clear">
      <div class="classification">
        <a :href="url.index">全部视频</a>
      </div>
    </div>
    <div class="lc_main_container">
      <div class="lc_container clear">
        <div class="lc_video_detail_img lf">
          <a href="javascript:void(0)">
            <img src="../../common/image/banner5.png" alt="">
          </a>
          <div class="lc_video_detail_icon">
            <span class="lc_vd_like"><i></i>点赞</span>
            <span class="lc_vd_play"><i></i>1389万次播放</span>
          </div>
        </div>
        <div class="lc_video_detail lf">
          <div class="lc_vd_title">
            <p>如何让HR识别您的优势和长处？</p>
            <span>评价数76</span><span>赞数889</span>
          </div>
          <div class="lc_vd_describe">
            支持随到随学，2018年12月份过期（文字描述）
          </div>
          <div class="lc_vd_price">
            <p>
              市场价：<span class="price_gray">￥123.00</span>
            </p>
            <p>
              会员价：<span class="price_yellow">￥123.00</span>
            </p>
          </div>
          <a class="lc_vd_buy" :href="url.videoCenter_pay">立即购买</a>
        </div>
      </div>
    </div>
    <div class="lc_main_container lc_vd_main_container">
      <div class="center_box clear">
        <div class="video_left lc_container">
          <p class="lc_title">网友评论</p>
          <div class="lc_vd_talk clear">
            <textarea name="lc_talk" class="lc_vd_text" cols="30" rows="10" placeholder="我来说两句...">
            </textarea>
            <div>
              <button @click="release($event,1)" class="lc_vd_submit">发布</button>
            </div>
          </div>
          <div class="lc_vd_discuss">
            <div class="lc_vd_discuss_title">
              <a class="lc_vd_discuss_people discuss_active" href="javascript:void (0)">网友评论</a>
              <a class="lc_vd_discuss_my" href="javascript:void (0)">我的评论</a>
            </div>
            <div class="lc_vd_discuss_detail">
            </div>
          </div>
        </div>
        <div class="video_right">
          <div class="lc_main_container" style="background: #fff">
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
      return {
        url: utils.url,
        open: false,
        video_list: [],
      }
    },
    components: {
      'lc-header': header,
      lc_footer
    },
    created() {
      var $this = this;
      $.getJSON('http://stone.com/index/all_video', function (data) {
        $this.video_list = data.data;
      });
    },
    methods: {
//      回复
      talk(e){
        var $this = this;
        var parent = $(e.currentTarget).parents(".lc_cd_dis_box");
        var child = parent.find(".lc_vd_discuss_bottom").children(".lc_vd_talk_sm");
        if (child.length == 0) {
          parent.find(".lc_vd_discuss_bottom").append(`<div class="lc_vd_talk lc_vd_talk_sm clear"><textarea name="lc_talk" class="lc_vd_text" cols="30" rows="10" placeholder="我来说两句..."></textarea><div><button class="lc_vd_submit">发布</button></div></div>`);
          parent.find(".lc_vd_discuss_bottom").find(".lc_vd_submit").click(function (event) {
            $this.release(event, 2);
          });
        }
      },
//      发布
      release(e, num){
        e.stopPropagation();
        var $this = this;
        var parent = $(e.currentTarget).parents(".lc_vd_talk");
        var text = parent.children(".lc_vd_text").val();
        if (num == 1) {
          parent.siblings(".lc_vd_discuss").children(".lc_vd_discuss_detail").append(`<div class="lc_cd_dis_box lc_vd_discuss clear"><div class="lc_vd_discuss_lf lf"><img src="../../common/image/banner5.png" alt=""></div><div class="lc_vd_discuss_rt lf"><p class="discuss_name">小白菜<span>16小时前</span></p><p class="discuss_content">${text}</p><p class="discuss_btn"><span class="discuss_like"><i></i>(3537)</span><span class="discuss_talk"><i></i>回复(3537)</span></p><div class="lc_vd_discuss_bottom"></div></div></div>`);
          $(".lc_vd_text").val("");
        } else {
          parent.parent().append(`<div class="lc_vd_discuss clear"><div class="lc_vd_discuss_lf lf"><img src="../../common/image/banner5.png" alt=""></div><div class="lc_vd_discuss_rt lf"><p class="discuss_name">小白菜<span>16小时前</span></p><p class="discuss_content">${text}</p><p class="discuss_btn"><span class="discuss_like"><i></i>(3537)</span><span class="discuss_talk"><i></i>回复(3537)</span></p></div></div>`);
        }
        parent.next(".lc_vd_discuss").find(".discuss_talk").click(function (event) {
          $this.talk(event);
        });
        $(e.currentTarget).parents(".lc_vd_talk_sm").remove();
      },
    }
  }
</script>

<style lang="less" type="text/less">
  .lc_main_container{
    background: #fff;
    .lc_container{
      padding-bottom: 15px;
      ul{
        &.video_rt_ul {
          height: 610px !important;
        }
      }
      .lc_video_detail_img{
        width: 45%;
        height: 305px;
        margin-right: 5%;
        a{
          img{
            width: 100%;
            height: 100%;
          }
        }
        .lc_video_detail_icon{
          margin: 5px 0;
          span{
            float: left;
            color: #666666;
            margin-right: 20px;
            i{
              display: inline-block;
              width: 14px;
              height: 12px;
              background-size: contain;
              background-repeat: no-repeat;
              margin-right: 5px;
            }
            &.lc_vd_like{
              i{
                background-image: url("../../common/image/icon/like_k.png");
              }
            }
            &.lc_vd_play{
              i{
                background-image: url("../../common/image/icon/play_sm.png");
              }
            }
          }
        }
      }
      .lc_video_detail{
        width: 50%;
        height: 305px;
        box-sizing: border-box;
        .lc_vd_title{
          margin-bottom: 20px;
          p{
            font-size: 24px;
            color: #333;
            margin-bottom: 15px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span{
            display: inline-block;
            font-size: 14px;
            color: #666;
            padding-right: 10px;
            &:last-child{
              padding-left:10px ;
              border-left: 1px solid #666;
            }
          }
        }
        .lc_vd_describe{
          width: 100%;
          font-size: 14px;
          border: 1px solid #d9d9d9;
          box-sizing: border-box;
          padding: 0 5px;
          margin-bottom: 10px;
          height: 46px;
          line-height: 46px;
          overflow: hidden;
        }
        .lc_vd_price{
          width: 100%;
          background: #f4f4f4;
          padding: 10px 5px;
          p{
            font-size: 14px;
            line-height: 40px;
            span{
              font-size: 22px;
              &.price_gray{
                color: #999999;
                text-decoration: line-through;
              }
              &.price_yellow{
                color: #f45200;
              }
            }
          }
        }
        .lc_vd_buy{
          display: block;
          width: 22%;
          line-height: 50px;
          background: #2d50b6;
          color: #fff;
          font-size: 18px;
          text-align: center;
          margin-top: 20px;
          border-radius: 5px;
        }
      }
    }
    &.lc_vd_main_container{
      background: #f7f8f9;
      .center_box{
        padding-top: 15px;
        .video_left{
          background: #fff;
          padding: 5px 20px;
          min-height: 682px;
          .lc_vd_talk{
            width: 100%;
            border: 1px solid #d9d9d9;
            box-sizing: border-box;
            .lc_vd_text{
              width: 96%;
              height: 80px;
              resize: none;
              line-height: 20px;
              border:0;
              padding: 10px;
            }
            div{
              width: 100%;
              border-top: 1px solid #d9d9d9;
            }
            .lc_vd_submit{
              width: 9%;
              line-height: 30px;
              background: #2d50b6;
              color: #fff;
              font-size: 14px;
              text-align: center;
              margin: 10px;
              border-radius: 5px;
              border: 0;
              float: right;
              cursor: pointer;
            }
          }
          .lc_vd_discuss{
            margin-top: 20px;
            .lc_vd_discuss_title{
              a{
                display: inline-block;
                width: 10%;
                text-align: left;
                border-right: 2px solid #333;
                font-size: 18px;
                &:last-child{
                  border: 0;
                  margin-left: 10px;
                }
                &.discuss_active{
                  color: #2d50b6;
                }
                &:hover{
                  color: #2d50b6;
                }
              }
            }
            .lc_vd_discuss_detail{
              padding: 15px 0;
              .lc_vd_discuss{
                margin: 15px 0;
                padding: 20px 0;
                border-bottom: 1px solid #eeeeee;
                .lc_vd_discuss_lf{
                  width: 5%;
                  img{
                    width: 100%;
                    height: 46px;
                    border-radius: 50%;
                  }
                }
                .lc_vd_discuss_rt{
                  width: 90%;
                  margin-left: 5%;
                  .discuss_name{
                    font-size: 14px;
                    font-weight: bold;
                    span{
                      margin-left: 5px;
                      font-size: 12px;
                      color: #999999;
                      font-weight: normal;
                    }
                  }
                  .discuss_content{
                    margin: 10px 0;
                    width: 100%;
                    height: 15px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  .discuss_btn{
                    span{
                      display: inline-block;
                      cursor: pointer;
                      font-size: 12px;
                      color: #999999;
                      margin-right: 10px;
                      i{
                        display: inline-block;
                        width: 14px;
                        height: 12px;
                        background-size: contain;
                        background-repeat: no-repeat;
                        margin-right: 5px;
                      }
                      &.discuss_like{
                        i{background-image: url("../../common/image/icon/like.png");}
                      }
                      &.discuss_talk{
                        i{background-image: url("../../common/image/icon/answer.png");}
                      }
                    }
                  }
                }
                .lc_vd_discuss_bottom{
                  .lc_vd_discuss{
                    border: 0;
                    margin: 0;
                    padding: 20px 0 0 0;
                  }
                  .lc_vd_discuss_lf{
                    img{
                      height: 41px;
                    }
                  }
                  .lc_vd_discuss_rt{
                    margin-left: 2%;
                  }
                  .lc_vd_talk_sm{
                    margin-top: 10px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
