<template>
    <div>
        <el-drawer
             title="我是标题"
            :visible.sync="drawer"
             direction="ltr"
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
    }
}
</script>