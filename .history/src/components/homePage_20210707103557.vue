<template>
  <el-container>
    <el-header>
      <home-header></home-header>
    </el-header>
    <el-main>
      <main-page></main-page>
    </el-main>
    <el-footer>
      <home-footer></home-footer>
    </el-footer>
  </el-container>
</template>

<script>
import homeHeader from "@/components/header/h";
import homeFooter from "@/components/footer/homeFooter";
import mainPage from "@/components/page"
export default {
  name: "homePage",
  components: { homeHeader, homeFooter,mainPage },
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