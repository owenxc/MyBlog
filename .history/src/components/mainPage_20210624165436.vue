<template>
  <el-container>
    <div id="particles">
      <el-header>
        <main-header></main-header>
      </el-header>
      <main-asider></main-asider>
      <el-main>Main</el-main>
    </div>
  </el-container>
</template>

<script>
import particlesJson from "@/assets/particles.json";
import mainHeader from "@/components/mainHeader/header";
import mainAsider from "@/components/mainAsider/asider";
export default {
  name: "mainPage",
  components: { mainHeader, mainAsider },
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
