<template>
  <div id="mainPage_box">
    <div class="articles">
      <content-info></content-info>
    </div>
    <div class="aside_box">
       <userInfo></userInfo>
       <watch></watch>
    </div>
  </div>
</template>

<script>
import contentInfo from "./contentInfo";
import userInfo from "@/pages/userInfo/index";
import watch from "@/pages/watch"
export default {
  name: "index",
  components: { contentInfo, userInfo,watch },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
#mainPage_box {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  .aside_box{
    min-width: 300px;
    max-width: 360px;
    background: transparent;
    margin:20px 0px 20px 20px;
  }
  .articles{
    width: 900px;
    max-width: 1000px;
    margin: 20px 0px;
  }
}
</style>
