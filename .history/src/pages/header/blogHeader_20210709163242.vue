<template>
  <div id="blog_header_box">
      <div class="items">
          <span>辉腾博客</span>
      </div>
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
    particlesJS("blog_header_box", particlesJson);
  },
  methods: {
  
  },
};
</script>

<style lang="less" scoped>
.items{
    position: absolute;
}
</style>