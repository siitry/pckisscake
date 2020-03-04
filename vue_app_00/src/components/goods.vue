<template>
    <section style="margn-top:0px;">
        <myheader></myheader>
        <!-- 导航栏 -->
        <div class="cata-img1">
            <div class="catalogue-list">
                <ul>
                    <li class="open"><a @click="goods" class="open" href="javascript:;">全部名录</a></li>
                    <li><a @click="goods9" href="javascript:;">卡通系列</a></li>
                    <li><a @click="goods8" href="javascript:;">礼盒系类</a></li>
                    <li><a @click="goods1" href="javascript:;">慕斯蛋糕</a></li>
                    <li><a @click="goods2" href="javascript:;">乳汁奶油蛋糕</a></li>
                    <li><a @click="goods3" href="javascript:;">芝士蛋糕</a></li>
                    <li><a @click="goods4" href="javascript:;">巧克力蛋糕</a></li>
                </ul>
            </div>
        </div>
        <!-- 目录 -->
        <div class="content-list">
            <div class="all-thing-lists" v-for="(item,i) of list" :key="i">
                <ul>
                    <li class="index-list" >
                        <!-- 左边 -->
                        <div class="index-list-left f1">
                            <a href="">
                                <div class="index-list-leftimg">
                                    <a href="javascript:;"><img @click="details(item.id)" :src="'http://127.0.0.1:4000/'+item.cpic" style="cursor:pointer"></a>
                                </div>
                            </a>
                        </div>
                        <!-- 右边 -->
                        <div class="index-list-right fr">
                            <a href="">
                                <p class="index-list-right-name"><a href="javascript:;" @click="details(item.id,item.cname,item.ctitle,item.csize,item.price)" :data-id="item.id" :data-cname="item.cname" style="color:#000;">{{item.cname}}</a></p>
                            </a>
                            <div class="index-list-right-details">{{item.ctitle}}</div>
                            <p class="index-list-right-spec">规格: 
                                <span class="list-text">{{item.csize}}</span>
                            </p>
                            <p class="index-list-right-price">价格:
                                <span class="list-text">￥{{item.price}}</span>
                            </p>
                            <div class="index-list-right-buy">
                                <!-- <a href="javascript:;" @click="quickly" class="index-list-right-sbuy fl tc">快速购买</a> -->
                                <button @click="addcart" :data-id="item.id" :data-cname="item.cname" :data-csize="item.csize" :data-price="item.price" :data-cpic="item.cpic" class="index-list-right-shoppingcar fl tc">加入购物车</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div @click="jumpCart" class="lookimg"></div>
            <button class="look" @click="jumpCart" style="">查看购物车</button>
        </div>
        <myfooter></myfooter>
    </section>
</template>
<script>
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import {getGoods} from '../assets/apis/index.js'
export default {
    components:{
        "myheader":MyHeader,
        "myfooter":MyFooter,
    },
    created(){
        this.loadMore();
    },
    data(){
        return {
            list:[],
            pno:0,
            id:"",
        }
    },
    methods: {
        details(id){
            this.$router.push(`/details/${id}`);
        },
        quickly(){
            this.$router.push("/Order");
        },
        jumpCart(){
            this.$router.push("/Cart");
        },
        addcart(event){
            var id = event.target.dataset.id;
            var cname = event.target.dataset.cname;
            var csize = event.target.dataset.csize;
            var price = event.target.dataset.price;
            var cpic = event.target.dataset.cpic;
            var url = "addcart";
            var obj = {id,cpic,cname,csize,price}
            //console.log(obj);
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==-2){
                    this.$toast("请登录!");
                    this.$router.push("/Login")
                }else{
                    this.$toast("添加成功")
                }
            })
        },
        loadMore(){
            this.pno++;
            var url = "goods";
            var obj = {pno:this.pno};
            this.axios.get(url,{params:obj})
            .then(res=>{
                var rows=this.list.concat(res.data.data);
                this.list = rows;
            })
        },
        bai(){
            var cls=document.querySelectorAll(".catalogue-list li,a");
            // console.log(cls);
            for(var elem of cls){
                elem.classList.remove("open");
            }
        },
        goods(e){
            this.bai();
            e.target.classList.add("open")
            e.target.parentNode.classList.add("open")
            var url="goods";
            this.axios.get(url).then(res=>{
                this.list=res.data.data;
            })
        },
        goods1(e){
            this.bai();
            e.target.classList.add("open")
            e.target.parentNode.classList.add("open")
           var url="goods/1"
            this.axios.get(url).then(res=>{
                this.list=res.data.data;
            }) 
        },
        goods2(e){
            this.bai();
            e.target.classList.add("open")
            e.target.parentNode.classList.add("open")
            var url="goods/2"
            this.axios.get(url).then(res=>{
                this.list=res.data.data;
            }) 
        },
        goods3(e){
            this.bai();
            e.target.classList.add("open")
            e.target.parentNode.classList.add("open")
            var url="goods/3"
            this.axios.get(url).then(res=>{
                this.list=res.data.data;
            }) 
        },
        goods4(e){
            this.bai();
            e.target.classList.add("open")
            e.target.parentNode.classList.add("open")
            var url="goods/4"
            this.axios.get(url).then(res=>{
                this.list=res.data.data;
            }) 
        },
        goods8(e){
            this.bai();
            e.target.classList.add("open")
            e.target.parentNode.classList.add("open")
            var url="goods/8"
            this.axios.get(url).then(res=>{
                this.list=res.data.data;
            }) 
        },
        goods9(e){
            this.bai();
            e.target.classList.add("open")
            e.target.parentNode.classList.add("open")
            var url="goods/9"
            this.axios.get(url).then(res=>{
                this.list=res.data.data;
            })
        },
        
    },
    created(){
          var url="goods";
            this.axios.get(url).then(res=>{
                this.list=res.data.data;
            })  
        },
}
</script>
<style scoped>
    *{
        -webkit-tap-highlight-color: rgba(255,255,255,0);
        font-family: Microsoft YaHei,微软雅黑,Helvetica,Arial,sans-serif;
    }
    a{text-decoration: none;}
    li,ol,ul{list-style: none;}
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
    /* 选项卡 */
    .cata-img1{
        width: 100%;
        height: 180px;
        background:url(../img/background.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
    }
    .catalogue-list{
        width: 1200px;
        text-align: center;
        margin: 0 auto;
        position: absolute;
        top: 140px;left: 0;right: 0;bottom: 0;
    }
    .catalogue-list ul{
        list-style: none;
        height: 40px;
        margin: 0 auto;
        line-height: 40px;
        float: right;
    }
    .catalogue-list ul li{
        padding: 0 40px;
        margin-left: 5px;
        height: 40px;
        background:#522725;
        float:left;
    }
    
    .catalogue-list ul li a{
        display:inline-block;
        height: 100%;
        font-size: 14px;
        color: #fff;
    }
    .open{color: #522725 !important;background: #fff !important;}
    /* 目录 */
    .content-list{
        width:100%;
    }
    .all-thing-lists{
        width: 1200px;
        margin: 10px auto;
    }
    .content-list ul{
        list-style: none;
        width: 100%;
        padding-bottom: 5px;
    }
    .f1{float: left;}
    .fr{float:right;}
    .index-list{
        width: 100%;
        margin-bottom: 10px;
        border-bottom:1px solid #dcdcdc;
        overflow: hidden;
    }
    /* li 左边 */
    .index-list-left{
        width: 560px;
        text-align: center;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .index-list-leftimg{
        width: 300px !important;
        height: 300px !important;
        background: gray;
        display: inline-block;
    }
    .index-list-leftimg img{
        width: 100%;
        height: 100%;
    }
    /* li 右边 */
    p {
    margin-top: 0;
    margin-bottom: 1rem;
    }
    .index-list-right{
        width: 590px;
        color: #522725;
        font-size: 14px;
    }
    /* 蛋糕名 */
    .index-list-right-name{
        width:100%;
        height:50px;
        line-height: 50px;
        font-size: 24px;
        font-weight: 400;
        color: #522725;
        text-align: left;
    }
    /* 蛋糕详情 */
    .index-list-right-details{
        padding: 10px 0;
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
        line-height: 20px;
        margin-bottom: 10px;
        text-align: left;
    }
    /* 规格 */
    .index-list-right-spec{
        line-height: 30px;
        text-align: left;
    }
    .list-text{
        font-size: 18px;
        color: #a36663;
    }
    /* 价格 */
    .index-list-right-price{
        line-height: 30px;
        text-align:left;
    }
    /* 购买 购物车 */
    .index-list-right-buy{margin-top: 25px;text-align: left;}
    
   .index-list-right-sbuy{/* 购买 */
        display: inline-block;
        width: 190px;
        margin-right: 5px;
        color: #522725;
        font-size: 14px;
        border: 1px solid #522725;
        height: 40px;
        line-height: 40px;
        cursor:pointer;
   }
   .tc{text-align: center;}
   
   .index-list-right-shoppingcar{/* 加入购物车 */
        display: inline-block;
        width: 190px;
        margin-right: 5px;
        color: #522725;
        font-size: 14px;
        border: 1px solid #522725;
        height: 40px;
        line-height: 40px;
        cursor:pointer;
   }
</style>