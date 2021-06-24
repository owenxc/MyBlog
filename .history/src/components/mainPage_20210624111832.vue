<template>
  <div id="particles">
    <el-container>
      <el-header>

      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
import mainHeader
export default {
  name: "mainPage",
  data() {
    return {};
  },
  mounted() {
    particlesJS("particles", particlesJson);
  },
};
</script>

<style lang="less" scoped>
</style>
