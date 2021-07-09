<template>
    <el-container>
      <el-header>
        <main-header></main-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <main-footer></main-footer>
      </el-footer>
    </el-container>
</template>

<script>
import mainHeader from "@/pages/header/index";
import mainFooter from "@/pages/footer/index";
export default {
  name: "mainPage",
  components: { mainHeader, mainFooter, mainContent },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.login_box {
  position: relative;
  color: #fff;
}
</style>