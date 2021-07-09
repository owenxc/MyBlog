<template>
  <div id="blog_header_box">
    <span class="title">辉腾博客</span>
    <span class="user">admin</span>
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
.title{
  position: absolute;
  top:5vh;
  left:3vh;
}
.user{
  position: absolute;
  top:tvh
}
</style>