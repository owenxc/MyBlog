<template>
  <div id="header_box">
    <el-button  @click="showPanel" class="menu-button">
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