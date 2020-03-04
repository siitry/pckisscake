<template>
    <section style="margn-top:0px;">
        <myheader></myheader>
        <div class="details">
            <div class="detailsbox" v-for="(item,i) of list" :key="i">
                <div class="leftimg">
                    <div class="img1"><img :src="'http://127.0.0.1:4000/'+item.cpic"></div>
                    <div class="img2"><img :src="'http://127.0.0.1:4000/'+item.cpic"></div>
                </div>
                <div class="rightinfo">
                    <p>{{item.cname}}</p>
                    <p>{{item.ctitle}}</p>
                    <ul>
                        <li>{{item.csize}}</li>
                    </ul>
                    <div class="buyinfo">
                        <span>数量：</span>
                        <button class="btn1" @click="btn1()">-</button><input type="text" v-model="num" style="text-align:center">
                        <button class="btn2" @click="btn2()">-</button>
                        <p>价格：￥{{item.price}}</p>
                    </div>
                    <div class="buya">
                        <a class="a1" href="javascript:;" @click="addcart" :data-id="item.id" :data-cpic="item.cpic" :data-cname="item.cname" :data-ctitle="item.ctitle" :data-csize="item.csize" :data-price="item.price">加入购物车</a>
                        <a class="a2" href="javascript:;">立即购买</a>
                    </div>
                </div>
            </div>
            <div class="productDetails">
                <div class="producttitle">
                    <p class="p1">商品详情</p>
                    <span>Product Details</span>
                </div>
                <div class="productdesc">
                    <p class="p2">品牌：Kissmilan</p>
                    <p class="p3">口味：鲜果类</p>
                    <p class="p4">甜度：★★★☆☆</p>
                    <p class="p5">适合节日：圣诞节</p>
                    <p class="p6">适合人群：各类人群</p>
                    <p class="p7">原材料：乳脂奶油(新西兰)、草莓(中国)、幼砂糖(韩国)、蓝莓（瑞士）</p>
                    <p class="p8">温馨提示：</p>
                    <p class="p9">蛋糕保藏条件：0-4℃保藏12小时，建议蛋糕收到后2-3小时内食用，5℃最佳食用。</p>
                    <p class="p10">蛋糕规格及免费配送餐具：</p>
                    <p class="p11">1.5磅：约23*15（cm）适合3-5人食用免费配送1套餐具</p>
                    <p class="p12">一套餐具包含：1把蛋糕刀，5把蛋糕叉，5个盘子。</p>
                    <p class="p13">重庆主城主要地区免费配送，成都第一绕城以内+地铁一号线至天府五街沿线+双流区域免费配送，关于配送地区如有疑问请咨询客服人员。</p>
                    <p class="p14">如对上述食材有过敏经历者，请选择其它款蛋糕。</p>
                </div>
            </div>
            <div @click="jumpCart" class="lookimg"></div>
            <button class="look" @click="jumpCart" style="">查看购物车</button>
        </div>
        <myfooter></myfooter>
    </section>
</template>
<script>
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"
import goods from "./goods"
// import {getDetailsById} from "../../../assets/apis/details.js"
export default {
    components:{
        "myheader":MyHeader,
        "myfooter":MyFooter,
    },
    data(){
        return {
            list:[],
            num:"1",
        }
    },
    created(){
        this.detail();
    },
    methods:{
        jumpCart(){
            this.$router.push("/Cart");
        },
        addcart(event){
            var id = event.target.dataset.id;
            // console.log(id);
            var cpic = event.target.dataset.cpic;
            var cname = event.target.dataset.cname;
            var ctitle = event.target.dataset.ctitle;
            var csize = event.target.dataset.csize;
            var price = event.target.dataset.price;
            var count = event.target.dataset.num;
            // console.log(id+"-"+cpic+"-"+ctitle+"-"+price+"-"+count);
            var url = "addcart";
            var obj = {id,cpic,cname,ctitle,csize,price,count};
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==-2){
                    this.$toast("请登录!");
                    this.$router.push("/Login");
                }else{
                    this.$toast("添加成功")
                }
            })
        },
        btn1(){
            if(this.num>1){
                this.num--;
            }
        },
        btn2(){
            this.num++;
        },
        detail(){
            var id = this.$route.params.id;
            var url = "look";
            var obj = {id:id};
            this.axios.get(url,{params:obj}).then(res=>{
                var rows = res.data.data;
                this.list = rows;
            })
        },
    }
}
</script>
<style scoped>
    .lookimg{
        width:150px;height:100px;
        background-image: url(../img/directory/1.jpg);
        background-size: 100%;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        position: fixed;
        top:45%;
        left:80px;
        cursor: pointer;
    }
    .look{
        width:150px;height:45px;
        background-image: url(../img/cartfixed/cartfixed.png);
        background-repeat: no-repeat;
        background-position: 5%;
        background-color: #522725;
        color:#fff;
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
        padding-left:30px;
        border: 0;
        position: fixed;
        top:55.9%;
        left:80px;
        cursor: pointer;
    }
    .details{
        width:100%;
        border-top:1px solid #D8D0D0;
    }
    .detailsbox{
        width:1200px;height:550px;
        margin:0 auto;
        position: relative;
        display:flex;
        padding-top:80px;
    }
    .leftimg .img1{
        width:638px;height:400px;
    }
    .leftimg .img1 img{
        width:400px;height:400px;
        margin-left:119px;
        position:absolute;
    }
    
    .leftimg .img2 img{
        width:122px;height:122px;
        margin-top:10px;
        border:2px solid #7B886E;
    }
    .rightinfo{
        width:507px;height:415px;
        position:absolute;
        left:60%;
    }
    .rightinfo p:first-child{
        font-size:24px;
        color:#522725;
    }
    .rightinfo p:nth-child(2){
        width:501px;height:50px;
        font-size:10.6px;
        color:#663300;
        border-top:1px solid #EEEEEE;
        border-bottom:1px solid #EEEEEE;
        /* line-height:76px; */
        padding-top:20px;
    }
    .rightinfo ul li{
        list-style-type: none;
        width:223px;height:43px;
        border:1px solid #000;
        line-height:43px;
        text-align:center;
        color:#854D4B;
        margin-left:-40px;
    }
    .rightinfo .buyinfo span{
        color:#854D4B;
    }
    .buyinfo input{
        width:45px;height:20px;
    }
    .buyinfo .btn1{
        width:26px;height:25px;
        background-image: url("../img/details/jian.png");
        border:0;
        outline: 0;
    }
    .buyinfo .btn2{
        width:26px;height:25px;
        background-image: url("../img/details/jia.png");
        border:0;
        outline: 0;
    }
    .buyinfo p{
        font-size:24px;
        color:#854D4B;
    }
    .buya{
        width:507px;height:39px;
        position: relative;
        margin-top:60px;
    }
    .detailsbox .a1{
        text-decoration:none;
        display: block;
        width:250px;height: 39px;
        background:#854D4B;
        color:#fff;
        line-height: 39px;
        text-align: center;
        position: absolute;
    }
    .detailsbox .a2{
        text-decoration:none;
        display: block;
        width:250px;height: 39px;
        background:#522725;
        color:#fff;
        line-height: 39px;
        text-align: center;
        position: absolute;
        left:50.5%;
    }
    /*******商品详情****** */
    .productDetails{
        width:1200px;height:709px;
        margin:25px auto;
    }
    .producttitle{
        border-top:1px solid #C1E3EC;
        border-bottom:1px solid #C1E3EC;
        padding:15px 0px 15px 0px;
    }
    .productDetails .p1{
        color:#854D4B;
        font-size:21px;
        font-weight: bold;
        display: inline;
        margin-right:20px;
        margin-left:16px;
    }
    .producttitle span{
        color:#AAAAAA;
    }
    .productdesc{
        position: relative;
        margin-top:30px;
    }
    .productdesc p{
        color:#854D4B;
        font-size:14px;
    }
    .productdesc .p2{
        width:202px;height:50px;
        position: absolute;
    }
    .productdesc .p3{
        position: absolute;
        left:20%;
    }
    .productdesc .p4{
        position: absolute;
        left:40%;
    }
    .productdesc .p5{
        position: absolute;
        top:60px;
    }
    .productdesc .p6{
        position: absolute;
        left:20%;
        top:60px;
    }
    .productdesc .p7{
        position: absolute;
        left:40%;
        top:60px;
    }
    .productdesc .p8{
        position: absolute;
        top:150px;
    }
    .productdesc .p9{
        position: absolute;
        top:210px;
    }
    .productdesc .p10{
        position: absolute;
        top:270px;
    }.productdesc .p11{
        position: absolute;
        top:330px;
    }
    .productdesc .p12{
        position: absolute;
        top:470px;
    }
    .productdesc .p13{
        position: absolute;
        top:530px;
    }
    .productdesc .p14{
        position: absolute;
        top:590px;
    }
</style>