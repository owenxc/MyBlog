<template>
  <div id="mainPage_box">
    <div class="aside_left">
      <user-info></user-info>
    </div>
    <div class="articles">
      <text-render></text-render>
    </div>
    <div class="aside_right">

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
  overflow: hidden;
  // min-height: 100;
  background-image: linear-gradient(
    45deg,
    rgba(165, 97, 30, 0.5),
    rgba(199, 121, 208, 0.5),
    rgba(75, 192, 200, 0.5)
  );
  display: flex;
  .aside_left{
    width: 30%;
  }
  .articles {
    width: 60%;
  }
  .aside_right{
    flex:0.3;
  }
}
</style>
