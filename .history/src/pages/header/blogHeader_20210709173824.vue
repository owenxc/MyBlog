<template>
  <div id="blog_header_box">
    <span class="title">辉腾博客</span>
    <span class="user">
      <el-avatar>admin</el-avatar>
    </span>
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
  top:3vh;
  left:20px;
  font-size:4vh;
  font-weight: bold;
  text-shadow: 5px 5px 5px yellow
}
.user{
  position: absolute;
  top:27px;
  right:20px;
  font-size: 20px; 
  cursor: pointer;
}
</style>