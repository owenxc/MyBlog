<template>
  <div>
    <ul class="text_box">
        <li v-for="item in dataList" :key="item.id" class="text_item">
            <div class="text_label">
                <i class="el-icon-time">&nbsp;&nbsp;{{item.date}}</i>
                <span><svg-icon :icon-class="item.articleType"></svg-icon></span>
            </div>
            <div class="text_title">{{item.title}}</div>
            <div class="text_synopsis">{{item.synopsis}}</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mainText",
  props: [],
  data() {
    return {
        dataList:[
            {
                id:'1',
                date:'2021-07-08',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'js'
            },
             {
                id:'2',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'linux'
            }
        ]
    };
  },
};
</script>

<style lang="less" scoped>
.text_box{
  width: 100%;
  color:white;
  .text_item{
    height: 20vh;
    background-image: linear-gradient(to right, skyblue, black);
    margin: 12px;
    border-radius: 3px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    box-sizing: border-box;
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover{
      height: 22;
    }
  }
  .text_label{
    display: flex;
    justify-content: space-between;
    .svg-icon{
      font-size: 20px;
    }
  }
  .text_title{
    font-size: 20px;
    font-weight: blod;
  }
  .text_synopsis{
    font-size: 14px;
  }
}
</style>