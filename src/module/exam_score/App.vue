<template>
  <div id="app">
    <lc_header></lc_header>
    <div class="center_box clear">
      <div class="classification">
        <a :href="url.index">全部视频</a>
      </div>
    </div>
    <div class="lc_main_container">
      <div class="lc_container clear">
        <p>独孤求败</p>
        <div class="lc_score_lf">
          <p>分数：</p>
          <p class="lc_score">30.00分</p>
        </div>
        <div class="lc_score_rt">
          <p>考试详情：</p>
          <div class="lc_score_detail">
            <ul class="clear">
              <li>
                总分：<span>100分</span>
              </li>
              <li>
                合格分数线：<span>60分</span>
              </li>
              <li>
                耗时：<span>30分钟</span>
              </li>
            </ul>
          </div>
          <div class="lc_score_list">
            <ul>
              <li class="lc_list_title">
                <ul>
                  <li>题型</li>
                  <li>总题数</li>
                  <li>答对题数</li>
                  <li>总分</li>
                  <li>得分</li>
                </ul>
              </li>
              <li class="lc_list_score">
                <ul>
                  <li>单选题</li>
                  <li>5</li>
                  <li>3</li>
                  <li>20</li>
                  <li>15</li>
                </ul>
              </li>
              <li class="lc_list_score">
                <ul>
                  <li>多选题</li>
                  <li>5</li>
                  <li>0</li>
                  <li>20</li>
                  <li>15</li>
                </ul>
              </li>
              <li>
                本次考试共<b class="text-warning">10</b>道题，总分<b class="text-warning">100</b>分，您做对<b class="text-warning">3</b>道题，得到<b class="text-warning">30.00</b>分
              </li>
            </ul>
          </div>
          <div class="lc_score_btn">
            <a href="javascript:void(0)">查看答案和解析</a>
            <a href="javascript:void(0)">进入我的考试记录</a>
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
  import lc_header from 'components/header/header'
  import lc_footer from 'components/footer/footer'
  import $ from 'jquery'
  export default{
    data(){
      return{
        url:utils.url,

      }
    },
    components:{
      lc_header,
      lc_footer
    },
    methods:{

    }
  }

</script>
<style lang="less" type="text/less">
  .lc_main_container{
    min-height: 600px;
    .lc_container{
      padding: 10px;
      box-sizing: border-box;
      &>p{
        width: 100%;
        text-align: center;
        font-size: 18px;
        line-height: 40px;
        border-bottom: 1px solid #CCCCCC;
      }
      &>div{
        float:left;
      }
      .lc_score_lf{
        width: 30%;
        p{
          width: 30%;
          display: inline-block;
          text-align: center;
          font-size: 24px;
          line-height: 50px;
          margin: 40% 0;
          &.lc_score{
            color: orangered;
          }
        }
      }
      .lc_score_rt{
        width: 70%;
        p{
          font-size: 18px;
          margin: 20px 0;
        }
        .lc_score_detail{
          width: 100%;
          height: 30px;
          ul{
            li{
              float:left;
              font-size: 16px;
              width: initial;
              span{
                color: orange;
              }
            }
          }
        }
        .lc_score_list{
          width: 100%;
          margin: 20px 0;
          &>ul{
            border: 1px solid #CCCCCC;
            height: inherit;
            &>li{
              width: 100%;
              border-bottom: 1px solid #CCCCCC;
              &:last-child{
                border: 0;
                text-align: left;
                padding-left: 30px;
                .text-warning{
                  color: orange;
                  line-height: 40px;
                }
              }
              &:hover{
                background: #e2e2e2;
              }
              ul{
                height: 40px;
                li{
                  float: left;
                  width: 20%;
                  margin: 0;
                  line-height: 40px;
                  font-size: 16px;
                  text-align: left;
                  padding-left: 30px;
                  box-sizing: border-box;
                  border-right: 1px solid #CCCCCC;
                  &:last-child{
                    border: 0;
                  }
                }
              }
              &.lc_list_title{
                background: rgba(113, 203, 81, 0.44);
                &:hover{
                  background: rgba(113, 203, 81, 0.55);
                }
                ul{
                  li{
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
        .lc_score_btn{
          width: 100%;
          a{
            float: right;
            margin-left: 20px;
            line-height: 40px;
            color: #ffffff;
            background: #049EE4;
            width: 20%;
            text-align: center;
            border-radius:5px;
            &:hover{
              background: #0491d6;
            }
          }
        }
      }
    }
  }
</style>
