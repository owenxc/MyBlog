<template>
    <div>
        <el-drawer
             title="我是标题"
             :visible.sync="drawer"
             direction="ltr"
             size="30px"
             :before-close="closeDrawer"
             >
            <span>我来啦!</span>
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
        }
    },
    methods:{
        closeDrawer(){
           this.$store.dispatch('actionChangeAsideDrawer',false)
        }
    }
}
</script>