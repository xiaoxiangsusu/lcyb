<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="pay_contaniner clearfloat">
              <h2 class="pay_title">支付中心</h2>
              <div class="pay_list_handle">
                 <span class="handle_header">订单号：<span class="order_num">1231242342342342342</span></span>
                 <table class="pay_order_list">
                    <tr>
                      <td>
                          <div class="pay_width160">
                              <a href="" class="imgwrapper">
                                  <img src="../../common/image/member_video.png">
                              </a>
                          </div>
                      </td>
                      <td>
                          <div class="pay_width600">
                              <a href="">
                                  视频名称及介绍的撒打算的撒大大实打实大大打算打克里斯多夫极乐世界法律手段发大水了开发商的解放路口
                              </a>
                          </div>
                      </td>
                      <td>
                          <div class="pay_width268">
                              <div class="each_total_price">
                                  总额：<span class="red_tip">￥</span><span class="price">1492.76</span>
                              </div>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <div class="pay_width160">
                              <a href="" class="imgwrapper">
                                  <img src="../../common/image/member_video.png">
                              </a>
                          </div>
                      </td>
                      <td>
                          <div class="pay_width600">
                              <a href="">
                                  视频名称及介绍的撒打算的撒大大实打实大大打算打克里斯多夫极乐世界法律手段发大水了开发商的解放路口
                              </a>
                          </div>
                      </td>
                      <td>
                          <div class="pay_width268">
                              <div class="each_total_price">
                                  总额：<span class="red_tip">￥</span><span class="price">1492.76</span>
                              </div>
                          </div>
                      </td>
                    </tr>
                </table>
                <span class="handle_header">支付方式</span>
                <div class="pay_way_group">
                    <span class="purch_way active">支付宝支付<img src="../../common/image/icon/annual_btn.png"></span>
                    <span class="purch_way">微信支付<img src="../../common/image/icon/annual_btn.png"></span>
                </div>
                <div class="conclude_price">
                    <div class="group_row">
                        应付金额：<span class="total_price red_tip">2888</span> 元
                    </div>
                    <div class="group_row">
                        <a class="pay_btn" :href="url.pay_success">立即支付</a>
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
  import member from 'common/js/member'
  import $ from 'jquery'
  import lc_header from 'components/header/header'
  import lc_footer from 'components/footer/footer'
  export default {
    data(){
      return{
        url:utils.url,
      }
    },
    components: {
      lc_header,
      lc_footer,
    },
    created() {
     
    },
    mounted(){

    },
    methods:{

    }
  }

  $(function(){
      $(".pay_list_handle .purch_way").on('click',function() {
          $(".pay_list_handle .purch_way").removeClass("active");
          $(this).addClass("active");
      });
  })

</script>
<style lange="less">
    #app{
      background: #f8f8f8;
    }
</style>
