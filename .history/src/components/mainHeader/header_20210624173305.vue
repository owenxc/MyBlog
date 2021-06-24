<template>
  <div id="header_box">
    <div class="progress"><el-progress :stroke-width="2" :percentage="percentage" :show-text="false"></el-progress></div>
    <el-button icon="el-icon-s-unfold" class="menu-button" @click="showPanel">MENU</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage:20
    };
  },
  methods: {
    showPanel() {
      this.$store.dispatch("actionChangeAsideDrawer", true);
    },
  },
};
</script>

<style lang="less" scoped>
.progress{
  width: 100%;
  height: auto;
  position: fixed;
  top:0;
  left:0;
  .el-progress-bar__outer{
    ba
  }
}
</style>