<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace("/mainPhone");
    } else {
      this.$router.replace("/main");
    }
  },
  methods: {
    //判断是什么设备
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if (flag) {
        this.$store.dispatch("actionChangeIsMobile", true);
      } else {
        this.$store.dispatch("actionChangeIsMobile", false);
      }
      return flag;
    },
    //重载页面方法
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

