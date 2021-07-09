<template>
  <el-container>
    <el-header>
      <blog-header></blog-header>
    </el-header>
    <el-container>
    <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
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