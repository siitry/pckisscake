<template>
    <section style="margn-top:0px;">
        <div class="loginhead">
            <img @click="Index" src="../img/f1/logo.png" alt="">
        </div>
        <div class="h1">
            <div class="logun-box">
                <div class="logintitle">
                    <span class="s1">密码登录</span>
                    <a href=""><span class="s2">验证码登录</span></a>
                </div>
                <input type="text" v-model="uname" placeholder="账号">
                <input type="password" v-model="upwd" placeholder="密码">
                <button @click="login">立即登录</button>
                <p>提示还不是会员？ 通过短信登录，<a href="javascript:;" @click="reg">自动注册</a>为会员~</p>
            </div>
            <a href=""><img class="img1" src="../img/online.png" alt=""></a>
        </div>
        
        <myfooter></myfooter>
    </section>
</template>
<script>
import MyFooter from "./MyFooter"
export default {
    components:{
        "myfooter":MyFooter
    },
    data(){
        return {
            uname:"",
            upwd:"",
        }
    },
    methods: {
        login(){
            // console.log(1);
            var reg = /^[a-zA-Z0-9]{2,12}$/;
            //获取用户名和密码
            var u = this.uname;
            var p = this.upwd;
            //验证用户名不正确显示出错信息
            if(!reg.test(u)){
                alert("用户名格式不正确");
                return;
            }
            //验证密码不正确显示错误信息
            if(!reg.test(p)){
                alert("密码格式不正确");
                return;
            }
            //发送ajax请求
            var url = "login";
            var obj = {uname:u,upwd:p};
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==-1){
                    alert("用户名或密码错误");
                    // console.log("状态码:"+res.data.code);
                }else{
                    this.$router.push("/Index");
                }
            })
        },
        reg(){
            this.$router.push("/Reg");
        },
        Index(){
            this.$router.push("/Index");
        }
    }
}
</script>
<style scoped>
    *{padding: 0;margin: 0;}
    .loginhead{
        text-align: center;
        margin:45px 0;
        border-bottom: 1px solid #e4e4e4;
    }
    .loginhead img{
        width: 100px;
        height: 60px;
        margin-bottom: 23px;
        cursor:pointer;
    }
    .logun-box{
        width: 330px;
        height: 270px;
        margin: 97px 795px;
        border-bottom: 1px solid #e4e4e4;
        margin:0 auto;
        display: inline-block;
        position: absolute;
        left:40%;
    }
    .logintitle{
        height: 40px;
        width: 332px;
        line-height: 40px;
        font-size: 14px;
        background: #522725;
        margin-bottom: 20px; 
    }
    .s1{
        display: inline-block;
        cursor: pointer;
        width: 50%;
        height: 100%;
        color: #fff;
        text-align: center;
        background: #965653;
    }
    .s2{
        display: inline-block;
        color: #fff;
        margin-left: 30px;
    }
    input{
        border: 1px solid #ebebeb;
        height: 41px;
        line-height: 41px;
        width: 328px;
        margin-bottom: 20px;
        outline: none;
        text-indent: 15px;
        color: rgba(0, 0, 0, 0.747);
    }
    button{
        height: 41px;
        width: 328px;
        background: #522725;
        color: linen;
        border: none;
        margin: 15px 0 20px;
        font: 16px "微软雅黑";
    }
    .h1{
        width:100%;;height: 380px;
    }
    p{
        color: #854d4b;
        font-size: 12px;
        margin-top: 20px;
        margin-left: 21px;
    }
    .img1{
        position: fixed;
        right:1px;
    }
</style>