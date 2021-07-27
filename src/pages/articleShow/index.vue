<template>
  <div class="articleShow_box">
    <div class="content_box">
      <show-down :itemInfo="itemInfo"></show-down>
    </div>
    <span class="scrollTop" @click="scrollTop" v-show="showScrollTop">Up</span>
  </div>
</template>
<script>
import showDown from "@/components/showDown/index";
export default {
  components: { showDown },
  data() {
    return {
      itemInfo: "",
      showScrollTop:false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTopBtn);
  },
  created() {
    this.itemInfo = this.$route.query;
  },
  methods: {
    scrollTopBtn() {
    
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if(scrollTop > 1000){
        this.showScrollTop = true
      }else{
        this.showScrollTop = false
      }
    },
    scrollTop(){
      let scrollToptimer = setInterval(function () {
          let top =window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
          let speed = 150;
          if (document.body.scrollTop!=0) {
              document.body.scrollTop -= speed;
          }else {
              document.documentElement.scrollTop -= speed;
          }
          if (top == 0) {
              clearInterval(scrollToptimer);
          }
      }, 30)
    }
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
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
    &:hover {
      box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.15);
    }
  }
}
.scrollTop {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  color: skyblue;
  font-weight: bolder;
  line-height: 40px;
  // border-radius: 20px;
  background: #fff;
  position: fixed;
  right: 0.2%;
  bottom: 7%;
  &:hover {
    cursor: pointer;
  }
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
}
</style>