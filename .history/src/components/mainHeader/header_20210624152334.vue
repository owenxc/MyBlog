<template>
  <div id="header_box">
    <el-button class="el-icon-s-unfold menu-button" @click="showPanel" class="">
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