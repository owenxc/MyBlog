<template>
  <div id="blog_header_box">
      <div class="items">
          <span>辉腾博客</span>
          <span>admin</span>
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
  width: 100%;
  height: 100%;
  line-height:10vh;
  font-size: 18px;
  fl
}
</style>