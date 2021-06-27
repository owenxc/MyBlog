<template>
  <div class="login_box">
    <div id="particles">
      <div :class="navClass">
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
      <div class="site-info"></div>
      <div class="scroll-down"></div>
    </div>
    <div id="content_box"></div>
  </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
export default {
  name: "login",
  data() {
    return {
      navClass:["nav"]
    };
  },
  computed: {
 
  },
  mounted() {
    particlesJS("particles", particlesJson);
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    windowScroll() {
         if(window.pageYOffset !== 0){
           this.navClass = ["nav","nav2"]
         }else{
            this.navClass = ["nav"]
         }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll); //销毁滚动事件
  },
};
</script>

<style lang="less" scoped>
.login_box {
  position: relative;
}
.nav {
  width: 96%;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  padding:18px 36px;
  display: flex;
  justify-content: space-between;
  .nav-title {
    font-size: 18px;
  }
  .nav-bar {
    ul li {
      display: inline;
      list-style-type: none;
      margin: 0 10px;
      cursor: pointer;
      &:hover{
        border-bottom: 3px solid skyblue;
      }
    }
  }
}
.nav2{
  background: rgb(202, 194, 194);
  color: black;
  opacity: 0.8;
}
</style>