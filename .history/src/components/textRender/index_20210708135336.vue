<template>
  <div>
    <ul>
        <li v-for="item in dataList" :key="item.id">
            <div class="text_label">
                <span>{{item.date}}</span>
                <span><svg-icon :icon-class="item.articleType"></svg-icon></span>
            </div>
            <div class="text_">{{item.title}}</div>
            <div>{{item.synopsis}}</div>
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