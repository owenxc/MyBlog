<template>
  <div class="userInfo_box">
      <div class="photo">
        <img src="../../assets/image/author.jpg" alt="#">
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.userInfo_box{
  width: 100%;
  min-height: 300px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .photo{
    width: 100px;
    height: 100px;
    overflow: hidden;
    border:2px dotted blue;
    border-radius: 52px;
    margin: 20px 0;
    img{
      width: 100%;
      height: 100%;
    }
    &:hover{
      cursor: pointer;
      transition:2s linear;
      transform:rotate(-360deg);
    }
  }
}
</style>