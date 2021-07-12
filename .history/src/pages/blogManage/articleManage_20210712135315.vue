<template>
  <div class="article_box">
    <el-tabs :tab-position="tabPosition" style="height: 200px">
      <el-tab-pane
        v-for="menu in menuList"
        :key="menu.value"
        :label="menu.label"
      >
        <ul class="articles" v-if="articleList.length>0">
          <li class="article_item" v-for="article in articleList" :key="article.id">
            <div class="item">
              <div class="item_header">
                <div class="ellipsis">
                  {{article.articleTitle}}
                </div>
                <div>2021-06-23 17:06:17</div>
              </div>
              <div class="item_label">
                <span>{{article.articleType}}</span>
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
                  <!-- <el-link icon="el-icon-delete">删除</el-link> -->
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
  data() {
    return {
      tabPosition: "top",
      articleList:[
          // {
          //  id:1,
          //  articleTitle:'和士大夫十分的速度过快是根深蒂固',
          //  articleType:'原创'
          // },
          // {
          //  id:2,
          //  articleTitle:'就是打开刚开始的口感是公司看到过',
          //  articleType:'转载'
          // },
          // { 
          //  id:3,
          //  articleTitle:'JFK规范化问问看微软微软微软',
          //  articleType:'草稿'
          // }
      ],
      menuList: [
        {
          label: "全部",
          value: "all",
        },
        {
          label: "公开",
          value: "public",
        },
        {
          label: "私密",
          value: "private",
        },
        {
          label: "草稿",
          value: "draft",
        },
      ],
    };
  },
  created(){

  },
  methods: {
    query
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
        .ellipsis{
            color:#555666;
            cursor: pointer;
            flex:0.7;
            &:hover{
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