<template>
  <div id="app">
    <lc_header></lc_header>
    <div class="lc_main_container">
      <div class="lc_login_img">
        <img src="../../common/image/banner6.png" alt="">
      </div>
      <div class="lc_login_box">
        <p>登录力诚永邦</p>
        <form>
          <div class="lc_login_inp">
            <label for="lc_login_user">账号</label>
            <input v-model="nameVal" @blur="checkUserName" type="text" placeholder="手机号" id="lc_login_user">
            <span class="lc_inp_tip_user"></span>
            <i @click="del($event)">×</i>
          </div>
          <div class="lc_login_inp">
            <label for="lc_login_pwd">密码</label>
            <input @blur="checkUserPwd" type="password" placeholder="请输入密码" id="lc_login_pwd">
            <span class="lc_inp_tip_pwd"></span>
            <i @click="del($event)">×</i>
          </div>
          <div class="lc_login_inp">
            <input type="checkbox" id="lc_login_remember">下次自动登录
          </div>
          <div class="lc_login_inp">
            <a @click="loginBtn()" class="lc_login_btn" :href="url.member_personalCenter">登&nbsp;录</a>
          </div>
        </form>
        <div class="lc_login_bottom clear">
          <a class="lc_login_find_pwd" :href="url.find_password">找回密码?</a>
          <a class="lc_login_register" :href="url.register">注册新账号</a>
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
  export default{
    data(){
      return{
        url:utils.url,
      }
    },
    components:{
      lc_header,
      lc_footer,
    },
    mounted(){
      let Base64=require("js-base64").Base64;
      var user=localStorage.getItem("bmFtZQ==");
      var pwd= localStorage.getItem("cHN3ZA==");
      if( user && pwd){
        $('#lc_login_user').val(Base64.decode(user));
        $('#lc_login_pwd').val(Base64.decode(pwd)) ;
        $("#lc_login_remember").prop("checked","true");
        $(".lc_login_inp>i").css("display","block");
      }
    },
    methods: {
//      验证用户名
      checkUserName(){
        let user=$('#lc_login_user');
        var phone = user.val();
        if (!(/^1[34578]\d{9}$/.test(phone))) {
          $(".lc_inp_tip_user").html("手机号码格式有误");
        }else{
          $(".lc_inp_tip_user").html("");
        }
        this.delete(phone,user);
      },
//      验证密码
      checkUserPwd(){
        let pswd=$('#lc_login_pwd');
        var pwd=pswd.val();
        if (!(/^(\w){6,20}$/.test(pwd))) {
          $(".lc_inp_tip_pwd").html("只能输入6-20个字母、数字、下划线");
        }else{
          $(".lc_inp_tip_pwd").html("");
        }
        this.delete(pwd,pswd);
      },
//      登录
      loginBtn:function(){
        let Base64=require("js-base64").Base64;
        var user=$('#lc_login_user').val();
        var pwd=$('#lc_login_pwd').val();
        var name=Base64.encode("name"),pswd=Base64.encode("pswd");
        if($("#lc_login_remember").prop("checked")){
          localStorage.setItem(name,Base64.encode(user));
          localStorage.setItem(pswd,Base64.encode(pwd));
        }else{
          localStorage.clear();
        }
      },
//      删除
      del:function(e){
        $(e.target).parent().children("input").val("");
        if(!$('#lc_login_user').val()){
          $('#lc_login_pwd').val("");
          $(".lc_login_inp>i").css("display","none");
          $(".lc_login_inp>span").html("");
        }
      },
      delete:function(val,name){
        if(val){
          name.siblings("i").css("display","block");
        }else{
          name.siblings("i").css("display","none");
          console.log(1);
        }
      }
    }
  }
</script>
<style lang="less" type="text/less">
    .lc_main_container{
      margin-top: 10px;
      min-width: 1400px;
      position: relative;
      .lc_login_img{
        width: 100%;
        height: 400px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .lc_login_box{
        position: absolute;
        top: 20px;
        right: 250px;
        width: 380px;
        height: 360px;
        background: #fff;
        border-radius: 10px;
        p{
          font-size: 18px;
          width: 100%;
          line-height: 60px;
          text-align: center;
          border-bottom: 1px solid #eaeaea;
        }
        form{
          .lc_login_inp{
            width: 100%;
            margin: 23px 0;
            position: relative;
            label{
              font-size: 14px;
              margin: 0 10px 0 20px;
            }
            input{
              width: 70%;
              padding: 12px;
              border:0;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              &[type="checkbox"]{
                width: 5%;
                margin-left: 20px;
                color: #999999;
              }
            }
            span{
              position: absolute;
              bottom: -20px;
              left: 20%;
              color: red;
            }
            i{
              display: none;
              position: absolute;
              right: 30px;
              top: 10px;
              font-size: 22px;
              cursor: pointer;
            }
            .lc_login_btn{
              display: block;
              width: 90%;
              line-height: 50px;
              text-align: center;
              font-size: 18px;
              color: #fff;
              background: #5dbcfd;
              margin: 0 auto;
              border-radius: 10px;
              transition: all .3s linear;
              &:hover{
                background: #5baae9;
              }
            }
          }
        }
        .lc_login_bottom{
          a{
            float: right;
            padding: 5px 10px;
            border-right: 2px solid #ebebeb;
            color: #559cd6;
            &:first-child{
              border: 0;
            }
          }
        }
      }
    }
</style>
