<template>
    <el-container>
      <el-header>
        <main-header></main-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <main-footer></main-footer>
      </el-footer>
    </el-container>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
}
</script>