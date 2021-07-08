<template>
  <div id="mainPage_box">
    <!-- <el-button @click="initUser">生成数据</el-button> -->
    <div class="articles">
      <text-render></text-render>
    </div>
  </div>
</template>

<script>
import textRender from "@/components/textRender/index";
export default {
  name: "index",
  components: { textRender },
  data() {
    return {};
  },
  methods: {
    initUser() {
      const params = {
        userName: "owen",
        password: "5110822",
        role: "admin",
        tel: "15962614761",
        name: "owen",
        nation: "中国-陕西-商洛",
        education: "东北大学",
      };
      this.axios
        .post("/manage/api/user/register", params)
        .then((res) => {
          alert(res.data.data.msg);
        })
        .catch((err) => {
          alert(err.data.data.msg);
        });
    },
  },
};
</script>

<style lang="less">
#mainPage_box {
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    45deg,
    rgba(165, 97, 30, 0.5),
    rgba(199, 121, 208, 0.5),
    rgba(75, 192, 200, 0.5)
  );
  display: flex;
  justify-content: space-around;
  .articles{
    width: 80%;
  }
}

</style>
