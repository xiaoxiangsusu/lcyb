<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="pay_success_outer">
              <div class="tip_header">
                  <img src="../../common/image/icon/ok.png"><span>恭喜你,成功支付！</span>
              </div>
              <table>
                  <tr>
                      <td>
                          <div class="tip_label">
                              你的支付方式：
                          </div> 
                      </td>
                      <td>
                          <div class="tip_detail">
                              支付宝
                          </div> 
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div class="tip_label">
                              你的订单号：
                          </div> 
                      </td>
                      <td>
                          <div class="tip_detail">
                              435353535345345345345
                          </div> 
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div class="tip_label">
                              你的账号：
                          </div> 
                      </td>
                      <td>
                          <div class="tip_detail">
                              张玄陵
                          </div> 
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div class="tip_label">
                              你的支付金额：
                          </div> 
                      </td>
                      <td>
                          <div class="tip_detail price">
                              ￥<span>2888</span>元
                          </div> 
                      </td>
                  </tr>
              </table>
              <div class="keep_stay_here">
                  <a :href="url.index" class="keep_purchuse">&lt;&lt;&nbsp;继续购物</a>
                  <!-- <a href="" class="contact_us">联系客服</a> -->
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
</script>
<style lange="less">

</style>
