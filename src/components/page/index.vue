<template>
  <div id="mainPage_box">
    <el-button @click="getDataList">点我获取数据</el-button>
    <el-button @click="initUser">TesT</el-button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    getDataList() {
      const params = {
        blogAuthor: "owen",
        content: "djsdfsdf",
        blogTitle: "test",
        date: Date.now().toString(),
      };
      this.axios
        .post("/manage/api/blog/insertblog", params)
        .then((res) => {
          console.log("获取数据成功", res);
        })
        .catch((err) => {
          console.log("获取数据失败", err);
        });
    },
    initUser() {
      const params = {
        userName: "admin",
        password: "5110822",
        role: "admin",
        tel: "110",
        name: "owen",
        nation: "中国",
        education: "东北大学",
      };
      this.axios
        .post("/manage/api/user/register", params)
        .then((res) => {
          console.log("获取数据成功", res);
        })
        .catch((err) => {
          console.log("获取数据失败", err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
#mainPage_box {
  width: 100%;
  height: 50vh;
  background-image: linear-gradient(to bottom, black, rgb(26, 11, 14));
}
</style>
