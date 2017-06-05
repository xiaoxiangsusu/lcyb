<template>
  <div id="app">
    <lc_header></lc_header>
    <div class="lc_main_container">
      <div class="lc_container">
        <p>找回密码</p>
        <div class="lc_find_pwd_step clear">
          <a class="lc_pwd_active" href="javascript:void(0)">
            <div class="lc_step">
              <span>1</span>
            </div>
            <b>填写账户名</b>
          </a>
          <a href="javascript:void(0)">
            <div class="lc_step">
              <span>2</span>
            </div>
            <b>设置新密码</b>
          </a>
          <a href="javascript:void(0)">
            <div class="lc_step">
              <span>3</span>
            </div>
            <b>完成</b>
          </a>
        </div>
        <div class="lc_find_pwd_content">
          <ul class="lc_form_list">
            <li class="step_1" style="display: block">
              <form>
                <div class="lc_form_inp">
                  <label for="lc_phone"><span>*</span>手机号:</label>
                  <input @blur="checkPhone" type="text" id="lc_phone">
                  <span class="lc_pwd_tip"></span>
                </div>
                <div class="lc_form_inp lc_yam">
                  <label for="lc_yzm"><span>*</span>短信验证码:</label>
                  <input type="text" id="lc_yzm">
                  <input type="button" value="获取短信验证码">
                </div>
                <div class="lc_form_inp">
                  <a @click="step(1)" class="step_1_btn" href="javascript:void(0)">立即提交</a>
                </div>
              </form>
            </li>
            <li class="step_2">
              <form>
                <div class="lc_form_inp">
                  <label for="lc_pwd"><span>*</span>密码:</label>
                  <input @blur="checkPwd" type="password" id="lc_pwd">
                  <span class="lc_pwd_tip"></span>
                </div>
                <div class="lc_form_inp">
                  <label for="lc_repeat_pwd"><span>*</span>确认密码:</label>
                  <input @blur="checkPwdPwd" type="password" id="lc_repeat_pwd">
                  <span class="lc_pwd_tip lc_erro_sure"></span>
                </div>
                <div class="lc_form_inp">
                  <a @click="step(2)" class="step_2_btn" href="javascript:void(0)">确定</a>
                </div>
              </form>
            </li>
            <li class="step_3">
              <form>
                <div class="lc_form_inp">
                  <p><i></i>您的密码已经设置成功</p>
                </div>
                <div class="lc_form_inp">
                  <a class="step_3_btn" :href="url.login">确定</a>
                </div>
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
  import $ from 'jquery'
  import lc_header from 'components/header/header'
  import lc_footer from 'components/footer/footer'
  export default {
    data(){
      return{
        url:utils.url
      }
    },
    components: {
      lc_header,
      lc_footer
    },
    methods:{
      step(num){
        $(".lc_form_list>li").eq(num).css("display","block").siblings().css("display","none");
        $(".lc_find_pwd_step>a").eq(num).addClass("lc_pwd_active").siblings(".lc_pwd_active").removeClass("lc_pwd_active");
      },
//      验证手机号
      checkPhone(){
        let tel=$('#lc_phone');
        let phone = tel.val();
        if (!(/^1[34578]\d{9}$/.test(phone))) {
          tel.siblings("span").html("手机号码格式有误");
        }else{
          tel.siblings("span").html("");
        }
      },
//      验证密码
      checkPwd(){
        let pswd=$('#lc_pwd');
        let pwd=pswd.val();
        if (!(/^(\w){6,20}$/.test(pwd))) {
          pswd.siblings("span").html("只能输入6-20个字母、数字、下划线");
        }else{
          pswd.siblings("span").html("");
        }
      },
//      重复密码
      checkPwdPwd(){
        let pwd=$("#lc_repeat_pwd");
        if(pwd.val()!=$('#lc_pwd').val()){
          pwd.siblings("span").html("两次密码必须保持一样，请重新输入");
        }else{
          pwd.siblings("span").html("");
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .lc_main_container{
    .lc_container{
      border: 1px solid #519cef;
      border-top-width: 3px;
      height: 500px;
      p{
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 30px 30px;
      }
      .lc_find_pwd_step{
        width: 50%;
        margin: 0 auto;
        a{
          float: left;
          width: 33.33%;
          text-align: center;
          .lc_step{
            position: relative;
            width: 100%;
            height: 5px;
            background: #CCCCCC;
            span{
              position: absolute;
              top: -11px;
              left: 44%;
              color: #fff;
              font-size: 14px;
              width: 25px;
              height: 25px;
              line-height: 25px;
              text-align: center;
              background: #CCCCCC;
              border-radius: 13px;
            }
          }
          b{
            display: block;
            margin-top: 35px;
            color: #CCCCCC;
          }
          &.lc_pwd_active{
            .lc_step{
              background: #5dbcfd;
              span{
                background: #5dbcfd;
              }
            }
            b{
              color:#5dbcfd ;
            }
          }
        }
      }
      .lc_find_pwd_content{
        width: 50%;
        margin: 20px auto;
        .lc_form_list{
          position: relative;
          overflow: visible;
          li{
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            form{
              .lc_form_inp{
                width: 60%;
                height: 60px;
                margin: 20px auto 0;
                label{
                  display: inline-block;
                  font-size: 12px;
                  width: 20%;
                  margin-right: 5%;
                  text-align: right;
                  span{
                    color: #5dbcfd;
                  }
                }
                input{
                  width: 70%;
                  padding: 8px 5px;
                  border: 0;
                  border: 1px solid rgba(93,188,253,.5);
                }
                span.lc_pwd_tip{
                  color: red;
                  text-align: left;
                  display: block;
                  margin-left: 26%;
                  margin-top: 10px;
                }
                &.lc_yam{
                  input{
                    width: 33%;
                    &[type="button"]{
                      margin-left: 2%;
                      background: linear-gradient(to bottom,#ffffff, rgba(95, 188, 255, 0.4));
                    }
                  }
                }
                a{
                  width: 70%;
                  margin: 0 26%;
                  line-height: 40px;
                  text-align: center;
                  color: #ffffff;
                  background: #5dbcfd;
                  border-radius: 5px;
                }
                p{
                  font-weight: normal;
                  text-align: center;
                  margin: 0 0 0 30%;
                  position: relative;
                  i{
                    position: absolute;
                    top: -6px;
                    left: -7px;
                    width: 30px;
                    height: 30px;
                    background: url("../../common/image/icon/ok.png") no-repeat;
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
