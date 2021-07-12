<template>
  <div class="article_box">
    <el-tabs :tab-position="tabPosition" style="height: 200px">
      <el-tab-pane
        v-for="menu in menuList"
        :key="menu.value"
        :label="`${menu.label}(${total})`"
      >
        <ul class="articles" v-if="articleList.length > 0">
          <li
            class="article_item"
            v-for="article in articleList"
            :key="article.date"
          >
            <div class="item">
              <div class="item_header">
                <div class="ellipsis">
                  {{ article.articleTitle }}
                </div>
    formatDate(value) {
                <div>{{}}</div>
              </div>
              <div class="item_label">
                <span>{{ article.articleType }}</span>
              </div>
              <div class="item_footer">
                <div style="color: #999aaa">
                  <span>阅读(0)</span>
                  <span>评论(0)</span>
                </div>
                <div>
                  <el-link icon="el-icon-view">查看</el-link>
                  <el-link icon="el-icon-edit">编辑</el-link>
                  <el-popconfirm title="确定要删除该文章吗 ?">
                    <el-link slot="reference" icon="el-icon-delete"
                      >删除</el-link
                    >
                  </el-popconfirm>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div v-else>
          <el-empty description="暂无数据"></el-empty>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "articleManage",
  data() {
    return {
      tabPosition: "top",
      total: 0,
      articleList: [],
      menuList: [
        {
          label: "全部",
          value: "all",
        },
        // {
        //   label: "公开",
        //   value: "public",
        // },
        // {
        //   label: "私密",
        //   value: "private",
        // },
        // {
        //   label: "草稿",
        //   value: "draft",
        // },
      ],
    };
  },
  created() {
    this.queryArticleData();
  },
  methods: {
    queryArticleData() {
      let params = {
        currentPage: 1,
        pageSize: 10000,
        author: this.$store.state.userInfo.name,
      };
      this.axios.post("/manage/api/blog/getBlogs", params).then((res) => {
        this.articleList = res.data.data.blog || [];
        this.total = res.data.data.totalCount || 0;
      });
    },
    formatDate(value) {
      if (typeof value == "undefined") {
        return "";
      } else {
        let date = new Date(parseInt(value));
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let h = date.getHours();
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        let s = date.getSeconds();
        s = s < 10 ? "0" + s : s;
        return y + "年" + MM + "月" + d + "日" + " " + h + ":" + m + ":" + s;
      }
    },
  },
};
</script>

<style lang="less">
.article_box {
  height: 100%;
  overflow-y: scroll;
  .el-tabs {
    padding: 20px;
  }
  .articles {
    overflow-y: hidden;
  }
  .article_item {
    margin: 16px 0;
    border-bottom: 1px dotted #ddd;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 16px 0;
      font-size: 16px;
      font-weight: 500;
      .item_label {
        margin: 5px 0;
        font-size: 12px;
        span {
          color: #fc5531;
          background: #fff5f2;
          width: 32px;
          border-radius: 2px;
        }
      }
      .item_header {
        display: flex;
        justify-content: space-between;
        .ellipsis {
          color: #555666;
          cursor: pointer;
          flex: 0.7;
          &:hover {
            color: red;
          }
        }
      }

      .item_footer {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
.article_box::-webkit-scrollbar {
  width: 0 !important;
}
</style>