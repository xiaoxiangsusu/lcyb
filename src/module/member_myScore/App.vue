<template>
  <div id="app">
      <lc_header :active="0"></lc_header>
      <div class="main_middle_content">
          <div class="member_contaniner clearfloat">
             <member_list :active="5"></member_list>
             <div class="member_right">
                  <ul class="tabs_personal clearfloat">
                     <li class="tabs_nav active">全真模拟</li>
                     <li class="tabs_nav">综合练习</li>
                     <li class="tabs_nav">章节练习</li>
                     <li class="right_line"></li>
                  </ul>
                  <div class="tabs active tabs_personal_banner_0 clearfloat">
                      <ul class="myscore_list_header">
                          <li class="list_width_106">试卷名称</li>
                          <li class="list_width_112">科目</li>
                          <li class="list_width_102">所属专业</li>
                          <li class="list_width_153">完成时间</li>
                          <li class="list_width_100">用时</li>
                          <li class="list_width_100">分数</li>
                          <li class="list_width_99">试卷详情</li>
                      </ul>
                      <table class="myscore_list">
                          <tr>
                              <td>
                                  <div class="list_width_106">
                                      某某试卷
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_112">
                                      财务
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_102">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_153">
                                      完成时间
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_100">
                                      1小时20分钟
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_100">
                                      88分
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_99">
                                      查看
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div class="list_width_106">
                                      某某试卷
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_112">
                                      财务
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_102">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_153">
                                      完成时间
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_100">
                                      1小时20分钟
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_100">
                                      88分
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_99">
                                      查看
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div class="list_width_106">
                                      某某试卷
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_112">
                                      财务
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_102">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_153">
                                      完成时间
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_100">
                                      1小时20分钟
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_100">
                                      88分
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_99">
                                      查看
                                  </div>
                              </td>
                          </tr>
                      </table>
                  </div>
                  <div class="tabs tabs_personal_banner_1 clearfloat">
                      <div id="myscore_list_old">
                          <ul class="myscore_list_header">
                              <li class="list_width_106">科目</li>
                              <li class="list_width_340">所属专业</li>
                              <li class="list_width_222">练习次数</li>
                              <li class="list_width_104">操作</li>
                          </ul>
                          <table class="myscore_list">
                              <tr>
                                  <td>
                                      <div class="list_width_106">
                                          某某科目
                                      </div>
                                  </td>
                                  <td>
                                      <div class="list_width_340">
                                          会计专业
                                      </div>
                                  </td>
                                  <td>
                                      <div class="list_width_222">
                                          5
                                      </div>
                                  </td>
                                  <td>
                                      <div class="check list_width_104">
                                          查看
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div class="list_width_106">
                                          某某科目
                                      </div>
                                  </td>
                                  <td>
                                      <div class="list_width_340">
                                          会计专业
                                      </div>
                                  </td>
                                  <td>
                                      <div class="list_width_222">
                                          5
                                      </div>
                                  </td>
                                  <td>
                                      <div class="check list_width_104">
                                          查看
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div class="list_width_106">
                                          某某科目
                                      </div>
                                  </td>
                                  <td>
                                      <div class="list_width_340">
                                          会计专业
                                      </div>
                                  </td>
                                  <td>
                                      <div class="list_width_222">
                                          5
                                      </div>
                                  </td>
                                  <td>
                                      <div class="check list_width_104">
                                          查看
                                      </div>
                                  </td>
                              </tr>
                          </table>
                      </div>
                      <div id="check_score_detail">
                          <div class="score_detail_back_btn">&lt;&nbsp;返回</div>
                          <ul class="myscore_list_header">
                            <li class="list_width50">时间</li>
                            <li class="list_width50">得分情况</li>
                          </ul>
                          <table class="myscore_skin_list">
                            <tr>
                                <td>
                                    <div class="time list_width50">
                                      2017-05-12
                                    </div>
                                </td>
                                <td>
                                    <div class="score list_width50">
                                      88分
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="time list_width50">
                                      2017-05-12
                                    </div>
                                </td>
                                <td>
                                    <div class="score list_width50">
                                      88分
                                    </div>
                                </td>
                            </tr>
                          </table>
                      </div>
                  </div>

                  <div class="tabs tabs_personal_banner_2 clearfloat">
                      <ul class="myscore_list_header">
                          <li class="list_width_106">章节名称</li>
                          <li class="list_width_230">科目</li>
                          <li class="list_width_116">所属专业</li>
                          <li class="list_width_234">练习次数</li>
                          <li class="list_width_86">操作</li>
                      </ul>
                      <table class="myscore_list">
                          <tr>
                              <td>
                                  <div class="list_width_106">
                                      某某章节
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_230">
                                      某某科目
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_116">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_234">
                                      5
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_86">
                                      查看
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div class="list_width_106">
                                      某某章节
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_230">
                                      某某科目
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_116">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_234">
                                      5
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_86">
                                      查看
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div class="list_width_106">
                                      某某章节
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_230">
                                      某某科目
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_116">
                                      会计专业
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_234">
                                      5
                                  </div>
                              </td>
                              <td>
                                  <div class="list_width_86">
                                      查看
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
