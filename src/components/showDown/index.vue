<template>
  <div id="content" v-html="initData"></div>
</template>
<script>
import showdown from "showdown";
export default {
  props: ["itemInfo"],
  data() {
    return {};
  },
  computed: {
    initData() {
      let converter = new showdown.Converter();
      //转换markdown的字符串为html文件
      let initHtml = converter.makeHtml(this.itemInfo.content);
      return initHtml;
    },
  },
  methods: {},
};
</script>

<style lang="less">
#content {
  width: 100%;
  margin: 20px;
  padding: 20px;
  pre {
    background-color: #282c34;
    color: #abb2bf;
    font-size: 16px;
    padding: 20px;
    width: 90%;
    box-sizing: border-box;
    overflow-x:scroll;
  }
  ul>li,h1,h2,h3,h4,h5{
    width: 94%;
  }
}
</style>