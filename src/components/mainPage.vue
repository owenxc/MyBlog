<template>
  <div class="box">
    <input type="text" v-model="writeUM">
     <button @click="getUMInfo()">按钮</button>
     <textarea v-model="UMInfo" name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  name:'mainPage',
  data() {
    return {
       UMInfo:'',
       writeUM:''
    };
  },

  methods: {
     getUMInfo(){
       console.log(this.$store.state.UM)
        //  this.$store.dispatch('actionChangeUM',this.writeUM);
        //  this.UMInfo = this.$store.state.UM;
     }
  }
};
</script>
