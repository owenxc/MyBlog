<template>
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
      <div class="wrapper" @click.stop="scrollDown">
        <svg-icon class-name="opener" icon-class="arrow_bottom" />
      </div>
    </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
export default {
  name: "homeHeader",
  data() {
    return {
      navClass: ["nav"],
    };
  },
  computed: {},
  mounted() {
    particlesJS("particles", particlesJson);
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    windowScroll() {
      if (window.pageYOffset !== 0) {
        this.navClass = ["nav", "nav2"];
      } else {
        this.navClass = ["nav"];
      }
    },
    scrollDown() {
      
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
};
</script>

<style lang="less" scoped>
.nav {
  width: 96%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 18px 36px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  font-family: cursive;
  .nav-title {
    font-size: 18px;
  }
  .nav-bar {
    ul li {
      display: inline;
      list-style-type: none;
      margin: 0 10px;
      cursor: pointer;
      &:hover {
        border-bottom: 3px solid skyblue;
        color: red;
      }
    }
  }
}
.nav2 {
  background-image: linear-gradient(to bottom right, black, skyblue);
  opacity: 0.8;
  .nav-title {
    font-size: 22px;
  }
}
.wrapper {
  width: 70px;
  height: 70px;
}
.opener:hover {
  -webkit-transition-delay: 0;
  transition-delay: 0;
  opacity: 1;
  font-size: 30px;
}
.opener {
  cursor: pointer;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  position: absolute;
  color: #fff;
  top: 0;
  left: 0;
  opacity: 0.6;
  -webkit-animation: opener 0.5s ease-in-out alternate infinite;
  animation: opener 0.5s ease-in-out alternate infinite;
  -webkit-transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out 0.2s;
  transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out 0.2s;
}
@-webkit-keyframes opener {
  from {
    top: 0px;
  }
  to {
    top: 30px;
  }
}
@keyframes opener {
  from {
    top: 0px;
  }
  to {
    top: 30px;
  }
}
.wrapper {
  font-size: 26px;
  position: relative;
  top: 90vh;
  left: 50%;
}
</style>