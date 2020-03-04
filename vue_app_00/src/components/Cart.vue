<template>
    <section style="margn-top:0px;">
        <myheader></myheader>
        <div class="cart">
            <div class="cartbox">
                <div class="cartimg">
                    <img src="../img/cart/cart_headimg.png">
                </div>
                <div class="buytitle"><h2>我的购物篮</h2></div>
                <div class="cartinfo">
                    <table>
                        <thead>
                            <td class="one">商品名称</td>
                            <td class="two">属性</td>
                            <td class="three">单价</td>
                            <td class="four">数量</td>
                            <td class="five">小计</td>
                            <td class="six">操作</td>
                        </thead>
                        <tbody v-for="(item,i) of list" :key="i">
                            <td style="margin-bottom:140px;">
                                <img class="img" :src="'http://127.0.0.1:4000/'+item.cpic">
                                <div class="cname">{{item.cname}}</div>
                            </td>
                            <td>
                                <span class="list-text1">{{item.csize}}</span>
                            </td>
                            <td>
                                <span class="list-text1">￥{{item.price.toFixed(2)}}</span>
                            </td>
                            <td>
                                <button @click="doit1" value="-" class="btn1" :data-id="item.id"></button>
                                <span class="count">{{item.count}}</span>
                                <button @click="doit2" value="+" class="btn2" :data-id="item.id"></button>
                            </td>
                            <td>￥:{{(item.price*item.count).toFixed(2)}}</td>
                            <td><button @click="del" :data-lid="item.lid" class="btn3">x</button></td>
                        </tbody>
                        <tfoot>
                            <td colspan="5">
                                <div class="total">
                                    <span>商品总计:</span>
                                    <b>￥{{total.toFixed(2)}}</b>
                                </div>
                            </td>
                        </tfoot>
                        
                    </table>
                    <div class="later">
                        <a href="javascript:;" @click="conti" >继续购买</a>
                        <a href="javascript:;" @click="accounts">去结账</a>
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
    computed:{
        total(){
            var sum = 0;
            for(var item of this.list){
                sum+=item.price*item.count;
            }
            return sum;
        }
    },
    data(){
        return {
            list:[],//保存购物车返回的数据
            n:0,
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        doit1(event){
            var span=event.target.parentNode.children[1];
            var n=parseInt(span.innerHTML);
            if(n>1){
                var id = event.target.dataset.id;
                var url = "reducecart";
                var obj = {id};
                this.axios.get(url,{params:obj}).then(res=>{
                    this.loadMore();
                })
            }
        },
        doit2(event){
            var id = event.target.dataset.id;
            var url = "addcart";
            var obj = {id};
            this.axios.get(url,{params:obj}).then(res=>{
                this.loadMore();
            })
        },
        conti(){
            this.$router.push("/goods");
        },
        accounts(){
            this.$router.push("/Order");
        },
        loadMore(){
            var url = "findcart";
            this.axios.get(url).then(res=>{
                var rows = res.data.data;
                this.list = rows;
                this.$store.commit("clearCartCount")
                this.$store.commit("addCartCount",rows.length)
            })
        },
        clear(){
            //1.显示交互确认框
            this.$messagebox.confirm("是否要清空购物车")
            .then(res=>{
                //2.创建变量str
                var str = "";
                //3.创建循环拼接字符串 id
                for(var item of this.list){
                    str+=item.id+","
                }
                //4.如果当前购物车为空,停止执行
                if(str.length==0){
                    this.$messagebox("消息","购物车已为空");
                    return;
                }
                //5.截取最后字符串,
                str = str.substring(0,str.length-1);
                //6.创建变量url  delm
                var url = "delm";
                //7.创建变量obj  参数 ids
                var obj = {ids:str};
                // console.log(obj);
                this.axios.get(url,{params:obj}).then(res=>{
                    if(res.data.code==-2){
                        this.$toast("请登录")
                        this.$router.push("/Login")
                    }else if(res.data.code==-1){
                        this.$toast("删除失败")
                    }else{
                        this.$toast("删除成功");
                        this.loadMore();
                    }
                })
            })
            .catch(err=>{
                console.log(err);
            })
        },
        delItem(){
            // console.log(1);
            //1.显示删除确认框
            this.$messagebox.confirm("是否删除选中的商品")
            .then(res=>{
                //2.创建变量保存字符串,保存删除商品id
                var str = "";
                for(var item of this.list){
                    if(item.cb){
                        str+=item.id+",";
                    }
                }
                console.log(str);
                if(str.length==0){
                    this.$messagebox("消息","请选择要删除的商品");
                    return;
                }
                //2.1删除字符后逗号
                //0 截取字符串开始下标
                //str.length-1 截取字符串长度
                str = str.substring(0,str.length-1);
                console.log(str);
                //3.如果用户没有选中任何商品,提示
                //4.创建变量url
                var url = "delm";
                //5.创建变量obj
                var obj = {ids:str};
                //6.发送ajax请求
                this.axios.get(url,{params:obj}).then(res=>{
                    console.log(3);
                    console.log(res);
                    if(res.data.code==-2){
                        this.$toast("请登录");
                        this.$router.push("/Login")
                    }else if(res.data.code==-1){
                        this.$toast("删除失败")
                    }else{
                        this.$toast("删除成功");
                        this.loadMore();
                    }
                })
            })
            .catch(err=>{
                console.log(err);
            })
        },
        del(event){
            var btn=event.target.parentNode.children[0];
            var n=btn.innerHTML;
            if(n=="x"){
                if(confirm("是否删除当前商品")){
                    var lid = event.target.dataset.lid;
                    var url = "del";
                    var obj = {lid};
                    this.axios.get(url,{params:obj}).then(res=>{
                        if(res.data.code==-2){
                            alert("请登录")
                            this.$router.push("/Login")
                        }else if(res.data.code==-1){
                            alert("删除失败")
                        }else{
                            alert("删除成功");
                            this.loadMore();
                        }
                    })
                }
            }
        },
        changeItem(){
            var sum=0;
            for(var item of this.list){
                if(item.cb){sum++}
            }
            if(sum==this.list.length){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
        },
        selectAll(){
            var cb = this.allcb;
            for(var item of this.list){
                item.cb = cb;
            }
        },
    },
    
}
</script>
<style scoped>
    .cart{
        width:100%;
        border-top:1px solid #D8D0D0;
        margin-bottom:240px;
    }
    .cartbox{
        width:1200px;height:500px;
        margin:0 auto;
        position: relative;
    }
    .cartimg{
        position:absolute;
        left:41%;
        background:#fff;
        margin-top:20px;
    }
    .cartinfo{
        width:1200px;height:44px;
        position:absolute;
        top:20px;
        text-align:left;
        /* line-height: 100px; */
        font-size:18px;
        color:#464646;
    }
    .buytitle{
        position: absolute;
        top:14%;
        color:#666;
    }
    .cartinfo{
        position: absolute;
        top:40%;
    }
    .cartinfo .img{
        float: left;
    }
    table{
        border-top:1px solid #E8E0E0;
    }
    table thead{
        font-size: 14px;
        color: #666;
        text-align:center;
        font-weight: bold;
    }
    table thead td::after{
        content: "|";
        color:#E2E2E2;
        float: right;
    }
    tbody td{
        text-align: center;
    }
    .img{
        width:100px;height:100px;
        vertical-align: middle;
    }
    .one{
        width:512px;height:74px;
    }
    .two{
        width:320px;height:74px;
    }
    .three{
        width:81px;height:74px;
    }
    .four{
        width:149px;height:74px;
    }
    .five{
        width:86px;height:74px;
    }
    .six{
        width:41px;height:74px;
    }
    .cname{
        margin-top: 40px;
        font-size: 18px;
        color:#522725;
        
    }
    .list-text1{
        font-size: 18px;
        color:#522725;
    }
    .btn1{
        width:26px;height:25px;
        background-image: url(../img/details/jian.png);
        outline: 0;
        border:0;
    }
    .btn2{
        width:26px;height:25px;
        background-image: url(../img/details/jia.png);
        outline: 0;
        border:0;
    }
    .btn3{
        width:26px;height:25px;
        background-image: url(../img/details/delete.png);
        outline: 0;
        border:0;
        cursor: pointer;
    }
    .count{
        display: inline-block;
        width:40px;height:18px;
        border:1px solid #ccc;
        padding-top: 6px;
    }
    table tbody td:nth-child(5){
        font-size: 14px;
        color:red;
    }
    /*1.购物车商品 */
    .cart-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #ccc;
        margin-top:25px;
    }
    /*2.左侧商品与价格 */
    .lefttxt{
        display:flex;
        align-items:center;
    }
    table td input{
        width:50px;
    }
    tbody{
        margin-top:50px;
    }
    tbody td{
        border-bottom:1px solid #E8E0E0;
    }
    .total{
        float: right;
        margin-top:20px;
        margin-right: 100px;
        font-size: 14px;
    }
    .total b{
        color:#666666;
    }
    .later{
        margin-top:30px;
        float: right;
    }
    .later a{
        text-decoration:none;
        display: inline-block;
        width:314px;height:41px;
        border:1px solid #ccc;
        text-align: center;
        line-height:41px;
        margin-right:20px;
        font-size: 14px;
        color:#000;
    }
    .later a:nth-child(2){
        background:#522725;
        color:#fff;
    }
</style>