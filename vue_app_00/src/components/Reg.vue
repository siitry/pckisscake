<template>
    <section style="margn-top:0px;">
        <div>
            <div class="loginhead">
                <img @click="Index" src="../img/f1/logo.png">
            </div>
            <div class="reg">
                <div class="regbox">
                    <div class="title">
                        <h1>短信登录/注册</h1>
                    </div>
                    <div>
                        <label for="">注册号码:</label>
                        <input :data-uname="uname" v-model="uname" :attr="{maxlength:12,minlength:2}" type="text" placeholder="请输入账号">
                    </div>
                    <div>
                        <label for="">密码:</label>
                        <input :data-upwd="upwd" v-model="upwd" :attr="{maxlength:12,minlength:2}" type="password" placeholder="请输入您的密码">
                    </div>
                    <div>
                        <label for="">重复密码:</label>
                        <input type="password" placeholder="请重复输入您的密码">
                    </div>
                    <div>
                        <label for="">邮箱:</label>
                        <input :data-email="email" v-model="email" :attr="{maxlength:12,minlength:2}" type="text" placeholder="请输入您的邮箱">
                    </div>
                    <div>
                        <label for="">手机号:</label>
                        <input :data-phone="phone" v-model="phone" :attr="{maxlength:12,minlength:2}" type="text" placeholder="请输入您的手机号">
                    </div>
                    <div class="bottomimg">
                        <img src="../img/reg/reg.jpg" style="width:280px;">
                    </div>
                    <div class="bottomp">
                        <p>请将方块拖至图片缺口处对齐</p>
                    </div>
                    <div class="bottomreg">
                        <button class="nowreg" @click="reg">立即注册</button>
                        <span class="arrow"><p>→</p></span>
                        <span class="login">
                            我已经注册了现在就<a href="javescript:;" @click="login">登录</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <myfooter></myfooter>
    </section>
</template>
<script>
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"
export default {
    components:{
        "myheader":MyHeader,
        "myfooter":MyFooter
    },
    data(){
        return {
            uname:"",//用户名
            upwd:"",//密码
            uupwd:"",
            email:"",
            phone:"",
            list:[],
        }
    },
    methods:{
        reg(){
            var reg=/^[a-zA-Z0-9]{2,12}$/;
            var regemail=/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
            var regphone=/^1[3-8]\d{9}$/;
            var uname=this.uname;
            var upwd=this.upwd;
            var email=this.email;
            var phone=this.phone;
            if(!reg.test(uname)){
                alert("用户名格式不正确");
                return;
            }
            if(!reg.test(upwd)){
                alert("密码格式不正确");
                return;
            }
            if(!regemail.test(email)){
                alert("邮箱格式不正确");
                return;
            }
            if(!regphone.test(phone)){
                alert("手机格式不正确");
                return;
            }
            console.log("验证结束");
            var url = "reg";
            var obj = {uname,upwd,email,phone};
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==-2){
                    alert("用户名已存在");
                    return;
                }else{
                    alert("注册成功");
                    this.$router.push("/Login");
                    window.location.reload();
                }
            })
        },
        login(){
            this.$router.push("/Login");
        },
        Index(){
            this.$router.push("/Index");
        }
    }
}
</script>
<style scoped>
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
    .fixed{
        position: fixed;
        float: right;
    }
    /*注册*/
    .reg{
        width:100%;
    }
    .regbox{
        width:900px;
        margin:0 auto;
        border:1px solid #ccc;
    }
    .regbox input{
        width:402px;height:35px;
        padding-left: 15px;
        margin-left: 10px;
        margin-top:10px;
        outline: 0;
        border:1px solid #EBEBEB;
    }
    .regbox label{
        display: inline-block;
        width:180px;height:40px;
        text-align: right;
        color:#854D4B;
    }
    .regbox h1{
        width:855px;height:61px;
        margin-top:0px;
        padding-left:45px;
        font-size: 18px;
        color:#5D3937;
        line-height: 61px;
        background:#F6F6F6;
        border-bottom: 1px dashed #ccc;
    }
    .bottomimg{
        margin-left:190px;
    }
    .bottomp p{
        font-size:12px;
        color:red;
        margin-left:190px;
    }
    .nowreg{
        display: inline-block;
        width:300px;height:40px;
        background-color:#522725;
        outline: 0;
        border:0;
        font-size:16px;
        color:#fff;
        line-height: 40px;
        text-align: center;
        margin-left:190px;
        cursor: pointer;
    }
    .arrow{
        display: inline-block;
        color:#854d4b;
        font-size: 30px;
        margin-left:80px;
        margin-right: 10px;
    }
    .login{
        display: inline-block;
        width: 84px;height:29px;
        font-size: 14px;
        color:#A66663;
    }
    .login a{
        text-decoration:none;
    }
</style>