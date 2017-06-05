<template>
  <footer id="lc_footer" :class="is_booln?'footer_bottom':''">
    <div class="lc_footer_together">
      <div class="lc_container">
        <p>合作链接</p>
        <ul class="clear">
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯网教育频道</a></li>
          <li><a href="javascript:void(0)">腾讯大讲堂</a></li>
          <li><a href="javascript:void(0)">腾讯精品</a></li>
          <li><a href="javascript:void(0)">课腾讯电脑管家QQ</a></li>
          <li><a href="javascript:void(0)">智慧校园</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
          <li><a href="javascript:void(0)">腾讯</a></li>
        </ul>
        <div class="lc_footer_callme">
          <i></i>
          <p>023-89130964</p>
          <p>13908122390 </p>
        </div>
      </div>
    </div>
    <div class="lc_footer_copyright">
      <div class="lc_container">
        <ul class="clear">
          <li><a href="javascript:void(0)">成都力诚永邦企业管理咨询有限公司</a></li>
          <li><a href="javascript:void(0)">版权所有</a></li>
          <li><a href="javascript:void(0)">关于我们</a></li>
          <li><a href="javascript:void(0)">友情链接</a></li>
        </ul>
        <p>Copyright 2017 蜀XXXXXXXXXX</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import utils from 'common/js/utils'
  export default {
    data() {
        return {
          url: utils.url,
          is_booln: false,
          bodyHeight: '',
          height: ''
        }
      },
      components: {

      },
      mounted() {
        const $this = this;
        var resizeHeight = () => {
          const footerHeight = parseInt(document.getElementById('lc_footer').clientHeight);
          $this.bodyHeight = document.body.clientHeight;
          $this.height = window.innerHeight-footerHeight;
          $this.bodyHeight <= $this.height ? $this.is_booln = true : $this.is_booln = false;
        }
         
        resizeHeight()
        window.onresize = function() {
          resizeHeight();
        }
      },
      watch: {
        height(val) {
          this.bodyHeight <= this.height ? this.is_booln = true : this.is_booln = false;
        }
      }
  }
</script>

<style type="text/less" lang="less">
  .footer_bottom{
    position:fixed;
    bottom:0;
    right:0;
    left:0;
  }
</style>
