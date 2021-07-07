<template>
<el-container>

</el-container>
 
</template>

<script>
import homeHeader from "@/components/header/homeHeader";
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