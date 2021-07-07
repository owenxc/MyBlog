<template>
     <div id="header_box">
       <el-button icon="el-icon-s-unfold" class="menu-button" @click="showPanel"
      >MENU</el-button>
      
    </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
export default {
  name: "homeHeader",
  data() {
    return {
     
    };
  },
  computed: {},
  mounted() {
    particlesJS("header_box", particlesJson);
  },
  methods: {
     showPanel() {
      this.$store.dispatch("actionChangeAsideDrawer", true);
      console.log(this.$store.state.asideDrawer)
     },
  },
};
</script>

<style lang="less" scoped>

</style>