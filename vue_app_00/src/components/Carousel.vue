<template>
    <div id="demo" class="carousel" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
        <!-- 1.轮播图片 -->
        <div class="carousel-inner" :class="ulClass" :style="ulStyle">
            <div v-for="(img,i) of imgs" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
                <router-link :to="img.to">
                    <img :src="img.src" :style="{width:innerWidth+'px'}">
                </router-link>
                <router-link :to="img.to"></router-link>
                <a href="javascript:;" @click="move(-1)" class="carousel-control-next">
                    <span class="carousel-control-next-icon"></span>
                </a>
                <a href="javascript:;" @click="move(1)" class="carousel-control-prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
            </div>
        </div>
        <ul class="carousel-indicators">
            <li v-for="(img,idx) of imgs" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
        </ul>
        <div class="bottomimgs">
            <div class="bottomcenter">
                <div class="leftimg">
                    <a href=""><img src="../img/indeximg/1.jpg"></a>
                </div>
                <div class="centerimgs">
                    <a href=""><img src="../img/indeximg/2.jpg"></a>
                    <a href=""><img src="../img/indeximg/3.jpg"></a>
                    <a href=""><img src="../img/indeximg/4.jpg"></a>
                </div>
                <div class="rightimg">
                    <a href=""><img src="../img/indeximg/5.jpg"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            innerWidth:window.innerWidth,
            ulClass:{ hasTrans:true },
            i:0,
            imgs:[
                {src:require("../img/carousel/banner1.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/banner2.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/banner3.jpg"),
                to:"javascript:;"},
                {src:require("../img/carousel/banner4.jpg"),
                to:"javascript:;"},
            ],
            canClick:true,
            timer:null
        }
    },
    created(){
        window.addEventListener("resize",()=>{
            this.innerWidth=window.innerWidth;
        })
        this.start();
    },
    methods:{
        stop(){
            clearInterval(this.timer);
        },
        start(){
            this.timer=setInterval(()=>{
                this.move(1);
            },3000)
        },
        move(i){
            if(this.canClick){
                this.canClick=false;
                if(i==-1&&this.i==0){
                    this.ulClass.hasTrans=false;
                    setTimeout(()=>{
                        this.i=this.imgs.length;
                        setTimeout(()=>{
                            this.ulClass.hasTrans=true;
                            this.i+=i;
                            setTimeout(()=>{
                                this.canClick=true;
                            },200)
                        },50)
                    },50)
                }else if(i==1&&this.i==this.imgs.length-1){
                    this.i+=i;
                    setTimeout(()=>{
                        this.ulClass.hasTrans=false;
                        setTimeout(()=>{
                            this.i=0;
                            setTimeout(()=>{
                                this.ulClass.hasTrans=true;
                                setTimeout(()=>{
                                    this.canClick=true;
                                })
                            },50)
                        },50)
                    },200)
                }else{
                    this.i+=i;
                    setTimeout(()=>{
                        this.canClick=true;
                    },300)
                }
            }
        },
        moveTo(i){
            if(this.canClick){
                this.i=i;
                this.canClick=false;
                setTimeout(()=>{
                    this.canClick=true;
                },300)
            }
        }
    },
    computed:{
        ulStyle(){
            var width=this.innerWidth*(this.imgs.length+1)+"px";
            var marginLeft=-this.i*this.innerWidth+"px";
            return {width,marginLeft}
        }
    }
}
</script>
<style scoped>
    .carousel{
        overflow:hidden;
        position: relative;
    }
    /*重写左右箭头的样式*/
    .carousel-control-next{
        width:35px;height:35px;
        background-image: url(../img/carousel/left.png);
        background-repeat: no-repeat;
        background-color:rgb(255,255,255,.1);
        border-radius: 50%;
        top:50%;
        position: absolute;
        left:1%;
    }
    .carousel-control-prev{
        width:35px;height:35px;
        background-image: url(../img/carousel/right.png);
        background-repeat: no-repeat;
        background-color:rgb(255,255,255,.3);
        /* background-position: center; */
        border-radius: 50%;
        top:50%;
        position: absolute;
        left:96%;
    }
    /****指示器 */
    .carousel-indicators{
        list-style: none;
        position: absolute;
        left:45%;
        top:43%;
    }
    .carousel-inner{
        height:408px;
        position:relative;
    }
    .carousel:after{
        content:"";
        display:block;
        clear:both;
    }
    .carousel>.carousel-inner.hasTrans{
        transition:all .2s linear;
    }
    .carousel>.carousel-inner>.carousel-item{
        display:block;
        float:left;
        position: relative;
    }
    
    .carousel-indicators li{
        width:30px;height:2px;
        background-color:#ccc;
        margin-left:6px;
        margin-right:6px;
        float: left;
        top:60px;
    }
    .carousel-indicators>li:hover, .carousel-indicators>li.active{
        transform:scale(1.3)
    }
    
    /******下面图片******* */
    .bottomimgs{
        width:100%;
        margin-top:50px;
    }
    .bottomcenter{
        width:1200px;
        margin:0 auto;
        position: relative;
    }
    .leftimg{
        display: inline;
    }
    .centerimgs{
        display: inline;
    }
    .centerimgs{
        position:absolute;
        width:496px;
        margin-left:6px;
    }
    .centerimgs a:first-child{
        margin-right:5px;
    }
    .rightimg{
        display: inline;
    }
    .rightimg{
        float: right;
    }
</style>