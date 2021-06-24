<template>
    <div id="particles">
        <div class="login">
           <div class="">
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

</style>
