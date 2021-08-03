<template>
  <div id="logon_box">
    <div class="login">
      <div class="login-center">
        <span v-if="!isRegister"><svg-icon icon-class="login_bg"></svg-icon></span>
        <span v-if="isRegister"><svg-icon icon-class="register_bg"></svg-icon></span>
        <span class="cat"><svg-icon icon-class="cat"></svg-icon></span>
      </div>
      <div class="login-area">
        <el-form>
          <el-form-item>
            <el-input v-model="userName" type="text" clearable>
              <span class="prefix-class" slot="prefix">
                <svg-icon icon-class="user_name"></svg-icon>
              </span>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="password" type="password" show-password>
              <span class="prefix-class" slot="prefix">
                <svg-icon icon-class="user_pwd"></svg-icon>
              </span>
            </el-input>
          </el-form-item>
          <el-form-item>
              <el-button v-if="!isRegister" @click="login()" size="medium" type="warning">登 录</el-button>
              <el-button v-else size="medium" type="primary">注 册</el-button>
          </el-form-item>
          <el-form-item >
              <div v-if="!isRegister" class="tipWord"><span>还没有账号？<span class="registerBtn" @click="isRegister = !isRegister" style="color:red">立即注册</span></span></div>
              <div v-else class="tipWord"><span>注册完成?<span class="registerBtn" @click="isRegister = !isRegister" style="color:red">返回登录</span></span></div>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">{{`Copyright©${autoYear}-`}}<a href="http://beian.miit.gov.cn/" target="_blank">陕ICP备2021008231号</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      isRegister:false,
    };
  },
  mounted() {
    this.$particlesJS("logon_box");
  },
  computed:{
        autoYear(){
            return new Date().getFullYear()
        }
  },
  methods:{
      login(){
          this.$store.dispatch("actionChangeIsLogin",true)
          this.$router.replace({path:'/main'})

      }
  }
};
</script>
<style lang="less" scoped>
.login {
  z-index: 2;
  position: absolute;
  width: 380px;
  height: 400px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 5px #333;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -175px;
  transition: all 1s;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
  overflow: hidden;
  .login-center {
    text-align: center;
    height: 90px;
    line-height: 100%;
    .svg-icon {
      font-size: 70px;
    }
    .cat {
      position: absolute;
      top: 0;
      right: -42px;
      transition: right 1s;
      transform: rotate(0deg);
      transition-timing-function: ease;
      &:hover {
        right: 0;
        cursor: pointer;
        transform: rotate(90deg);
      }
    }
  }
  .login-area{
      margin: 0 30px;
  }
  .el-button{
      width: 100%;
  }
  .tipWord{
      text-align: center;
      font-size: 12px;
  }
  .registerBtn{
      cursor: pointer;
  }
  .footer{
      text-align: center;
      font-size: 12px;
      a{
          color:blue
      }
  }
}
</style>