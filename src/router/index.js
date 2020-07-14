import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import GoodsList from '@/page/goodsList.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect : '/index',
    children : [{
      path : '/index',
      name : 'index',
      component : Index
    },{
      path:'/changeCity',
      name: 'changeCity',
      component : ChangeCity
    },{
      path:'s/:name',
      name: 'goods',
      component : GoodsList
    }]
  },
  {
    path: '/',
    name: 'blank',
    component : blankPage,
    children:[{
      path: '/login',
      name: 'login',
      component: Login,
    },{
      path: '/register',
      name: 'register',
      component: Register,
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
