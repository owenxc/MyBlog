<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="panelShow"
    width="30%"
    :before-close="handleClose"
    :close-on-click-modal="false"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章标签:">
        <el-tag
          :key="tag"
          v-for="tag in articleTags"
          closable
          :disable-transitions="false"
          @close="tagClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+ 添加文章标签</el-button
        >
      </el-form-item>
      <el-form-item label="文章类型:">
        <el-select
          size="small"
          v-model="form.articleType"
          clearable
          placeholder="请选择"
        >
          <el-option
            v-for="item in articleTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章简介:">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="form.articleProfile"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="发布形式:">
        <el-radio-group v-model="form.releaseType">
          <el-radio label="public">公开</el-radio>
          <el-radio label="private">私密</el-radio>
          <el-radio label="draft">草稿</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose" size="small">取 消</el-button>
      <el-button type="primary" @click="saveInfo" size="small">{{
        isUpdate ? "更 新" : "发布"
      }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ["panelShow", "itemInfo", "dialogTitle", "isUpdate"],
  data() {
    return {
      form: {
        articleType: this.itemInfo.articleType || "",
        releaseType: this.itemInfo.releaseType || "public",
        articleProfile: this.itemInfo.articleProfile || "",
      },
      articleTags: this.itemInfo.tags || [],
      inputVisible: false,
      inputValue: "",
      articleTypeList: [
        {
          label: "原创",
          value: "original",
        },
        {
          label: "转载",
          value: "reprinted",
        },
      ],
    };
  },
  methods: {
    tagClose(tag) {
      this.articleTags.splice(this.articleTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.articleTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    handleClose() {
      this.$emit("handleClose");
    },
    saveInfo() {
      //保存提交文章
      let params = {
        author: this.$store.state.userInfo.name,
        content: this.itemInfo.content,
        articleTitle: this.itemInfo.articleTitle,
        articleType: this.form.articleType,
        releaseType: this.form.releaseType,
        articleProfile: this.form.articleProfile,
        tags: this.articleTags,
      };
      if(this.isUpdate){
        params.id = this.itemInfo._id
      }
      this.request({
        method: "post",
        url: `/api/blog/${this.isUpdate?'update':'insertblog'}`,
        data: params,
      })
        .then((res) => {
          this.$message.success(this.isUpdate?"更新成功":"发布成功");
          this.$router.push({ path: "/articleManage" });
        })
        .catch((err) => {
          this.$message.error(this.isUpdate?'更新异常':'发布异常');
        });
    },
  },
};
</script>
<style lang="less">
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>

