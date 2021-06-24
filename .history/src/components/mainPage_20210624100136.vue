<template>
    <div id="particles">
    </div>
</template>

<script>
import particlesJson from '@/assets/particles.json'
  export default {
      name:"mainPage",
      data(){
  
          }
      },
      mounted(){
         particlesJS("particles",particlesJson);
      }
  }

</script>

<style lang="less" scoped>

</style>
