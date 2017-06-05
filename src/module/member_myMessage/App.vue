<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="member_contaniner clearfloat">
             <member_list :active="7"></member_list>
             <div class="member_right">
                  <ul class="tabs_personal clearfloat">
                     <li class="tabs_nav active">我的消息</li>
                     <li class="right_line"></li>
                  </ul>
                  <div class="tabs active tabs_personal_banner_0 clearfloat">
                      <ul class="myscore_list_header">
                          <li class="list_width_126">时间</li>
                          <li class="list_width_187">标题</li>
                          <li class="list_width_246">内容</li>
                          <li class="list_width_213">操作</li>
                      </ul>
                      <table class="mymessage_list myscore_list">
                          <tr v-for="msg in my_msg_list">
                              <td>
                                  <div class="list_width_126">
                                      {{msg.msg_time}}
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_187">
                                      {{msg.msg_title}}
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_246">
                                       {{msg.msg_content}}
                                  </div>
                              </td>
                              <td>
                                  <div class="message_handle list_width_213">
                                      <span class="check_now vertical_m">查看</span>
                                      <span class="vertical_line vertical_m"></span>
                                      <span class="send vertical_m">发送收条</span>
                                  </div>
                              </td>
                          </tr>
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
        my_msg_list:[],
      }
    },
    components: {
      lc_header,
      lc_footer,
      member_list
    },
    created() {
        var $this = this;
        $.getJSON('http://stone.com/member/my_msg',function(data){
            console.log(data);
            $this.my_msg_list = data.data;
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
