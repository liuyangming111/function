import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    component: Home,
    children:[
      {
        path:'/',
        name:'homepage',
        component:()=>import('../views/Subrouting/homepage.vue')
      },
      {
        path:'/Published',
        name:'Published',
        component:()=>import('../views/Subrouting/Published.vue')
      },
      {
        path:'/statistics',
        name:'statistics',
        component:()=>import('../views/Subrouting/statistics.vue')
      }
    ]
    
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
