<template>
  <div id="mainPage_box">
    <div class="articles">
      <text-render></text-render>
    </div>
  </div>
</template>

<script>
import textRender from "@/components/textRender/index";
export default {
  name: "index",
  components: { textRender },
  data() {
    return {};
  },
  methods: {
  
  },
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
  .articles{
    flex:0.6
  }
}

</style>
