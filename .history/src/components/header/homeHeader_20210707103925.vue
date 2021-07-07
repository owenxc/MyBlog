<template>
     <div id="header_box">
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
    particlesJS("particles", particlesJson);
  },
  methods: {
  
  },
};
</script>

<style lang="less" scoped>

</style>