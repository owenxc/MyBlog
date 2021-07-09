<template>
  <div id="header_box">
    <el-button icon="el-icon-s-unfold" class="menu-button" @click="showPanel"
      >MENU</el-button
    >
    <main-asider></main-asider>
    <ul class="header_nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/main"><svg-icon icon-class="home_page" />首页</el-menu-item>
        <el-menu-item index="/blogManage"><svg-icon icon-class="demo" />博客管理</el-menu-item>
        <el-menu-item index="3"><svg-icon icon-class="message" />消息中心</el-menu-item>
      </el-menu>
    </ul>
  </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
import mainAsider from "@/pages/asider/index";
export default {
  components: { mainAsider },
  data() {
    return {
      activeIndex: "/main",
    };
  },
  mounted() {
    particlesJS("header_box", particlesJson);
  },
  methods: {
  
  },
};
</script>

<style lang="less" scoped>
</style>