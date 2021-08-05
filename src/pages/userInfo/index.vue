<template>
  <div class="userInfo_box">
    <div class="photo img-rotate-z">
      <img src="../../assets/image/author.jpg" alt="#" />
    </div>
    <div class="schoolMotto"><span>自强不息 , 知行合一</span></div>
    <ul class="blogInfo">
      <li>
        <div>文章</div>
        <div>0</div>
      </li>
      <li>
        <div>标签</div>
        <div>0</div>
      </li>
      <li>
        <div>分类</div>
        <div>0</div>
      </li>
    </ul>
    <a href="https://github.com/owenxc?tab=repositories" class="btn btn2">
      <span class="btn-inner"><svg-icon icon-class="GitHub"></svg-icon>Follow Me</span>
      <div class="btnbg-x"></div
    ></a>
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
.userInfo_box {
  width: 100%;
  min-height: 320px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.15);
    transition: all 0.5s;
  }
  .photo {
    width: 90px;
    height: 90px;
    overflow: hidden;
    border: 4px solid gray;
    margin: 20px 0;
    border-radius: 49px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .schoolMotto {
    text-align: center;
    font-size: 120%;
    font-family: inherit;
  }
  .blogInfo {
    width: 100%;
    display: flex;
    text-align: center;
    margin: 20px 0;
    justify-content: space-around;
    li > div {
      margin: 5px;
    }
  }
  .btn {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    padding: 5px;
    text-decoration: none;
    position: relative;
    color: snow;
    background: #49b1f5;
    width: 80%;
    text-align: center;
  }
  .btn2 {
    position: relative;
  }

  .btn2 .btnbg-x {
    position: absolute;
    left: 0px;
    width: 0;
    top: 0px;
    bottom: 0px;
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  .btn2:hover .btnbg-x {
    width: 100%;
    width: calc(100%);
    background: #e84c3d;
  }

  .btn2 .btn-inner {
    position: relative;
    z-index: 1;
  }
  .btn2:hover .btn-inner {
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
}
</style>