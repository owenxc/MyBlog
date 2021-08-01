<template>
  <div id="mainPage_box">
    <div class="aside_box">
      
    </div>
    <div class="articles">
      <text-render></text-render>
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
    width: 400px;
    background: #fff;
    margin: 20px 10px 20px 20px;
  }
  .articles{
    width: 1000px;
    background: #fff;
    margin: 20px 20px 20px 10px;
  }
}
</style>
