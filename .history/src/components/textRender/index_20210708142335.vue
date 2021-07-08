<template>
  <div>
    <ul class="text_box">
        <li v-for="item in dataList" :key="item.id" class="text_item">
          <img src="" alt="">
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
  }
}
</style>