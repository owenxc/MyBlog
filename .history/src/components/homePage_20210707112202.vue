<template>
  <el-container>
    <el-aside width="200px">

    </el-aside>
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
  </el-container>
</template>

<script>
import homeHeader from "@/components/header/homeHeader";
import homeFooter from "@/components/footer/homeFooter";
import mainPage from "@/components/page";
import main
export default {
  name: "homePage",
  components: { homeHeader, homeFooter, mainPage },
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