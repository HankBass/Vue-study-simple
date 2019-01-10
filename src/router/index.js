import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


/**
 * 定义主要入口的路由配置
 */
var indexRoute = [
  // 重定向
  {
    path: '*',
    redirect: "/login"
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
  },

]
export default new Router({
  routes: indexRoute
})