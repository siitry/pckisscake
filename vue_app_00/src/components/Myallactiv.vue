<template>
    <div>
        <MyHeader></MyHeader>
        <h2 class="h2">企业服务通道</h2>
        <div class="f1">
            <div class="f1-1">
                申请品鉴
            </div>
        </div>
        <div class="f2">

        </div>
        <div class="f3">

        </div>
        <div class="f4">

        </div>
        <Footer></Footer>
    </div>
    
</template>
<script>
import MyHeader from "./MyHeader.vue"
import MyFooter from "./MyFooter.vue"
export default {
    methods: {

    },
    components: {
        "MyHeader":MyHeader,
        "MyFooter":MyFooter,
    }
}
</script>
<style scoped>
*{margin: 0;padding: 0}
    .h2{
        display: block;
        padding: 20px 0;
        margin: 0 360px;
        height: 40px;
        line-height: 40px;
        color: #5b3937;
        font-size: 30px;
    }
    .f1-1{
        height: 80px;
        width: 280px;
        line-height: 80px;
        text-align: center;
        color: #8f5451;
        font-size: 30px;
        border: 1px solid #8f5451;
        margin:385px 400px;
        cursor: pointer;
    }
     .f2 .f3 .f4{
         background: url();
         width: 100%;
         height: 570px;
     } 
</style>

