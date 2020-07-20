import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/',
        name: 'homepage',
        component: () => import('../views/Subrouting/homepage.vue')
      },
      {
        path: '/Published',
        name: 'Published',
        component: () => import('../views/Subrouting/Published.vue')
      },
      {
        path: '/statistics',
        name: 'statistics',
        component: () => import('../views/Subrouting/statistics.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('../views/Subrouting/article')
      },
      {
        path: '/tab',
        name: 'tab',
        component: () => import('../views/Subrouting/tab')
      },
      {
        path: '/export',
        name: 'export',
        component: () => import('../views/Subrouting/export.vue')
      },
      {
        path: '/picturepupload',
        name: 'picturepupload',
        component: () => import('../views/Subrouting/picturepupload.vue')
      },
      {
        path: '/signout',
        name: 'signout',
        component: () => import('../views/Subrouting/signout.vue')
      },
      {
        path: '/dome',
        name: 'dome',
        component: () => import('../views/Published/dome.vue')
      },
      {
        path: '/domo',
        name: 'domo',
        component: () => import('../views/Published/domo.vue')
      }
    ]

  },
  {
    path: '/logon',
    name: 'logon',
    component: () => import('../views/logon/logon.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/logon/register.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 router.beforeEach((to,from,next)=>{
   let user=JSON.parse(localStorage.getItem('user'))
   if(to.path==='/logon' || to.path==='/register'){
     next()
   }else{
     user ? next():(next('logon'))
   }
 })
export default router
