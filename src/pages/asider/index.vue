<template>
  <div>
    <el-drawer
      v-if="!isMobile"
      title="权限管理"
      :visible.sync="drawer"
      direction="ltr"
      size="300px"
      :before-close="closeDrawer"
    >
      <ul>
        <li @click="login()">登录状态:{{ loginStatus }}</li>
        <li>用户名称:</li>
        <li>菜单权限:</li>
        <li></li>
        <li></li>
      </ul>
    </el-drawer>
    <el-drawer
      v-if="isMobile"
      :visible.sync="drawer"
      direction="ltr"
      size="300px"
      class="mobile_Style"
      :before-close="closeDrawer"
    >
      <div class="asideContent">
        <div class="photo img-rotate-z">
          <img src="../../assets/image/author.jpg" alt="#" />
        </div>
        <div>
          <span>自强不息</span>
          <el-divider direction="vertical"></el-divider>
          <span>知行合一</span>
        </div>
        <el-divider
          ><svg-icon icon-class="wexin"></svg-icon>x521521c</el-divider
        >
        <ul class="menuStyle">
          <li>
            <el-link :underline="false" @click="toggleFun('home')">
              <svg-icon icon-class="home_page"></svg-icon>
              <span>首 页</span></el-link
            >
          </li>
          <li>
            <el-link :underline="false" @click="toggleFun('demo')">
              <svg-icon icon-class="demo"></svg-icon><span>博客管理</span>
            </el-link>
          </li>
          <li>
            <el-link :underline="false" @click="toggleFun('')">
              <svg-icon icon-class="resource"></svg-icon
              ><span>资料中心 (开发中...)</span>
            </el-link>
          </li>
          <li>
            <el-link :underline="false" @click="toggleFun('')">
              <svg-icon icon-class="message"></svg-icon
              ><span>留言板 (设计中...)</span>
            </el-link>
          </li>
        </ul>
        <el-divider>
          <a href="https://github.com/owenxc?tab=repositories">
            <i class="gitStyle"
              ><svg-icon icon-class="GitHub"></svg-icon>Follow Me</i
            >
          </a>
        </el-divider>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
        valueDate:new Date()
    };
  },
  computed: {
    drawer: function () {
      return this.$store.state.asideDrawer;
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
    loginStatus() {
      let isLogon = this.$store.state.isLogin;
      if (isLogon) {
        return "已登录";
      } else {
        return "未登录";
      }
    },
  },
  methods: {
    closeDrawer() {
      this.$store.dispatch("actionChangeAsideDrawer", false);
    },
    login() {
      this.$router.replace({ path: "/login" });
    },
    toggleFun(type) {
      if (type == "home") {
        this.closeDrawer();
        this.$router.replace({ path: "/mainPhone" });
      } else if (type == "demo") {
        this.$message.warning("你没有权限!");
      } else {
        this.$message.error("开发中....");
      }
    },
  },
};
</script>

<style lang="less">
.mobile_Style {
  .el-drawer__header {
    padding: 5px 2px 0;
    margin-bottom: 0px;
  }
  .svg-icon {
    font-size: 1em;
  }
}
.asideContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  .photo {
    width: 70px;
    height: 70px;
    overflow: hidden;
    border: 4px solid gray;
    margin: 10px 0;
    border-radius: 49px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.gitStyle {
  color: blue;
  .svg-icon {
    fill: orange;
  }
}
.menuStyle {
  width: 90%;
  li {
    padding: 15px 10px;
    .svg-icon {
      fill: #4c4948;
      font-size: 1.3em;
      margin-right: 30px;
    }
    span {
      font-size: 1em;
      font-weight: lighter;
      color: #4c4948;
    }
  }
}
</style>