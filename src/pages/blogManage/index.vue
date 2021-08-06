<template>
  <el-container id="main">
    <el-header>
      <blog-header></blog-header>
    </el-header>
    <el-container class="container">
      <el-aside id="blog_aside_box" width="160px" class="blog_aside">
        <el-menu
          :default-active="active"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#000000"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isShowCollapse"
        >
          <el-menu-item index="/main">
            <svg-icon icon-class="home_page"></svg-icon>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/writeBlog">
            <svg-icon icon-class="write"></svg-icon>
            <span slot="title">编写博客</span>
          </el-menu-item>
          <el-menu-item index="/articleManage">
            <svg-icon icon-class="data"></svg-icon>
            <span slot="title">内容管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <svg-icon icon-class="setting"></svg-icon>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import blogHeader from "@/pages/header/blogHeader";
export default {
  components: { blogHeader},
  data() {
    return {
      isShowCollapse:false,
      active:this.$route.path
    };
  },

  mounted() {
    this.$particlesJS("blog_aside_box");
  },
  methods: {
      handleSelect(keyPath) {
        this.$router.push({path:keyPath})
      },
  },
  watch:{
    $route:{
      handler(val,oldval){
        this.active = val.path
      },
      deep: true
    },
  }
};
</script>

<style lang="less">
.blog_aside {
  background-color: #000;
  .el-menu {
    border-right: 0;
    .el-menu-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: transparent !important;
      svg {
        margin-right: 20px;
      }
    }
  }
}
.blog_container{
  height: 100%;
  width: 100%;
}
</style>