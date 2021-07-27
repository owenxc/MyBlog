<template>
  <div id="header_box">
    <div :class="navStyle">
      <el-button
        icon="el-icon-s-unfold"
        size="small"
        class="menu-button"
        @click="showPanel"
        >MENU</el-button
      >
      <ul class="header_nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/main"
            ><svg-icon icon-class="home_page" />首页</el-menu-item
          >
          <el-menu-item index="/writeBlog"
            ><svg-icon icon-class="demo" />博客管理</el-menu-item
          >
          <!-- <el-menu-item index="3"
            ><svg-icon icon-class="message" />消息中心</el-menu-item
          > -->
        </el-menu>
      </ul>
    </div>
    <span class="curArticle">永远相信明天更好.....</span>
    <main-asider></main-asider>
  </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
import mainAsider from "@/pages/asider/index";
export default {
  components: { mainAsider },
  data() {
    return {
      activeIndex: "/main",
      styleClass:['navbar']
    };
  },
  computed: {
     navStyle(){
       return this.styleClass
     }
  },
  mounted() {
    particlesJS("header_box", particlesJson);
    window.addEventListener("scroll",this.handleScroll)
  },
  methods: {
    showPanel() {
      this.$store.dispatch("actionChangeAsideDrawer", true);
    },
    handleSelect(keyPath) {
      this.$router.push({ path: keyPath });
    },
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 240){
        this.styleClass = ['navbar','scroll']
      }else{
        this.styleClass = ['navbar']
      }
    }
  },
};
</script>
<style lang="less">
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index:10;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px;
    color: #fff;
    background-color:transparent;
    border-color: rgba(255, 255, 255, 0.8);
    transition: all 0.4s;
    opacity: 1;
    .menu-button {
      height: 32px;
      outline: 0;
      color: inherit;
      background-color: inherit;
      border-width: 1px;
      border-style: solid;
      border-color: inherit;
      border-radius: 3px;
      font-size: 13px;
      text-align: center;
      &:hover {
        background: transparent;
        cursor: pointer;
        opacity: 0.7;
      }
      &:focus {
        background: transparent;
      }
    }
    .header_nav {
      .el-menu {
        background-color: inherit;
      }
      .el-menu.el-menu--horizontal {
        border-bottom: 0px;
        .el-menu-item {
          color:inherit;
          font-size: 16px;
          padding: 0px;
          margin: 0 15px;
          height: 40px;
          line-height: 40px;
          font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
          &:hover {
            background-color: transparent;
            color: red;
          }
          &:focus {
            background-color: transparent;
            color: red;
          }
        }
        .is-active {
          font-weight: bold;
        }
      }
    }
}
.scroll{
    background-image: linear-gradient(to bottom right, #063c52, #1a0b0e);
    color:#fff;
    height: 64px;
    border-color:#fff;
    transition: all 0.4s;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.08);
}
.curArticle{
  color:#fff;
  font-size: 38px;
  position:relative;
  top:30%;
  left:50%;
  margin-left: -10%;
}
</style>