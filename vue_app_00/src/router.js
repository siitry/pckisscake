import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/Login.vue"
import MyHeader from "./components/MyHeader.vue"
import Index from "./views/Index.vue"
import Carousel from "./components/Carousel.vue"
import Details from "./components/Details.vue"
import Cart from "./components/Cart.vue"
import Order from "./components/Order.vue"
import Myallactiv  from "./components/Myallactiv.vue"
import MyFooter  from "./components/MyFooter.vue"
import goods from "./components/goods.vue"
import Reg from "./components/Reg.vue"
import Company from "./components/Company.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Company',component:Company},
    {path:'/Reg',component:Reg},
    {path:'/goods',component:goods},
    {path:'/Myallactiv',component:Myallactiv},
    {path:'/Order',component:Order},
    {
      path:'/details/:id/',
      props:true,
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "details" */ './components/Details.vue')},
    {path:'/Cart',component:Cart},
    {path:'/Carousel',component:Carousel},
    {path:'/Index',component:Index},
    {path:'/MyFooter',component:MyFooter},
    {path:'/MyHeader',component:MyHeader},
    {path:'/Login',component:Login},
    {path:'/',component:Index}
  ]
})