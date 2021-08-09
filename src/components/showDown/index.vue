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
  pre {
    background-color: #282c34;
    color: #abb2bf;
    font-size: 16px;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    overflow-x: scroll;
  }
  ul {
    li{
      width: 100%;
      padding: 5px;
      color:rgb(76,73,72);
    }
    li:before{
      content:"\27A4   ";
      color:rgb(93, 109, 204);
    }
  }
  ul > h1,
  h2,
  h3,
  h4,
  h5 {
    width: 100%;
    transition: padding-left 0.5s;
    &:hover {
      cursor: pointer;
      padding-left: 20px;
    }
  }
  p>img{
    width: 100%;
    height: 100%;
  }
}
</style>