<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="member_contaniner clearfloat">
              <member_list :active="1"></member_list>
              <div class="member_right">
                  <ul class="tabs_personal clearfloat">
                     <li class="active tabs_nav">我的积分</li>
                     <li class="right_line myscore"></li>
                  </ul>
                  <div class="banner_tip">积分总数：<span class="red">{{intergral_all.member_integral}}</span></div>
                  <ul class="table_data_header clearfloat">
                      <li class="width168">时间</li>
                      <li class="width436">积分变更</li>
                      <li class="width168">描述</li>
                  </ul>
                  <table class="table_data_list">
                      <tbody>
                          <tr v-for="intergral in intergral_list">
                              <td>
                                  <div class="intergral_time height51 width168">
                                      {{intergral.integral_time}}
                                  </div>
                              </td>
                              <td>
                                  <div class="intergral_situation height51 width436">
                                        <!-- + -->
                                       {{intergral.is_change}}{{intergral.integral_change}}
                                  </div>
                              </td>
                              <td>
                                  <div class="intergral_detail height51 width168">
                                        {{intergral.describe}}
                                        <!-- 观看视频 -->
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
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
    data() {
        return {
          url: utils.url,
          intergral_all:[],
          intergral_list:[],
        }
      },
      components: {
        lc_header,
        lc_footer,
        member_list
      },
      created() {
        var $this = this;
        $.getJSON('http://stone.com/member/member_integral',function(data){
          // console.log(data);
          $this.intergral_all = data.data;
          $this.intergral_list = data.data.list;
        });
      },
      mounted() {

      },
      methods: {

      }
  }
</script>

<style lange="less">
    #app{
      background: #f8f8f8;
    }
</style>
