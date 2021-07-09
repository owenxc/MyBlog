<template>
  <el-container>
    <el-header>
      <blog-header></blog-header>
    </el-header>
    <el-container>
      <el-aside width="160px" class="blog_aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
          <el-menu-item index="/main">
            <svg-icon icon-class="home_blue"></svg-icon>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <svg-icon icon-class="write"></svg-icon>
            <span slot="title">编写博客</span>
          </el-menu-item>
          <el-menu-item index="3">
            <svg-icon icon-class="data"></svg-icon>
            <span slot="title">数据管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <svg-icon icon-class="setting"></svg-icon>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-empty description="描述文字"></el-empty>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import blogHeader from "@/pages/header/blogHeader";
export default {
  components: { blogHeader },
  data() {
    return {
    };
  },
  methods: {
      handleSelect(key) {
        if(key == '/main')
      },
  },
};
</script>

<style lang="less">
.blog_aside {
  .el-menu {
    height: 90vh;
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
</style>