<template>
    <header id="header">
        <div class="topbar">
            <div class="topbox">
                <div class="topright">
                    <a href="javascript:;" @click="loginin">会员中心</a>
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;" @click="jumpCart"><img src="../img/f1/cart.png"><span>0</span></a>
                    <span v-if="isLogin==true"><a href="javascript:;" @click="loginin">登录</a></span>
                    <span v-else><a href="javascript:;" @click="logininout">退出</a></span>
                </div>
            </div>
        </div>
        <div class="f1">
            <div class="f1nav">
                <div class="f1left">
                    <img class="img1" @click="Index" src="../img/f1/logo.png">
                    <span><img src="../img/f1/sign.png"><b>配送至 成都</b></span>
                </div>
                <div class="f1right">
                    <a href="javascript:;" @click="Index">首页</a>
                    <a href="javascript:;" @click="goods">蛋糕名录</a>
                    <a href="javascript:;" @click="Company">品牌传承</a>
                    <a href="javascript:;" @click="Myallactiv">企业客户</a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data(){
        return {
            isLogin:false,
        }
    },
    methods:{
        jumpCart(){
            this.$router.push("/Cart");
        },
        loginin(){
            this.$router.push("/Login");
            this.isLogin=true;
        },
        logininout(){
            var url="loginout";
            this.axios.get(url).then(res=>{
                if(res.data.code==1){
                    alert("已退出登录,返回登陆页面");
                    this.isLogin=true;
                }
            })
        },
        Index(){
            this.$router.push("/Index");
        },
        login(){
            this.$router.push("/Login");
        },
        goods(){
            this.$router.push("/goods");
        },
        Myallactiv(){
            this.$router.push("/Myallactiv");
        },
        Company(){
            this.$router.push("/Company");
        },
        Index(){
            this.$router.push("/Index");
        }
    }
}
</script>
<style scoped>
    *{margin:0;padding:0;}
    /*****顶部*****/
    .topbar{
        width:100%;
        background:#F1F1F1;
    }
    .topbox{
        width:1200px;height:35px;
        margin:0 auto;
        position: relative;
    }
    .topright{
        position: absolute;
        left:72%;
    }
    .topbox a{
        display: inline;
        text-decoration: none;
        margin-right:38px;
        font-size:14px;
        color:#854D4B;
    }
    .topbox a{
        margin-top: 2px;
    }
    .topbox a:nth-child(3) img{
        margin-top:2px;
        vertical-align: middle;
    }
    .topbox a:nth-child(3){
        display: inline-block;
        width:74px;height:33px;
        background: #E9E9E9;
        padding-left:20px;
        margin-left:-17px;
    }
    .topbox a:nth-child(3) span{
        margin-top:5px;
        width:15px;height:16px;
        padding-left:6px;
        font-size:12px;
    }
    .topright a:last-child{
        display: inline-block;
        width:50px;height:34px;
        background:#fff;
        position: absolute;
        left:85%;
        margin-top:1px;
        /* margin-left:2px; */
        padding-left:20px;
        line-height: 34px;
        color:#000;
    }
    .topbox a img{
        margin-right:5px;
    }
    .topbox a span{
        display: inline-block;
        width:25px;height: 20px;
        margin-left: 3px;
        padding-top:3px;
    }
    .topbox a span{
        background:#fff;
        border-radius: 50%;
    }
    /*导航层*/
    .f1{
        width:100%;
    }
    .f1 .f1nav{
        width:1180px;height:100px;
        margin:0 auto;
        position: relative;
    }
    .f1 .f1nav .f1left{
        display: inline;
    }
    .f1 .f1nav .f1left .img1{
        width: 96.66px;height:58px;
        margin-right:30px;
        margin-top:20px;
        position: absolute;
        left:0%;
        cursor:pointer;
    }
    .f1 .f1nav span{
        position: absolute;
        margin-top:50px;
        left:11%;
        cursor:pointer;
    }
    .f1 .f1nav span b{
        padding-left:13px;
        font-size:12px;
        color:#A36663;
    }
    .f1 .f1nav .f1right{
        display: inline;
        position: absolute;
        left:50%;
    }
    .f1 .f1nav .f1right{
        margin-top:35px;
        margin-left:130px;
    }
    .f1 .f1nav .f1right a{
        text-decoration: none;
        font-size:16px;
        color:#A36663;
        padding-right:55px;
    }
</style>