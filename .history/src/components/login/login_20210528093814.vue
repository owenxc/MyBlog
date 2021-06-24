<template>
    <div id="particles">
        <div class="login">
           <div>
           <el-form>
               <el-form-item>
                   <el-input v-model="account" placeholder="账号">
                       <i slot="prefix" class="el-input__icon el-icon-user"></i>
                   </el-input>
               </el-form-item>
               <el-form-item>
                    <el-input v-model="password" placeholder="密码">
                       <i slot="prefix" class="el-input__icon el-icon-key"></i>
                   </el-input>
               </el-form-item>
           </el-form>
           </div>
        </div>
    </div>
</template>

<script>
import particlesJson from '@/assets/particles.json'
  export default {
      name:"login",
      data(){
          return {
             account:'',
             password:''
          }
      },
      mounted(){
         particlesJS("particles",particlesJson);
      }
  }

</script>

<style lang="less" scoped>
  .login{
      z-index: 2;
      position: absolute;
      width: 250px;
      border-radius: 2px;
      background: #fff;
      box-shadow: 0 0 5px #333;
      top: 50%;
      left:50%;
      margin-top:-250px;
      margin-left:-125px;
      transition: all 1s;
      -moz-transition: all 1s;
      -o-transition: all 1s;
  }
</style>