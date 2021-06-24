<template>
  <el-container class="ba">
    <div id="particles">
      <el-header>
        <main-header></main-header>
      </el-header>
      <el-container>
        <el-aside>
          <main-asider></main-asider>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
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
