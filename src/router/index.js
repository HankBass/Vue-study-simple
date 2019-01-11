import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import iView from 'iview'
import { setToken, getToken, canTurnTo } from '@/assets/js/utils'
Vue.use(Router)



/**
 * 定义主要入口的路由配置
 */
const routes  = [
  // 重定向
  {
    path: '*',
    redirect: "/login"
  },
  {
    path: '/index',
    redirect: "/home"
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/login/login.vue'], resolve),
  },
  {
    path: '/index',
    name: 'index',
    component: resolve => require(['@/views/index.vue'], resolve),
    children:[
      {
        path: '/home',
        name: 'home',
        component: resolve => require(['@/views/home/home.vue'], resolve),
      },
      {
        path: '/other',
        name: 'other',
        component: resolve => require(['@/views/other/other.vue'], resolve),
      }


    ]
  },

]

const router = new Router({
  routes,
})

const LOGIN_PAGE_NAME = 'login'


router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: "home" // 跳转到home页
    })
  } else {
    store.dispatch('getUserInfo').then(user => {
      // 拉取用户信息
      
      
      next()
    }).catch(() => {
      setToken('')
      next({
        name: 'login'
      })
    })
    
  }
})
router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})


export default router