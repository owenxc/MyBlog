<template>
     <div id="header_box">
       <el-button icon="el-icon-s-unfold" class="menu-button" @click="showPanel"
      >MENU</el-button>
      <main-asider></main-asider>
      <ul class="header_nav">
        <li><svg-icon icon-class="home_page" />首页</li>
        <li><svg-icon icon-class="demo" />创作中心</li>
      </ul>
    </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
import mainAsider from "@/pages/asider/index"
export default {
  components:{mainAsider},
  data() {
    return {
     
    };
  },
  computed: {},
  mounted() {
    particlesJS("header_box", particlesJson);
  },
  methods: {
     showPanel() {
      this.$store.dispatch("actionChangeAsideDrawer", true);
      console.log(this.$store.state.asideDrawer)
     },
  },
};
</script>

<style lang="less" scoped>
.menu-button{
    position: absolute;
    z-index: 1000;
    margin: 1em;
    padding: 0;
    width: 100px;
    height: 32px;
    top: 6px;
    left: 10px;
    outline: 0;
    color: #fff !important;
    border: 1px solid rgba(255,255,255,0.8);
    border-radius: 3px;
    font-size: 13px;
    text-align: center;
    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
}
.header_nav{
  color:#fff;
  position: absolute;
  z-index: 1000;
  top:6px;
  right: 10px;
  display: flex;
  justify-content: space-around;
  li{
    margin: 2px 5px;
    &:hover{
      cursor: pointer;
      color: rgb(169, 172, 158);
      border-bottom: 2px solid skyblue;
    }
  }
}
</style>