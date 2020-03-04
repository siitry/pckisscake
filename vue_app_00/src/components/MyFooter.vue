<template>
    <footer id="footer">
        <div class="footerbox">
            <div class="wp">
                <div class="wq">
                    <p>订购专线：4001-023-866</p>
                    <p>渝ICP备13001878号-3</p>
                    <p>COPYRIGHT©2013-2022 Kissmilan 版权所有</p>
                    <p>重庆市江北区北滨一路456号S1栋四层商业3号商铺</p>
                    <p>技术支持: 迈小步科技有限公司</p>
                </div>
                <ul class="nav">
                    <li><a href="javascript:;" class="menu">联系我们</a></li>
                    <li><a href="javascript:;" class="menu">订购帮助</a></li>
                    <li><a href="javascript:;" class="menu"><img src="../img/footer/wb_.d06f03b.png"></a></li>
                    <li>
                        <a href="javascript:;" class="menu" id="xsyc">
                            <ul style="list-style:none;padding:0;">
                                <li class="wechat">
                                    <ul style="list-style:none;">
                                        <li><img style="width:126px;height:126px;margin-top:-500px;margin-left:-100px;" src="../img/vx.jpg"></li>
                                    </ul>
                                </li>
                            </ul>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .wechat{
        width:38px;height:32px;
        background-image:url(../img/footer/wx_.f9e8887.png);
        background-size:100%;
    }
    #xsyc ul li ul{
        visibility: hidden;
    }
    #xsyc ul li:hover ul{
        visibility: visible;
    }
    #footer{
        width:100%;
        margin-top:42px;
        border-top:1px solid #491903;
    }
    .footerbox{
        width:1200px;height:125px;
        margin: 0 auto;
        margin-top:10px;
    }
    .wq p{
        color: #6d3d3b;
        height: 10px;
        line-height: 25px;
        font-size: 14px;
    }
    .wp{
        float: left;
        display: block;
        line-height: 1.15;
        height: 125px;
    }
    .wq{
        position: absolute;
        left: 11%;
    }
    /* .wp ul li:nth-child(2)::before{
        content:"|";
        width:1px;height:11px;
        color:#E3C4C3;
    } */
    /* .wp ul li:nth-child(3)::before{
        content:"|";
        width:1px;height:11px;
        color:#E3C4C3;
    } */
    /******/
    .nav{
        list-style: none;
        width: 800px;
        position: absolute;
        left:68%;
        right: -170px;
    }
    li a{
        text-decoration:none;
        float: left;  
        margin-right:30px;
        color:#6D3D3B;
    }
</style>