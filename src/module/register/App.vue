<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="member_contaniner clearfloat">
              <div class="register_banner">
                  <ul class="clearfloat">
                      <li class="reg_banner_left">
                          <h2>欢迎注册力诚永邦！</h2>
                          <form id="lcyb_register">
                              <div class="form_group">
                                  <label><span class="blue">*</span>姓名：</label>
                                  <input type="" name="" v-model="form.username">
                                  <i class="error active">
                                      <img src="../../common/image/icon/reg_error.png" class="vertical_m">
                                      <span class="error_tip vertical_m">长度为20-30个字符</span>
                                  </i>
                              </div>
                              <div class="form_group">
                                  <label><span class="blue">*</span>手机号：</label>
                                  <input type="" name="" v-model="form.phone">
                                  <i class="error">
                                      <img src="../../common/image/icon/reg_error.png" class="vertical_m">
                                      <span class="error_tip vertical_m">长度为20-30个字符</span>
                                  </i>
                              </div>
                              <div class="form_group">
                                  <label><span class="blue">*</span>图形验证码：</label>
                                  <input type="" name="" class="graphical" v-mode='form.img_code'>
                                  <a href="javascript:void(0)" class="graphical_verify"><span>NPVE</span></a>
                                  <i class="error">
                                      <img src="../../common/image/icon/reg_error.png" class="vertical_m">
                                      <span class="error_tip vertical_m">长度为20-30个字符</span>
                                  </i>
                              </div>
                              <div class="form_group">
                                  <label><span class="blue">*</span>短信验证码：</label>
                                  <input type="" name="" class="short_message" v-mode='code'>
                                  <a href="javascript:void(0)" class="short_message_verify">获取短信验证码</a>
                                  <i class="error">
                                      <img src="../../common/image/icon/reg_error.png" class="vertical_m">
                                      <span class="error_tip vertical_m">长度为20-30个字符</span>
                                  </i>
                              </div>
                              <div class="form_group">
                                  <label><span class="blue">*</span>密码：</label>
                                  <input type="password" name="" class="code" v-mode='form.pwd'>
                                  <img src="../../common/image/icon/key.png" height="21" width="25" class="key_img">
                                  <i class="error">
                                      <img src="../../common/image/icon/reg_error.png" class="vertical_m">
                                      <span class="error_tip vertical_m">长度为20-30个字符</span>
                                  </i>
                              </div>
                              <div class="form_group">
                                  <label><span class="blue">*</span>确认密码：</label>
                                  <input type="password" name="" class="code" v-mode='form.is_pwd'>
                                  <img src="../../common/image/icon/key.png" height="21" width="25" class="key_img">
                                  <i class="error">
                                      <img src="../../common/image/icon/reg_error.png" class="vertical_m">
                                      <span class="error_tip vertical_m">长度为20-30个字符</span>
                                  </i>
                              </div>
                              <div class="agree_protocol">
                                  <input type="checkbox" name="">
                                  <a href="javascript:void(0)">同意入驻协议条款</a>
                              </div>
                              <div class="reg_btn">立即注册</div>
                          </form>
                      </li>
                      <li class="reg_banner_middle"></li>
                      <li class="reg_banner_right">
                          <h2>欢迎登陆</h2>
                          <form id="lcyb_login">
                              <div class="form_group">
                                <label>账号</label>
                                <input type="" name="">
                              </div>
                              <div class="form_group">
                                  <label>密码</label>
                                  <input type="password" name="" class="code">
                                  <img src="../../common/image/icon/key.png" height="21" width="25" class="key_img">
                              </div>
                              <div class="log_btn">登录</div>
                              <a href="" class="find_code">找回密码？</a>
                          </form>
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
  import member from 'common/js/member'
  import $ from 'jquery'
  import lc_header from 'components/header/header'
  import lc_footer from 'components/footer/footer'
  export default {
    data(){
      return{
        url:utils.url,
        form:{
          username:``,//用户名
          phone:``,//手机号
          img_code:``,//图形验证码
          code:``,//证码
          pwd:``,//密码
          is_pwd:``//确认密码
        }
      }
    },
    components: {
      lc_header,
      lc_footer,
    },
    created() {
      /*验证正则*/

    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style lange="less">
   
</style>
