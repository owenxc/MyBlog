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

<style lang="less" >
#loginBox{
    width: 100%;
    height: 412px;
    position: relative;
    background: url('../../assets/bgImage.jpg') no-repeat;
    background-size: 100%;
     .login{
       position: absolute;
       z-index: 2;
       width: 180px;
       border-radius: 2px;
        background-color:#000; opacity:0.5;
       box-shadow: 0px 0px 5px #333333;
       top: 50%;
       left: 50%;
       margin-top: -110px;
       margin-left: -90px;
       transition: all 1s;
       padding: 10px;
       display: flex;
       flex-direction: column;
       align-items: center;
       .title{
           padding: 10px 0;
       }
   }
}
.ivu-input-group {
    padding-bottom: 10px;
}

.ivu-input {
    height: 22px !important;
}
</style>