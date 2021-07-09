<template>
  <div id="header_box">
   
  </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
export default {
  data() {
    return {
     
    };
  },
  mounted() {
    particlesJS("header_box", particlesJson);
  },
  methods: {
  
  },
};
</script>

<style lang="less" scoped>
</style>