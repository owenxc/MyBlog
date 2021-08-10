<template>
  <div class="wrapper">
    <div class="container">
      <div id="content" v-html="mdContent" ref="helpDocs"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";
const rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

export default {
  data() {
    return {
      mdContent: "",
    };
  },
  created() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      let _self = this;
      _self
        .request({
          method: "post",
          url: "/api/blog/queryById",
          data: { id: _self.$route.query.id },
        })
        .then((res) => {
          _self.mdContent = marked(res.data.blog[0].content) || "";
        });
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
}
#content {
  //  width: 100%;
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