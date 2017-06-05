<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="member_contaniner clearfloat">
              <member_list :active="2"></member_list>
              <div class="member_right">
                    <ul class="tabs_personal clearfloat">
                       <li class="tabs_nav active">视频订单</li>
                       <li class="tabs_nav">积分订单</li>
                       <li class="tabs_nav">我的评价</li>
                       <li class="right_line"></li>
                    </ul>
                    <div class="tabs tabs_personal_banner_0 clearfloat">
                        <div class="trade_videoOrder_header">
                            <ul class="clearfloat">
                                <li class="video_list_405">订单信息</li>
                                <li class="video_list_144">订单号</li>
                                <li class="video_list_133">订单时间</li>
                                <li class="video_list_90">消费金额</li>
                            </ul>
                        </div>
                        <table class="trade_videoOrder_list">
                            <tbody>
                                <tr v-for="video in video_order_list">
                                    <td>
                                        <div class="video_list_405 clearfloat">
                                            <div class="imgWrapper">
                                                <a href="">
                                                    <img :src="video.video_imgs">
                                                </a>
                                            </div>
                                            <div class="video_list_detail">
                                                <div class="video_list_title">
                                                  <a href="">{{video.video_title}}</a>
                                                </div>
                                                <div class="video_list_middle">
                                                  <a href="">你值得拥</a> | <a href="">教育学院</a>
                                                </div>
                                                <div class="video_list_vip"><a href="">{{video.describe}}</a></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="video_list_144">
                                            {{video.video_order}}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="video_list_133">
                                            {{video.order_time}}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="video_list_90">
                                            ￥{{video.video_price}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   <div class="tabs tabs_personal_banner_1 clearfloat">
                        <div class="trade_videoOrder_header">
                            <ul class="clearfloat">
                                <li class="video_list_405">视频名称</li>
                                <li class="video_list_144">订单号</li>
                                <li class="video_list_133">订单时间</li>
                                <li class="video_list_90">消费积分</li>
                            </ul>
                        </div>
                        <table class="trade_intergalOrder_list trade_videoOrder_list">
                            <tbody>
                                <tr v-for="integral in integral_order_list">
                                    <td>
                                        <div class="video_list_405 clearfloat">
                                            <div class="imgWrapper">
                                                <a href="">
                                                    <img :src="integral.video_imgs">
                                                </a>
                                            </div>
                                            <div class="video_list_detail">
                                                <div class="video_list_title">
                                                  <a href="">{{integral.video_title}}</a>
                                                </div>
                                                <div class="video_list_middle">
                                                  <a href="">你值得拥</a> | <a href="">教育学院</a>
                                                </div>
                                                <div class="video_list_vip"><a href="">{{integral.describe}}</a></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="video_list_144">
                                            {{integral.video_order}}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="video_list_133">
                                            {{integral.order_time}}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="video_list_90">
                                            {{integral.video_integral}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                   </div>
                   <div class="tabs active tabs_personal_banner_2 clearfloat">
                        <div class="trade_videoOrder_header">
                            <ul class="clearfloat">
                                <li class="video_list_405">我的评价</li>
                            </ul>
                        </div>
                        <table class="trade_myComment">
                            <tbody>
                                <tr v-for="assessment in my_assessment_list">
                                    <td>
                                        <div class="comment_Wrapper">
                                            <a href="" class="comment_imgWrapper">
                                               <a href="">
                                                    <img src="../../common/image/trade_video_img.png">
                                                </a>
                                            </a>
                                            <ul class="comment_detail clearfloat">
                                                <li>
                                                    <a href="" class="portrait_wrapper">
                                                        <img src="../../common/image/trade_comment_portrait.png">
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="comment_people_time">
                                                        <span class="people">{{assessment.member_name}}</span>
                                                        <span class="time">{{assessment.assessment_time}}</span>
                                                    </div>
                                                    <div class="comment_content">
                                                        {{assessment.assessment_comment}}
                                                    </div>
                                                    <div class="agree_and_callback">
                                                        <a href="" class="agree">
                                                            <img src="../../common/image/icon/like.png" height="11" width="11">(<span class="times">{{assessment.video_click}}</span>)
                                                        </a>
                                                        <a href="">
                                                            <img src="../../common/image/icon/answer.png" height="9" width="13">回复(<span class="times">{{assessment.video_msg}}</span>)
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
  import member from 'common/js/member'
  import $ from 'jquery'
  import lc_header from 'components/header/header'
  import lc_footer from 'components/footer/footer'
  import member_list from 'components/member/left'
  export default {
    data(){
      return{
        url:utils.url,
        video_order_list:[],
        integral_order_list:[],
        my_assessment_list:[],
      }
    },
    components: {
      lc_header,
      lc_footer,
      member_list
    },
    created() {
        var $this = this;
        $.getJSON('http://stone.com/member/vide_order',function(data){
            // console.log(data);
            $this.video_order_list = data.data;
        });
        $.getJSON('http://stone.com/member/integral_order',function(data){
            // console.log(data);
            $this.integral_order_list = data.data;
        });
        $.getJSON('http://stone.com/member/my_assessment',function(data){
            // console.log(data);
            $this.my_assessment_list = data.data;
        });
    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style lange="less">
    #app{
      background: #f8f8f8;
    }
</style>
