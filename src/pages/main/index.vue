<template>
  <div id="mainPage_box">
    <div class="articles">
      <text-render></text-render>
    </div>
    <div class="aside_box">
       <userInfo></userInfo>
    </div>
  </div>
</template>

<script>
import textRender from "@/components/textRender/index";
import userInfo from "@/pages/userInfo/index";
export default {
  name: "index",
  components: { textRender, userInfo },
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
    width: 300px;
    background: transparent;
    margin:20px 0px 20px 10px;
    // border-radius: 8px;
  }
  .articles{
    width: 800px;
    background: #fff;
    margin: 20px 0px;
    border-radius: 8px;
  }
}
</style>
