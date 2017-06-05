import Vue from 'vue'
import mock from 'mockjs'
import VueEasyValidator from 'vue-easy-validator'
import App from './App'
import 'common/css/reset.css';
import 'common/css/style.less';
import 'common/css/login_reg.less';
Vue.use(VueEasyValidator)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
