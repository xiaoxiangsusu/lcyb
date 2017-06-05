<template>
  <div id="app">
      <lc_header :active="3"></lc_header>
      <div class="main_middle_content">
          <div class="member_contaniner clearfloat">
             <member_list :active="0"></member_list>
             <div class="member_right">
                  <ul class="tabs_personal clearfloat">
                     <li class="tabs_nav active">基本资料</li>
                     <li class="tabs_nav">我的专业</li>
                     <li class="tabs_nav">观看记录</li>
                     <li class="right_line"></li>
                  </ul>
                  <div class="tabs active tabs_personal_banner_0 clearfloat">
                      <div class="banner_basic_left">
                          <div class="imgWrapper">
                              <img :src="basic_info.member_img">
                          </div>
                          <div class="change_portrait">修改头像</div>
                      </div>
                      <div class="banner_basic_right">
                          <div class="member_username">{{basic_info.member_regname}}</div>
                          <table class="member_basic_info">
                              <tbody>
                                  <tr>
                                      <td>
                                          <div class="width60">
                                              注册时期
                                          </div>
                                      </td>
                                      <td>
                                          <div class="regist_time width205">
                                              ：<span class="regist_time">{{basic_info.reg_time}}</span>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="width60">
                                              用户组
                                          </div>
                                      </td>
                                      <td>
                                          <div class="width205">
                                              ：<span class="user_group"></span>{{basic_info.member_grade}}
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div class="width60">
                                              邮箱
                                          </div>
                                      </td>
                                      <td>
                                          <div class="width205">
                                              ：<span class="email">{{basic_info.member_email}}</span> 
                                          </div>
                                      </td>
                                      <td>
                                          <div class="width60">
                                              你的积分
                                          </div>
                                      </td>
                                      <td>
                                          <div class="width205">
                                              ：<span class="integration">{{basic_info.member_integral}}</span>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div class="width60">
                                             部门
                                          </div>
                                      </td>
                                      <td>
                                          <div class="width205">
                                             ：<span class="department">{{basic_info.member_department}}</span> 
                                          </div>
                                      </td>
                                      <td>
                                          <div class="width60">
                                              持证情况
                                          </div>
                                      </td>
                                      <td>
                                          <div class="width205">
                                              ：<span class="card_situation">{{basic_info.member_situation}}</span> 
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div class="width60">
                                             班主任
                                          </div>
                                      </td>
                                      <td colspan="3">
                                          <div class="department width205">
                                             ：<span class="teacher">{{basic_info.member_name}}</span>
                                             <span class="phone">{{basic_info.member_phone}}</span>
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="tabs tabs_personal_banner_1 clearfloat">
                      <div class="banner_tip">我的专业</div>
                      <ul class="major">
                          <li v-for="item in video_list">
                              <div class="record_top_hover">
                                  <a :href="item.href_url" class="imgWrapper">
                                      <img :src="item.video_imgs">
                                      <img src="../../common/image/icon/play.png" class="play_btn">
                                  </a>
                              </div>
                              <a :href="item.href_url" class="textWrapper font14">{{item.video_title}}</a>
                          </li>
                      </ul>
                  </div>
                  <div class="tabs tabs_personal_banner_2 clearfloat">
                      <div class="banner_tip">一周前</div>
                      <ul class="record ago">
                          <li v-for="item in video_list">
                              <div class="record_top_hover">
                                <a :href="item.href_url" class="imgWrapper">
                                    <img :src="item.video_imgs">
                                    <img src="../../common/image/icon/play.png" class="play_btn">
                                </a>
                                <img src="../../common/image/icon/close.png" class="del_btn">
                              </div>
                              <a :href="item.href_url" class="textWrapper font14">{{item.video_title}}</a>
                              <div class="price_or_attention cal clearfloat">
                                  <div class="price">￥{{item.video_price}}</div>
                                  <div class="attention">
                                      <a href="" class="praise">
                                          <img src="../../common/image/icon/like.png" class="vertical_m">
                                          <span class="praise_num vertical_m">{{item.video_num}}万次</span>
                                      </a> 
                                      <a href="" class="comment">
                                          <img src="../../common/image/icon/talk.png" class="vertical_m">
                                          <span class="comment_num vertical_m">{{item.video_msg}}</span>
                                      </a>
                                  </div>
                              </div>
                          </li>
                    </ul>
                    <div class="banner_tip">更早前</div>
                    <ul class="record ago_more">
                         <li v-for="item in video_list">
                            <div class="record_top_hover">
                              <a :href="item.href_url" class="imgWrapper">
                                  <img :src="item.video_imgs">
                                  <img src="../../common/image/icon/play.png" class="play_btn">
                              </a>
                              <img src="../../common/image/icon/close.png" class="del_btn">
                            </div>
                            <a :href="item.href_url" class="textWrapper font14">{{item.video_title}}</a>
                            <div class="price_or_attention cal clearfloat">
                                <div class="price">￥{{item.video_price}}</div>
                                <div class="attention">
                                    <a href="" class="praise">
                                        <img src="../../common/image/icon/like.png" class="vertical_m">
                                        <span class="praise_num vertical_m">{{item.video_num}}万次</span>
                                    </a> 
                                    <a href="" class="comment">
                                        <img src="../../common/image/icon/talk.png" class="vertical_m">
                                        <span class="comment_num vertical_m">{{item.video_msg}}</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
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
        basic_info:[],
        video_list:[],
      }
    },
    components: {
      lc_header,
      lc_footer,
      member_list
    },
    created() {
      var $this = this;
      $.getJSON('http://stone.com/member/member_center',function(data){
        // console.log(data);
        $this.basic_info = data.data;
      });
      $.getJSON('http://stone.com/member/member_video',function(data){
        // console.log(data);
        $this.video_list = data.data;
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
