<template>
    <div class="articleShow_box">
        <div>
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
}
</style>