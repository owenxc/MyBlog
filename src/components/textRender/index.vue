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
            },
              {
                id:'3',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'linux'
            },
              {
                id:'4',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'linux'
            },
              {
                id:'5',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'linux'
            },
              {
                id:'6',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'linux'
            },
              {
                id:'7',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'css'
            },
              {
                id:'8',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'linux'
            },
              {
                id:'9',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'html'
            },
              {
                id:'10',
                date:'2021-07-07',
                title:'常见的Linux命令',
                synopsis:'作为前端程序员,合适的飞机事故市国土环境负荷是否合伙人而恶团伙的话更好的的很好的话地方很多和',
                articleType:'nodejs'
            },
        ]
    };
  },
};
</script>

<style lang="less" scoped>
.text_box{
  width: 100%;
  .text_item{
    min-height: 100px;
    margin:20px;
    padding-bottom: 20px;
    display: flex;
    border-bottom: 1px dashed  gray;
    flex-direction: column;
    justify-content: space-between;
    &:hover{
      cursor: pointer;
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