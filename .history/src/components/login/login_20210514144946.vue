<template>
    <div id="loginBox">
        <div class="login">
            <div class="title">
                开放平台
            </div>
            <i-input v-model="account"   placeholder="账号"></i-input>
            <i-input v-model="password"  placeholder="密码"></i-input>
            <i-button @click="userLogin()" small type="success" long>登 录</i-button>
        </div>
    </div>
</template>

<script>
  export default {
      name:"login",
      data(){
          return {
             account:'',
             password:'',
          }
      },
      methods:{
          userLogin(){   
              console.log(this.account,this.password)   
              if(this.account === 'owen' && this.password === '5110822'){
                  this.$store.dispatch('actionChangeUM',this.account);
                  this.$store.dispatch('actionChangeIsLogin',true);
                  this.$router.replace('/mainPage');
              }
          }
      }
  }

</script>

<style lang="less" scoped>
</style>