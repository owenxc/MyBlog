<template>
    <el-container>
      <el-header>
        <main-header></main-header>
      </el-header>
      <el-main>
        <main-cont
      </el-main>
      <el-footer>
        <home-footer></home-footer>
      </el-footer>
    </el-container>
</template>

<script>
import mainHeader from "@/pages/header/index";
import mainFooter from "@/pages/footer/index";
import mainContent from "@/pages/main/index";
export default {
  name: "homePage",
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