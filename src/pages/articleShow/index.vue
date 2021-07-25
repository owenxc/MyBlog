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
  mounted(){
  },
  created() {
    this.itemInfo = this.$route.query;
  },
  methods: {

  },
};
</script>
<style lang="less" scoped>
.articleShow_box {
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  .content_box {
    width: 60%;
    color: #333;
    background: #fff;
    box-sizing: content-box;
    padding: 2%;
    border-radius: 2px;
    box-shadow: 0 3px 8px 6px rgba(7,17,27,0.06);
    &:hover{
      box-shadow: 0 3px 8px 6px rgba(7,17,27,0.15);
    }
  }
}
</style>