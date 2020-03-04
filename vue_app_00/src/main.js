import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

import MintUI from "mint-ui"
import "mint-ui/lib/style.css"

Vue.use(VueRouter);
Vue.use(MintUI);

import axios from "axios"
//7.配置访问服务器基础地址
axios.defaults.baseURL="http://127.0.0.1:4000/"
//8.配置发送请求保存session信息
axios.defaults.withCredentials=true;
//9.将axios注册vue
Vue.prototype.axios = axios;
//10.添加第三方组件库vuex
//11.引入vuex
import Vuex from "vuex"
//12.注册vuex
Vue.use(Vuex);
//13.创建全局存储对象
var store = new Vuex.Store({
  //(1).共享数据
  state:{
    cartCount:0, //购物车中商品数量
  },
  //(2).修改数据方法
  mutations:{
    //增加购物车数量
    addCartCount(state,num){
      state.cartCount+=num;
    },
    //减少购物车数量
    subCartCount(state,num){
      state.cartCount-=num;
    },
    //清空购物车
    clearCartCount(state,num){
      state.cartCount=0;
    },
  },
  //(3).获取数据方法
  getters:{
    getCartCount(state){return state.cartCount} //获取购物车数量
  }
  //(4).异步修改数据方法
})

new Vue({
  router,
  render: h => h(App),  //App App.vue根组件    
  //14.将全局存储对象添加到Vue实例中作为属性    
  store     
}).$mount('#app')
