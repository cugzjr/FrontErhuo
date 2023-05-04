import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";
import Home from '../views/adminHome'
import UserData from "@/views/UserData.vue";
import FeedBack from "@/views/FeedBack.vue";
import Product from "@/views/Product.vue";
import Commerce from "@/views/Commerce.vue";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/adminHome',
    name: '管理员主页',
    component: Home,
    children:[
      {
        path: '/UserData',
        name: '用户信息',
        component: UserData,
      },
      {
        path: '/FeedBack',
        name: '申诉信息',
        component: FeedBack,
      },
      {
        path: '/Product',
        name: '商品信息',
        component: Product,
      },
      {
        path: '/Commerce',
        name: '交易信息',
        component: Commerce,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
