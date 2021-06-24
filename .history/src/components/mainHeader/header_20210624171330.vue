<template>
  <div id="header_box">
    <el-progress :stroke-width="6" :percentage="20" type=":stroke-width="26""></el-progress>
    <el-button icon="el-icon-s-unfold" class="menu-button" @click="showPanel">MENU</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showPanel() {
      this.$store.dispatch("actionChangeAsideDrawer", true);
    },
  },
};
</script>

<style lang="less" scoped>
</style>