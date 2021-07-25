<template>
  <div id="mainPage_box">
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
  height: auto;
  min-height: 100vh;
  background: #fff;
  display: flex;
}
</style>
