<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="member_contaniner clearfloat">
             <member_list :active="4"></member_list>
             <div class="member_right">
                  <ul class="tabs_personal clearfloat">
                     <li class="tabs_nav active">完善资料</li>
                     <li class="tabs_nav">账户安全</li>
                     <li class="right_line"></li>
                  </ul>
                  <div class="tabs active tabs_personal_banner_0 clearfloat">
                      <form id="modify_personInfo">
                          <div class="form_group">
                              <label class="vertical_m">邮箱</label><span class="point vertical_m">:</span>
                              <input type="" name="" class="vertical_m">
                              <span class="error">验证邮箱</span>
                          </div>
                           <div class="form_group">
                              <label class="vertical_m">部门</label><span class="point vertical_m">:</span>
                              <input type="" name="" class="vertical_m">
                              <span class="error"></span>
                          </div>
                          <div class="form_group">
                              <label class="vertical_m">持证情况</label><span class="point vertical_m">:</span>
                              <input type="" name="" class="vertical_m" placeholder="请输入内容">
                              <span class="error"></span>
                          </div>
                          <div class="form_group">
                              <div class="btn">
                                  保存
                              </div>
                          </div>
                      </form>
                  </div>
                  <div class="tabs tabs_personal_banner_1 clearfloat">
                      <form id="modify_personCode">
                          <div class="form_group">
                              <label class="vertical_m">旧&nbsp;密&nbsp;码</label><span class="point vertical_m">:</span>
                              <input type="password" name="" class="vertical_m">
                              <img src="../../common/image/icon/key.png" height="21" width="25" class="key_img">
                              <span class="error">不支持</span>
                          </div>
                           <div class="form_group">
                              <label class="vertical_m">新&nbsp;密&nbsp;码</label><span class="point vertical_m">:</span>
                              <input type="password" name="" class="vertical_m">
                              <img src="../../common/image/icon/key.png" height="21" width="25" class="key_img">
                              <span class="error"></span>
                          </div>
                          <div class="form_group">
                              <label class="vertical_m">再次确定新密码</label><span class="point vertical_m">:</span>
                              <input type="password" name="" class="vertical_m">
                              <img src="../../common/image/icon/key.png" height="21" width="25" class="key_img">
                              <span class="error"></span>
                          </div>
                          <div class="form_group">
                              <div class="btn">
                                  保存
                              </div>
                          </div>
                      </form>
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
      }
    },
    components: {
      lc_header,
      lc_footer,
      member_list
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
    #app{
      background: #f8f8f8;
    }
</style>
