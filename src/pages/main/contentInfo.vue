<template>
    <div class="text_box">
        <div class="text_item" v-for="item in dataList" :key="item._id">
           <div class="text_pic image-hover img-zoom-in"><img src="./../../assets/image/home_top_bg.jpg" alt="###"></div>
           <ul class="text_Info">
             <li class="ellipsis" @click="viewArticle(item)">{{item.articleTitle}}</li>
             <li><svg-icon icon-class="date_01"></svg-icon>{{transferDate(item.date)}} | 前端</li>
             <li><svg-icon icon-class="label"></svg-icon>{{item.tags.join('-')}}</li>
           </ul>
        </div>
        <div class="pagination">
           <el-pagination
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
    </div>
</template>

<script>
import {format} from "@/common/until.js"
export default {
  name: "mainText",
  props: [],
  data() {
    return {
        dataList:[],
        total:0
    };
  },
  created(){
    this.queryArticleData()
  },
  methods:{
     queryArticleData() {
      let params = {
        currentPage: 1,
        pageSize: 10,
        author: this.$store.state.userInfo.name,
      };
       let _self = this;
       _self.request({
          method:'post',
          url:'/api/blog/getBlogs',
          data:params
       }).then(res=>{
           this.dataList = res.data.blog || [];
           console.log(this.dataList)
           this.total = res.data.totalCount || 0;
       }).catch(err=>{
          console.log(err)
       })
    },
    transferDate(date){
      return format(date)
    },
    //跳转到文章阅读界面
    viewArticle(data){
      debugger
      this.$router.push({name:'articleShow',query:data})
    }
  }
};
</script>

<style lang="less" scoped>
.text_box{
  width: 100%;
  display: flex;
  flex-wrap:wrap ;
  position: relative;
  padding-bottom: 30px;
  .pagination{
    position: absolute;
    bottom: 0.5%;
    left: 50%;
  }
  .text_item{
    width:48%;
    height:0;
    padding-bottom:36%;
    margin-right:2%;
    margin-bottom:30px;
    background: #fff;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    color: #333;
    &:hover{
      box-shadow: 0 3px 8px 6px rgba(7,17,27,0.15);
      transition: all 0.5s;
    }
    .text_pic{
      width: 100%;
      height: 60%;
      position: absolute;
      top:0;
      left:0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text_Info{
      width: 100%;
      position: absolute;
      left:0;
      bottom: 0;
      box-sizing: border-box;
      padding: 0 10% 8%;
      li{
        margin-bottom: 5px;
         .svg-icon{
          margin-left: 0px;
        }
      }
      li:nth-child(1){
        font-size: 1.1em;
        &:hover{
          color: rgb(44, 176, 228);
          transition: all 0.5s;
        }
      }
      li:nth-child(2){
        font-size:0.9em;
        color:gray;
      }
      li:nth-child(3){
         font-size:0.9em;
        color:gray;
      }
    }
  }
}
</style>