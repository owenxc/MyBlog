<template>
    <div>
        <el-drawer
             title="权限管理"
             :visible.sync="drawer"
             direction="ltr"
             size="300px"
             :before-close="closeDrawer"
             >
            <ul>
                <li @click="login()">登录状态:{{loginStatus}}</li>
                <li>用户名称:</li>
                <li>菜单权限:</li>
                <li></li>
                <li></li>
            </ul>
        </el-drawer>
    </div>
</template>
<script>
export default {
    data(){
        return {
         
        }
    },
    computed:{
        drawer:function(){
            return this.$store.state.asideDrawer
        },
        loginStatus(){
            let isLogon = this.$store.state.isLogin
            if(isLogon){
                return '已登录'
            }else{
                return '未登录'
            }
        }
    },
    methods:{
        closeDrawer(){
           this.$store.dispatch('actionChangeAsideDrawer',false)
        },
        login(){
            this.$router.replace({path:'/login'})
        }
    }
}
</script>