<template>
    <section style="margn-top:0px;">
        <myheader></myheader>
        <div class="order">
            <div class="orderbox">
                <div class="orderimg">
                    <img src="../img/order/order-header.png">
                </div>
                <div class="orderinfo">
                    <h2>填写和提交订单信息</h2>
                    <div class="border"></div>
                    <div class="rager">
                        <h3>收货信息</h3>
                        <div class="address">
                            添加新地址
                        </div>
                    </div>
                    <div class="pay">
                        <h3>支付方式</h3>
                        <input type="radio" name="buy" id="zfb">
                        <label for="zfb">支付宝</label>
                        <input type="radio" name="buy" id="hdfk">
                        <label for="hdfk">货到付款</label>
                    </div>
                    <div class="date">
                        <h3>配送时间</h3>
                        <input type="text">
                        <input type="text">
                    </div>
                    <div class="spoons">
                        <h3>增加餐具</h3>
                        <span class="span1">（每1磅蛋糕已免费包含5人份餐具, 如需请添加）</span>
                        <button class="btn1"></button>
                        <input type="text" value="0"><span class="sp11">0</span>
                        <button class="btn2" @onclick="add2"></button>
                        <span class="span2">每副餐具支付：¥5.00（已随蛋糕附赠餐具，若还有额外需求，请按需求购买）</span>
                    </div>
                    <div class="birthhat">
                        <h3>生日帽</h3>
                        <span class="span1">（每单可免费赠送1顶生日帽, 如需请添加）</span>
                        <button class="btn3"></button>
                        <input type="text" value="0">
                        <button class="btn4"></button>
                        <span class="span2">超过 1 顶，每顶生日帽支付：¥2.00</span>
                    </div>
                    <div class="gifts">
                        <h3>礼品选项（生日牌及生日蜡烛）</h3>
                        <span>（每单可免费赠送2个数字蜡烛, 如需请添加）</span>
                        <input type="radio" name="gift" id="bxy"><label for="bxy">不需要</label>
                        <input type="radio" name="gift" id="srkl"><label for="srkl">生日快乐</label>
                        <input type="radio" name="gift" id="birth"><label for="birth">happy birthday</label>
                        <input type="radio" name="gift" id="zdy"><label for="zdy">自定义</label>
                        <input type="radio" name="lz" id="szlz"><label for="szlz">数字蜡烛</label>
                    </div>
                    <div class="bill">
                        <h3>发票信息</h3>
                        <input type="radio" name="bill" id="notneed"><label for="notneed">不需要发票</label>
                        <input type="radio" name="bill" id="person"><label for="person">个人发票</label>
                        <input type="radio" name="bill" id="company"><label for="company">公司发票</label>
                    </div>
                    <div class="balance">
                        <h3>余额抵扣</h3>
                        <mt-switch class="switch"></mt-switch>
                        <span>你已经抵扣￥0元</span>
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
    data(){
        return {
            value:"off",
        }
    },
    components:{
        "myheader":MyHeader,
        "myfooter":MyFooter
    },
    methods:{
        add1(){
            var $btn2=$(".btn2");
            $btn2.click(doit);
            function doit(){
                var $btn=$(this);
                var $span=$(this).siblings("");
                var n=parseInt($span.html());
                if($btn.html()=="+"){
                    n++;
                }else if(n>0){
                    n--;
                }
                $span.html(n);
            }
            $btn2.click(doit);
        },
        add2(){

        },
    }
}
</script>
<style scoped>
    .order{
        width:100%;height:2200px;
        border-top:1px solid #D8D0D0;
        margin-bottom:120px;
    }
    .orderbox{
        width:1200px;height:358px;
        margin:0 auto;
        position: relative;
    }
    .orderimg{
        position:absolute;
        left:41%;
        background:#fff;
        margin-top:33px;
    }
    .orderinfo{
        position:absolute;
        top:70px;
    }
    .border{border-bottom:1px solid #E8E0E0;
        /* padding-bottom:20px; */
    }
    .orderinfo h2{
        font-size:26px;
        color:#666666;
    }
    .rager h3{
        font-size:18px;
        color:#5B3937;
        font-weight: normal;
    }
    .address{
        width:306px;height:30px;
        border:1px solid #EBEBEB;
        font-size:12px;
        text-align: center;
        line-height: 30px;
        margin-left:50px;
    }
    .pay{
        margin-top:40px;
        border-top:1px solid #E8E0E0;
        padding-bottom:20px;
    }
    .pay h3{
        font-size:18px;
        font-weight: normal;
        color:#5B3937;
    }
    .pay input{
        margin-left:50px;
        color:#5B3937;
    }
    .date{
        margin-top:40px;
        border-top:1px solid #E8E0E0;
    }
    .date h3{
        font-size:18px;
        font-weight: normal;
        color:#5B3937;
    }
    .date input{
        margin-left:50px;
        color:#5B3937;
    }
    .spoons{
        margin-top:40px;
        border-top:1px solid #E8E0E0;
        position: relative;
        padding-top:20px;
    }
    .spoons h3{
        font-size:18px;
        font-weight: normal;
        color:#5B3937;
        display: inline;
    }
    .spoons span{
        font-size: 12px;
        color:#f00;
    }
    .spoons .btn1{
        width:26px;height:25px;
        background-image: url(../img/details/jian.png);
        outline: 0;
        border:0;
        position: absolute;
        top:60px;
        left:10%;
    }
    .spoons input{
        width:58px;height:25px;
        text-align: center;
        border-top:0;
        border:0;
        border-bottom:1px solid #000;
        outline: 0;
        position: absolute;
        top:58px;
        left:14%;
    }
    .spoons .btn2{
        width:26px;height:25px;
        background-image: url(../img/details/jia.png);
        outline: 0;
        border:0;
        position: absolute;
        top:60px;
        left:22%;
    }
    .spoons .span2{
        font-size: 14px;
        color:#000;
        position: absolute;
        top:60px;
        left:26%;
    }
    .birthhat{
        margin-top:80px;
        border-top:1px solid #E8E0E0;
        position: relative;
        padding-top:30px;
    }
    .birthhat h3{
        font-size:18px;
        font-weight: normal;
        color:#5B3937;
        display: inline;
    }
    .birthhat span{
        font-size: 12px;
        color:#f00;
    }
    .birthhat .btn3{
        width:26px;height:25px;
        background-image: url(../img/details/jian.png);
        outline: 0;
        border:0;
        position: absolute;
        top:70px;
        left:10%;
    }
    .birthhat input{
        width:58px;height:25px;
        text-align: center;
        border-top:0;
        border:0;
        border-bottom:1px solid #000;
        outline: 0;
        position: absolute;
        top:68px;
        left:14%;
    }
    .birthhat .btn4{
        width:26px;height:25px;
        background-image: url(../img/details/jia.png);
        outline: 0;
        border:0;
        position: absolute;
        top:70px;
        left:22%;
    }
    .birthhat .span2{
        font-size: 14px;
        color:#000;
        position: absolute;
        top:70px;
        left:26%;
    }
    .gifts{
        margin-top:80px;
        border-top:1px solid #E8E0E0;
        position: relative;
        padding-top:30px;
    }
    .gifts h3{
        font-size:18px;
        font-weight: normal;
        color:#5B3937;
        display: inline;
    }
    .gifts span{
        font-size: 12px;
        color:#f00;
    }
    .gifts label{
        color:#5B3937;
    }
    .bill{
        margin-top:40px;
        border-top:1px solid #E8E0E0;
        position: relative;
        padding-top:20px;
    }
    .bill h3{
        font-size:18px;
        font-weight: normal;
        color:#5B3937;
    }
    .bill input{
        margin-left:30px;
    }
    .bill input+label{
        padding-right:30px;
        margin-right:10px;
        color:#5B3937;
    }
    .balance{
        margin-top:40px;
        border-top:1px solid #E8E0E0;
        position: relative;
        padding-top:20px;
        border-bottom:1px solid #E8E0E0;
        padding-bottom:20px;
    }
    .balance h3{
        font-size:18px;
        font-weight: normal;
        color:#5B3937;
    }
    .balance .switch{
        display: inline;
        margin-left:30px;
    }
    .balance span{
        margin-left:30px;
        font-size: 12px;
        color:#f00;
    }
</style>