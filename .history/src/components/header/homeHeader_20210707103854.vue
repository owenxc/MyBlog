<template>
     <div id="particles">
      <!-- <div :class="navClass">
        <div class="nav-title">辉腾博客</div>
        <div class="nav-bar">
          <ul>
            <li><svg-icon class-name="svg-icon" icon-class="search" />搜索</li>
            <li><svg-icon class-name="svg-icon" icon-class="demo" />DEMO</li>
            <li>
              <svg-icon class-name="svg-icon" icon-class="GitHub" />GITHUB
            </li>
            <li><svg-icon class-name="svg-icon" icon-class="label" />标签</li>
            <li><svg-icon class-name="svg-icon" icon-class="folder" />分类</li>
            <li>
              <svg-icon class-name="svg-icon" icon-class="about_us" />关于
            </li>
            <li>
              <svg-icon class-name="svg-icon" icon-class="message" />留言板
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper" @click.stop="scrollDown">
        <svg-icon class-name="opener" icon-class="arrow_bottom" />
      </div> -->
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