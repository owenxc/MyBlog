<template>
  <div id="header_box">
    <el-button @click="showPanel" type="primary" style="margin-left: 16px;">
     MENU
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    showPanel(){
      this.$store.dispatch('actionChangeAsideDrawer',true)
    }
  }
};
</script>

<style lang="less" scoped>

</style>