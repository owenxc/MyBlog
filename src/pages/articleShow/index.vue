<template>
  <div class="articleShow_box">
    <div class="content_box">
      <show-down :itemInfo="itemInfo"></show-down>
    </div>
  </div>
</template>
<script>
import showDown from "@/components/showDown/index";
export default {
  components: { showDown },
  data() {
    return {
      itemInfo: "",
    };
  },
  created() {
    this.itemInfo = this.$route.query;
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.articleShow_box {
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  background: rgba(219, 215 ,207, 60%);
  .content_box {
    width: 70%;
    background: #fff;
    box-sizing: content-box;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
  }
  #content{
    pre{
      background-color: #333;
      color:#fff
    }
  }

}
</style>