<template>
    <div id="particles">
        <div class="login">
           <div>O W E N</div>
        </div>
    </div>
</template>

<script>
import particlesJson from '../../assets/particles.json'
  export default {
      name:"login",
      data(){
          return {
            
          }
      },
      mounted(){
         particlesJS("particles",particlesJson);
      }
  }

</script>

<style lang="less" scoped>

#particles {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url();
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
}
  .login{
      z-index: 2;
      position: absolute;
      width: 380px;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 0 5px #333;
      top: 50%;
      left:50%;
      margin-top:-250px;
      margin-left:-190px;
      transition: all 1s;
      -moz-transition: all 1s;
      -o-transition: all 1s;
  }
</style>