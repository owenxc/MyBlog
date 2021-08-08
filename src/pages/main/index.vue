<template>
  <div id="mainPage_box">
    <div class="articles">
      <text-render></text-render>
    </div>
    <div class="aside_box">
       <userInfo></userInfo>
       <watch></watch>
    </div>
  </div>
</template>

<script>
import textRender from "@/components/textRender/index";
import userInfo from "@/pages/userInfo/index";
import watch from "@/pages/watch"
export default {
  name: "index",
  components: { textRender, userInfo,watch },
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
    max-width: 360px;
    background: transparent;
    margin:20px 0px 20px 20px;
  }
  .articles{
    width: 900px;
    max-width: 1000px;
    background: #fff;
    margin: 20px 0px;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
      box-shadow: 0 3px 8px 6px rgba(7,17,27,0.15);
      transition: all 0.5s;
    }
  }
}
</style>
