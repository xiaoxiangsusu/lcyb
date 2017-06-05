import Vue from 'vue'
import mock from 'mockjs'
import App from './App'
import 'common/css/reset.css';
import 'common/css/style.less';

 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
