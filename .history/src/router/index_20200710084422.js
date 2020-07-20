import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },
  {
    path:'/logon',
    name:'logon',
    component:()=>import('../views/logon/logon.vue')
  },
  {
    path:'/register',
    name:'register',
    component:()=>import('../views/logon/register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
