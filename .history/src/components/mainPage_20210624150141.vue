<template>
  <div id="particles">
   
  </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
import mainHeader from "@/components/mainHeader/header";
import mainAsider from "@/components/mainAsider/asider"
export default {
  name: "mainPage",
  components:{mainHeader,mainAsider},
  data() {
    return {};
  },
  mounted() {
    particlesJS("particles", particlesJson);
  },
};
</script>

<style lang="less" scoped>
</style>
