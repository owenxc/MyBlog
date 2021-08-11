<template>
  <div class="write_blog_box">
    <div class="flex_Box">
      <el-input
        type="text"
        placeholder="请输入文章标题(5~100个字)"
        v-model="articleTitle"
        maxlength="100"
        show-word-limit
      ></el-input>
      <el-button
        v-if="!isUpdate"
        class="ml-20"
        type="primary"
        @click="showDialog('insert')"
        >发布文章</el-button
      >
      <el-button v-if="isUpdate" class="ml-20" type="primary" @click="showDialog('update')"
        >更新文章</el-button
      >
    </div>
    <mavon-editor
      :toolbars="toolbars"
      v-model="content"
      ref="md"
      class="m-10"
    />
    <blog-detail
      v-if="panelShow"
      :itemInfo="itemInfo"
      :panelShow="panelShow"
      :dialogTitle="dialogTitle"
      :isUpdate="isUpdate"
      @handleClose="handleClose"
    ></blog-detail>
  </div>
</template>

<script>
import blogDetail from "./blogDetail.vue";
export default {
  components: { blogDetail },
  data() {
    return {
      panelShow: false,
      //文章标题
      articleTitle: "",
      //文章内容
      content: "",
      itemInfo: {},
      //富文本编辑器
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: false, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      isUpdate:false,
      dialogTitle:''
    };
  },
  created() {
    let id = this.$route.query.id || ''
    if(id){
      this.isUpdate = true
      this.getBlog(id)
    }
  },
  methods: {
    showDialog(type) {
      //显示弹窗
      this.panelShow = true;
      this.itemInfo.content = this.content;
      this.itemInfo.articleTitle = this.articleTitle;
      this.dialogTitle = this.isUpdate ? '更新文章':'发布文章'
    },
    handleClose() {
      this.panelShow = false;
      this.itemInfo = {};
    },
    getBlog(id) {
      let _self = this;
      _self
        .request({
          method: "post",
          url: "/api/blog/queryById",
          data: { id: id },
        })
        .then((res) => {
          let data = res.data.blog[0]
          _self.content = data.content || "";
          _self.articleTitle = data.articleTitle || "";
          _self.itemInfo = data;
        });
    },
  },
};
</script>
<style lang="less">
.flex_Box {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  .el-input {
    width: 40%;
  }
  .el-button {
    background: linear-gradient(
      92deg,
      #ffba40,
      #ff503e 37%,
      #ff2f50 81%,
      #ff1b40
    );
    border: 0px;
    font-weight: bold;
    &:hover {
      background: linear-gradient(
        90deg,
        #ff9a01,
        #ff503e 34%,
        #ff2b36 66%,
        #ff1b40
      );
    }
  }
}
.write_blog_box {
  height: 100%;
  overflow: hidden;
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-image: url("../../assets//image/home_top_bg.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  // .v-note-wrapper.shadow{
  //   border: 1px solid #c6c6c6;
  // }
  .v-note-wrapper {
    // flex: 0.85;
    height: 100%;
    border-radius: 0;
  }
}
</style>