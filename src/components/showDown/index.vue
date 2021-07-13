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
      return initHtml
    },
  },
  methods: {
  },
};
</script>