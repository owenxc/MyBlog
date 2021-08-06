<template>
  <div id="blog_header_box">
    <span class="title">辉腾博客</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  mounted() {
    this.$particlesJS("blog_header_box");
  },
  methods: {
  
  },
};
</script>

<style lang="less" scoped>
.title{
  position: absolute;
  top:15px;
  left:20px;
  font-size:20px;
  font-weight: bold;
  text-shadow: 5px 5px 5px yellow
}
</style>