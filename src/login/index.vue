<template>
  <div id="logon_box">
    <div class="login">
      <div class="login-center">
        <span v-if="!isRegister"
          ><svg-icon icon-class="login_bg"></svg-icon
        ></span>
        <span v-if="isRegister"
          ><svg-icon icon-class="register_bg"></svg-icon
        ></span>
        <span class="cat"><svg-icon icon-class="cat"></svg-icon></span>
      </div>
      <div class="login-area">
        <el-form :rules="loginRules" :model="form">
          <el-form-item prop="userName">
            <el-input
              v-model="form.userName"
              type="text"
              onkeyup="this.value=this.value.replace(/(^\s*)|(\s*$)/g, '')"
              clearable
              placeholder="用户名"
            >
              <span class="prefix-class" slot="prefix">
                <svg-icon icon-class="user_name"></svg-icon>
              </span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              show-password
              onkeyup="this.value=this.value.replace(/(^\s*)|(\s*$)/g, '')"
              clearable
              placeholder="密码"
            >
              <span class="prefix-class" slot="prefix">
                <svg-icon icon-class="user_pwd"></svg-icon>
              </span>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              v-if="!isRegister"
              @click="login()"
              size="medium"
              type="warning"
              >登 录</el-button
            >
            <el-button v-else :disabled="!form.userName || !form.password" @click="register()" size="medium" type="primary"
              >注 册</el-button
            >
          </el-form-item>
          <el-form-item>
            <div v-if="!isRegister" class="tipWord">
              <span
                >还没有账号？<span
                  class="registerBtn"
                  @click="handleSelect"
                  style="color: red"
                  >立即注册</span
                ></span
              >
            </div>
            <div v-else class="tipWord">
              <span
                >注册完成?<span
                  class="registerBtn"
                  @click="handleSelect"
                  style="color: red"
                  >返回登录</span
                ></span
              >
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        {{ `Copyright©${autoYear}-`
        }}<a href="http://beian.miit.gov.cn/" target="_blank"
          >陕ICP备2021008231号</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      //是否为注册
      isRegister: false,
      //输入校验
      loginRules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.$particlesJS("logon_box");
  },
  computed: {
    autoYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    //登录
    login() {
       let _self = this;
       _self.request({
          method:'post',
          url:'/api/auth/login',
          data:_self.form
       }).then(res=>{
          // _self.$message.success(res.data.msg)
          let token = res.data.token
          //保存token到localStorage中
          localStorage.setItem('loginToken', token);
          //记录登录状态
          this.$store.dispatch("actionChangeIsLogin", true);
          //跳转主界面
          this.$router.replace({ path: "/main" });
       }).catch(err=>{
          console.log(err)
       })
    },
    //注册
    register() {
      let _self = this;
      _self.request({
        method: "post",
        url: "/api/auth/register",
        data: _self.form,
      }).then(res=>{
          _self.$message.success("注册成功");
          _self.login();
      }).catch(err=>{
          _self.form.userName = ''
      })
    },
    handleSelect(){
      this.isRegister = !this.isRegister;
      this.form.userName = '';
      this.form.password = ''
    }
  },
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
  .login-area {
    margin: 0 30px;
  }
  .el-button {
    width: 100%;
  }
  .tipWord {
    text-align: center;
    font-size: 12px;
  }
  .registerBtn {
    cursor: pointer;
  }
  .footer {
    text-align: center;
    font-size: 12px;
    a {
      color: blue;
    }
  }
}
</style>