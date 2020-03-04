<template>
    <main id="main" class="container">
        <div id="bannerbox">
            <div id="bannerwidth">
                <div id="switch">
                    <div id="banner">
                        <div id="btn-left"></div>
                        <ul id="ul-imgs" class="transition" style="width:px;margin-left:0px;">
                            <li><a href=""><img src="../img/carousel/banner1.jpg"></a></li>
                            <li><a href=""><img src="../img/carousel/banner2.jpg"></a></li>
                            <li><a href=""><img src="../img/carousel/banner3.jpg"></a></li>
                            <li><a href=""><img src="../img/carousel/banner4.jpg"></a></li>
                            <li><a href=""><img src="../img/carousel/banner1.jpg"></a></li>
                        </ul>
                        <ul id="ul-idxs">
                            <li class="active"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div id="btn-right"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
import MyHeader from "./MyHeader"
export default {
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{margin:0;padding:0;}
    #switch{width:100%;
    }
    #banner{
        width:100%;height:408px;
        overflow: hidden;
        position:relative;
        float: left;
    }
    #bannerbox #bannerwidth #switch{
        margin-top:20px;
    }
    #btn-left{
        left:10px;
        background-image: url(../img/carousel/left.png);
    }
    #btn-right{
        right:10px;
        background-image: url(../img/carousel/right.png);
    }
    #ul-imgs{list-style:none;}
    #ul-imgs.transition{
        transition:all .5s linear;
    }
    #ul-imgs>li{
        width:1520px;
        float:left;
    }
    #ul-imgs img{
        width:100%;height:100%;
    }
    #ul-idxs{ /*整排圆点宽度*/
        width:250px;
        margin:0 auto;
        list-style: none;
        position:absolute;
        bottom:25px;
        left:50%;
        margin-left:-100px;
    }
    #ul-idxs>li{ /*小方块*/
        float: left;
        width:30px;height:2px;
        background-color:rgb(255, 255, 255,.5);
        margin:0 5px;
        cursor:pointer;
    }
    #ul-idxs>li.active{
        background-color:#8391A5;
    }
    #btn-left,#btn-right{
        width:30px;height:30px;
        position:absolute;
        top:50%;
        background-repeat: no-repeat;
        background-position: center;
        background-color:rgb(255, 255, 255,.2);
        opacity: 0.5;
        border-radius:50%;
        cursor: pointer;
    }
    #btn-left{
        left:10px;
        background-image: url(../img/carousel/left.png);
    }
    #btn-right{
        right:10px;
        background-image: url(../img/carousel/right.png);
    }
    #btn-left:hover,#btn-right:hover{
        opacity: 1;
        transition:all .2s linear;
    }
</style>
