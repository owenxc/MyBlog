<template>
  <div id="mainPage_box">
    <el-button @click="initUser">生成数据</el-button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
  
    };
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
          alert(res.data.data.msg)
        })
        .catch((err) => {
          alert(err.data.data.msg)
        });
    },
  },
};
</script>

<style lang="less">
#mainPage_box {
  width: 100%;
  height: 0vh;
  background-image: linear-gradient(45deg,rgba(165, 97, 30, 0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5));
  .carousel{
    width: 40%;
    height: auto;
    margin:0 auto;
  }
  .imgStyle{
    width: inherit;
    height: inherit;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
