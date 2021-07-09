<template>
  <div id="header_box">
    <el-button icon="el-icon-s-unfold" class="menu-button" @click="showPanel"
      >MENU</el-button
    >
    <main-asider></main-asider>
    <ul class="header_nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1"><svg-icon icon-class="home_page" />首页</el-menu-item>
        <!-- <el-menu-item index="2"><svg-icon icon-class="demo" />博客</el-menu-item> -->
        <el-popover
          placement="bottom"
          width="400"
          trigger="hover">
          <el-table :data="gridData">
            <el-table-column width="150" property="date" label="日期"></el-table-column>
            <el-table-column width="100" property="name" label="姓名"></el-table-column>
            <el-table-column width="300" property="address" label="地址"></el-table-column>
          </el-table>
        <el-menu-item index="2"><svg-icon icon-class="demo" />博客</el-menu-item>
        </el-popover>
        <!-- 
        <el-submenu index="2">
          <template slot="title"><svg-icon icon-class="demo" />博客</template>
          <el-menu-item index="2-1">创作中心</el-menu-item>
          <el-menu-item index="2-2">文章管理</el-menu-item>
          <el-menu-item index="2-3">浏览数据</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="3"
          ><svg-icon icon-class="message" />消息中心</el-menu-item
        >
      </el-menu>
    </ul>
  </div>
</template>

<script>
import particlesJson from "@/assets/particles.json";
import mainAsider from "@/pages/asider/index";
export default {
  components: { mainAsider },
  data() {
    return {
      activeIndex: "1",
    };
  },
  computed: {},
  mounted() {
    particlesJS("header_box", particlesJson);
  },
  methods: {
    showPanel() {
      this.$store.dispatch("actionChangeAsideDrawer", true);
      console.log(this.$store.state.asideDrawer);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
.menu-button {
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
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  font-size: 13px;
  text-align: center;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
}
.header_nav {
  color: #fff;
  position: absolute;
  z-index: 1000;
  top: 6px;
  right: 10px;
  .el-menu {
    background-color: transparent;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: 0px;
    .el-menu-item {
      color: #fff;
      font-size: 16px;
      padding: 0px;
      margin: 0 15px;
      height: 40px;
      line-height: 40px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
</style>