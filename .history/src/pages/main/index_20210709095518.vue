<template>
  <div id="mainPage_box">
    <div class="aside_left">
      <user-info></user-info>
    </div>
    <div class="articles">
      <text-render></text-render>
    </div>
    <div>

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
  min-height: 100vh;
  background-image: linear-gradient(
    45deg,
    rgba(165, 97, 30, 0.5),
    rgba(199, 121, 208, 0.5),
    rgba(75, 192, 200, 0.5)
  );
  display: flex;
  justify-content: space-around;
  .asideInfo{
    flex:0.3;
  }
  .articles {
    flex: 0.9;
  }
}
</style>
