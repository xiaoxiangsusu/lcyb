<template>
  <header id="lc_header">
    <div class="lc_container clear">
      <div class="lc_logo">
        <a href="javascript:void(0)">
          <img src="../../common/image/icon/logo.png" alt="">
        </a>
      </div>
      <div class="lc_header_list">
        <ul class="clear">
          <li :class="active==0?'lc_header_active':false"><a :href="url.index">首页</a></li>
          <li :class="active==1?'lc_header_active':false"><a :href="url.video">视频中心</a></li>
		      <li :class="active==2?'lc_header_active':false"><a :href="url.exam">考试中心</a></li>
          <li :class="active==3?'lc_header_active':false"><a :href="url.member_personalCenter">会员中心</a></li>
        </ul>
      </div>
      <div class="lc_header_search_box">
        <div class="lc_header_search">
          <i></i>
          <input type="text" placeholder="搜索专业/视频" v-model="search_val">
        </div>
        <div class="lc_header_btn">
          <a class="lc_zy" href="javascript:void(0)" @click="search">搜专业</a>
          <a class="lc_sp" href="javascript:void(0)"  @click="search">搜视频</a>
        </div>
      </div>
      <!-- <div class="lc_header_login" >
        <a class="lc_login" :href="url.member_personalCenter">我的</a>
        <a class="lc_register" href="javascript:void(0)" @click="is_login">退出</a>
      </div> -->
      <div class="lc_header_login">
        <a class="lc_login" :href="url.login" @click="is_login">登录</a>
        <a class="lc_register" :href="url.register">注册</a>
      </div>
    </div>
  </header>
</template>

<script>
  import utils from 'common/js/utils'
  export default {
    props:['active'],
    data(){
      return{
        url:utils.url,
        logon:true,
        search_val:""
      }
    },
    components: {

    },
    created() {
      let login = utils.get_storage('is_login');
     if(login){

      this.login=true;
     }else{
      this.login=false
     }
     console.log(this.login)
    },
    methods:{
      is_login(){
         

      },
      search(){
        let val = this.search_val;
        window.location.href="./video.html"
      }
    },
    mounted(){
        console.log(this.logon)
    }
  }
</script>

<style type="text/less" lang="less">

</style>
