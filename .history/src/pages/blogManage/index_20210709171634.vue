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
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <svg-icon icon-class="write"></svg-icon>
            <span slot="title">编写博客</span>
          </el-menu-item>
          <el-menu-item index="2">
            <svg-icon icon-class="data"></svg-icon>
            <span slot="title">数据管理</span>
          </el-menu-item>
          <el-menu-item index="3">
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
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
.blog_aside{
  .el-menu-item{
    display: flex;
    justify-content:flex-start;
    align-items: center;
  }
}
</style>