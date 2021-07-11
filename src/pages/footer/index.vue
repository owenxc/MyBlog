<template>
    <div class="footer_Box">
       <div>{{`Copyright © ${autoYear} by 辉腾博客`}} | <a href="http://beian.miit.gov.cn/" target="_blank">陕ICP备2021008231号</a></div>
    </div>
</template>


<script>
export default {
    data(){
        return {
        }
    },
    computed:{
        autoYear(){
            return new Date().getFullYear()
        }
    }
}
</script>

<style lang="less" scoped>
.footer_Box{
    width: 100%;
    height: 6vh;
    color:#fff;
    z-index: 99999;
    background-image: linear-gradient(to bottom right, rgb(6, 60, 82), rgb(26, 11, 14));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 0.5rem;
    a:hover{
        text-decoration: underline;
    }
}
</style>