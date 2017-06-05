<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="member_contaniner clearfloat">
             <member_list :active="6"></member_list>
             <div class="member_right">
                  <ul class="tabs_personal clearfloat">
                     <li class="tabs_nav active">我的错题集</li>
                     <li class="right_line"></li>
                  </ul>
                  <div class="tabs active tabs_personal_banner_0 clearfloat">
                      <ul class="myscore_list_header">
                          <li class="list_width_116">试卷名称</li>
                          <li class="list_width_218">科目</li>
                          <li class="list_width_114">所属专业</li>
                          <li class="list_width_222">错题集</li>
                          <li class="list_width_102">试卷详情</li>
                      </ul>
                      <table class="myscore_list">
                          <tr>
                              <td>
                                  <div class="list_width_116">
                                      章节练习
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_218">
                                      财务
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_114">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="check_errors list_width_222">
                                      查看错题
                                  </div>
                              </td>
                              <td>
                                  <div class="redo_errors list_width_102">
                                      重做错题
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div class="list_width_116">
                                      章节练习
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_218">
                                      财务
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_114">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="check_errors list_width_222">
                                      查看错题
                                  </div>
                              </td>
                              <td>
                                  <div class="redo_errors list_width_102">
                                      重做错题
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div class="list_width_116">
                                      章节练习
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_218">
                                      财务
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_114">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="check_errors list_width_222">
                                      查看错题
                                  </div>
                              </td>
                              <td>
                                  <div class="redo_errors list_width_102">
                                      重做错题
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
