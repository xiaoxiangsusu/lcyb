<template>
  <div class="member_left">
                  <ul class="left_nav_list">
                    <li :class="active==0?'active':''">
                      <a :href="url.member_personalCenter">
                        <img src="../../common/image/icon/member_line.png" height="56" width="5">
                        <i class="img_list img_ge vertical_m"></i><span class="vertical_m">个人中心</span>
                      </a>
                    </li>
                    <li :class="active==1?'active':''">
                      <a :href="url.member_manageIntegral">
                        <img src="../../common/image/icon/member_line.png" height="56" width="5">
                        <i class="img_list img_ji vertical_m"></i><span class="vertical_m">积分管理</span>
                      </a>
                    </li>
                    <li :class="active==2?'active':''">
                      <a :href="url.member_manageTrade">
                        <img src="../../common/image/icon/member_line.png" height="56" width="5">
                        <i class="img_list img_jiao vertical_m"></i><span class="vertical_m">交易管理</span>
                      </a>
                    </li>
                    <li :class="active==3?'active':''">
                      <a :href="url.member_myVideo">
                        <img src="../../common/image/icon/member_line.png" height="56" width="5">
                        <i class="img_list img_shi vertical_m"></i><span class="vertical_m">我的视频</span>
                      </a>
                    </li>
                    <li :class="active==4?'active':''">
                      <a :href="url.member_manageInformation">
                        <img src="../../common/image/icon/member_line.png" height="56" width="5">
                        <i class="img_list img_zhi vertical_m"></i><span class="vertical_m">资料管理</span>
                      </a>
                    </li>
                    <li :class="active==5?'active':''">
                      <a :href="url.member_myScore">
                        <img src="../../common/image/icon/member_line.png" height="56" width="5">
                        <i class="img_list img_cheng vertical_m"></i><span class="vertical_m">我的成绩</span>
                      </a>
                    </li>
                    <li :class="active==6?'active':''">
                      <a :href="url.member_gatherErrors">
                        <img src="../../common/image/icon/member_line.png" height="56" width="5">
                        <i class="img_list img_cuo vertical_m"></i><span class="vertical_m">我的错题集</span>
                      </a>
                    </li>
                    <li :class="active==7?'active':''">
                      <a :href="url.member_myMessage">
                        <img src="../../common/image/icon/member_line.png" height="56" width="5">
                        <i class="img_list img_xiao vertical_m"></i><span class="vertical_m">我的消息</span>
                      </a>
                    </li>
                  </ul>
              </div> 
</template>

<script>
  import utils from 'common/js/utils'
  export default {
    props:['active'],
    data(){
      return{
        url:utils.url,
      }
    },
    components: {

    },
    created() {
    
 
    }
  }
</script>

<style type="text/less" lang="less">

</style>
