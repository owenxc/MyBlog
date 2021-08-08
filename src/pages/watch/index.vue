<template>
  <div class="asider_base_Container watch_box">
    <div class="jun-meter">
      <div id="hh">
        <svg-icon :icon-class="dates[0]"></svg-icon>
      </div>
      <div id="hl">
        <svg-icon :icon-class="dates[1]"></svg-icon>
      </div>
      <div class="rect">
        <svg-icon icon-class="rect"></svg-icon>
        <svg-icon icon-class="rect"></svg-icon>
      </div>
      <div id="mh">
        <svg-icon :icon-class="dates[2]"></svg-icon>
      </div>
      <div id="ml">
        <svg-icon :icon-class="dates[3]"></svg-icon>
      </div>
      <div class="sh_sl">
        <div id="sh">
          <svg-icon :icon-class="dates[4]"></svg-icon>
        </div>
        <div id="sl">
          <svg-icon :icon-class="dates[5]"></svg-icon>
        </div>
      </div>
    </div>
    <div class="human">
      <img :src="humanGif" alt="" />
    </div>
    <div class="jun-date">
      <span>{{
        `${timeInfo.dateNow[0]}月${timeInfo.dateNow[1]}日${timeInfo.dateNow[2]}`
      }}</span>
    </div>
    <div class="jun-calendar-date">
      <span>{{ `农历${timeInfo.calendar}` }}</span>
    </div>
  </div>
</template>

<script>
import TimeGeneration from "../../common/timeGeneration.js";
export default {
  data() {
    return {
      elem: {},
      dates: [],
      timeInfo: {
        dateNow: [8,8,'星期一'],
        calendar: "七月初七",
      },
      humanGif: require("../../assets/image/human.gif"),
    };
  },
  created() {
    this.dates = ["8", "8", "8", "8", "8", "8"];
  },
  mounted() {
    this.updateTime();
  },
  methods: {
    updateTime() {
      let _this = this;
      const dateData = new TimeGeneration();
      setInterval(() => {
        _this.dates = dateData.getTime();
        _this.timeInfo.calendar = dateData.getCalendarDate();
        _this.timeInfo.dateNow = dateData.getDate();
        console.log(
          dateData.getDate(),
          dateData.getCalendarDate(),
          dateData.getTime()
        );
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.watch_box {
  width: 100%;
  height: 200px;
  background-color: #dfe6f0;
  border: 10px solid #fff;
  box-sizing: border-box;
  position: relative;
}
.jun-meter {
  width: 100%;
  display: flex;
  margin: 10px 0;
  position: absolute;
  bottom: 0px;
  .rect {
    width: 30px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -4px -9px 0 8px;
  }
  .sh_sl {
    display: flex;
    margin: 17px 0 0 15px;
    #sh,
    #sl {
      width: 20px;
      height: 20px;
      margin-left: -6px;
      .svg-icon {
        font-size: 20px;
      }
    }
  }
  #hh,
  #hl,
  #mh,
  #ml {
    width: 30px;
    height: 30px;
    .svg-icon {
      font-size: 40px;
    }
  }
}
.human {
  width: 100px;
  height: 100px;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
  }
}
.jun-date {
  display: inline-block;
  position: absolute;
  top: 70px;
  right: 10px;
  font-family: cursive,serif,sans-serif,fantasy,monospace;
}
.jun-calendar-date {
  display: inline-block;
  position: absolute;
  top: 100px;
  right: 10px;
  font-family: cursive,serif,sans-serif,fantasy,monospace;
}
</style>