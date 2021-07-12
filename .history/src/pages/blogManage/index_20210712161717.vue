<template>
  <el-container class="blog_container">
    <el-header>
      <blog-header></blog-header>
    </el-header>
    <el-container>
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
import particlesJson from "@/assets/particles.json";
import blogHeader from "@/pages/header/blogHeader";
export default {
  components: { blogHeader},
  data() {
    return {
      isShowCollapse:false,
      active:th
    };
  },

  mounted() {
    particlesJS("blog_aside_box", particlesJson);
  },
  methods: {
      handleSelect(keyPath) {
        this.$router.push({path:keyPath})
      },
  },
  watch:{
    $route:{
      handler(val,oldval){
        console.log(val)
        this.active = val.path
      },
      // 深度观察监听
      deep: true
    },
    active:function(newVal){
      console.log(newVal)
    }
  }
};
</script>

<style lang="less">
.blog_aside {
  background-color: #000;
  position: relative;
  .el-menu {
    position:absolute;
    border-right: 0;
    top:0;
    left:0;
    .el-menu-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
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