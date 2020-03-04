<template>
    <div class="f1">
        <MyHeader></MyHeader>
        <img src="../img/company/1.jpg"/>
        <img src="../img/company/2.jpg"/>
        <img src="../img/company/3.jpg" />
         <Footer></Footer>
    </div>
</template>
<script>
import MyHeader from "./MyHeader"
import Footer from "./MyFooter"
export default {
    components: {
        "Footer":Footer,
        "MyHeader":MyHeader,
    }
}
</script>
<style scoped>
  .f1{
      border-bottom:0.4px solid #491903;
  }
</style>