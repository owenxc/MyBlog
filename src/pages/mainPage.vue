<template>
  <div>
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from "@/pages/header/index";
import mainFooter from "@/pages/footer/index";
export default {
  name: "mainPage",
  components: { mainHeader, mainFooter },
  data() {
    return {
    };
  },
  computed: {},
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.login_box {
  position: relative;
  color: #fff;
}
</style>