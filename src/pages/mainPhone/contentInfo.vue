<template>
  <div
    class="text_box"
    v-infinite-scroll="load"
    :infinite-scroll-disabled="disabled"
    :infinite-scroll-immediate="false"
    style="overflow: auto"
  >
    <div class="text_item" v-for="item in dataList" :key="item._id">
      <ul class="text_Info">
        <li class="ellipsis" @click="viewArticle(item)">
          {{ item.articleTitle }}
        </li>
        <li>
          <svg-icon icon-class="date_01"></svg-icon
          >{{ transferDate(item.date) }} | 前端
        </li>
        <li>
          <svg-icon icon-class="label"></svg-icon>{{ item.tags.join("-") }}
        </li>
      </ul>
    </div>
    <div class="tipStyle" v-if="loading">Loading...</div>
    <div class="tipStyle" v-if="finished">没有啦~~</div>
  </div>
</template>

<script>
import { format } from "@/common/until.js";
export default {
  name: "mainText",
  props: [],
  data() {
    return {
      dataList: [],
      total: 0,
      currentPage: 1,
      pageSize: 4,
      loading: false,
      finished: false,
    };
  },
  created() {
    this.queryArticleData();
  },
  computed:{
     disabled(){
       return this.loading || this.finished
     }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(()=>{
        if (this.finished == false) {
        this.pageSize++;
        this.queryArticleData();
       }
      },5000)
    },
    queryArticleData() {
      let params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        author: this.$store.state.userInfo.name,
      };
      let _self = this;
      _self
        .request({
          method: "post",
          url: "/api/blog/getBlogs",
          data: params,
        })
        .then((res) => {
          let datas = res.data.blog;
          if (datas.length > 0) {
            _self.dataList = datas;
            _self.loading = false;
            if(datas.length < _self.pageSize){
              _self.finished = true
            }
          }else{
            _self.loading = false;
            _self.finished = true;
          }
          _self.loading = false
        })
        .catch((err) => {
           _self.loading = false;
        });
    },
    transferDate(date) {
      return format(date);
    },
    //跳转到文章阅读界面
    viewArticle(data) {
      this.$router.push({ name: "articleShow", query: { id: data._id } });
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.queryArticleData();
    },
  },
};
</script>

<style lang="less" scoped>
.list{
  li{
     height: 45vh;
     border:1px solid #333
  }
}

.text_box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 30px;
  .text_item {
    width: 100%;
    height: 0;
    padding-bottom: 30%;
    margin: 5px 10px;
    background: #fff;
    position: relative;
    border-radius: 3px;
    cursor: pointer;
    overflow: hidden;
    color: #333;
    &:hover {
      box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.15);
      transition: all 0.5s;
    }
    .text_Info {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      padding: 0 4% 4%;
      li {
        margin-bottom: 5px;
        .svg-icon {
          margin-left: 0px;
        }
      }
      li:nth-child(1) {
        font-size: 1.1em;
        &:hover {
          color: rgb(44, 176, 228);
          transition: all 0.5s;
        }
      }
      li:nth-child(2) {
        font-size: 0.9em;
        color: gray;
      }
      li:nth-child(3) {
        font-size: 0.9em;
        color: gray;
      }
    }
  }
}
.tipStyle{
  width: 100%;
  text-align: center;
}
</style>