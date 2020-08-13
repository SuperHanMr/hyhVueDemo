import Vue from 'vue'
import Router from 'vue-router'
import appHemo from '@/AppHemo/appHemo'


Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appHemo',
      component: appHemo,
      // 子路由
      children: [
        {
          path: 'home',
          component: () => import('../pages/home.vue')
        },
        {
          path: 'auction',
          component: () => import('../pages/auction.vue')
        },
        {
          path: 'message',
          component: () => import('../pages/message.vue')
        },
        {
          path: 'my',
          component: () => import('../pages/my.vue')
        },
        // 默认显示 主页
        {
          path:'',
          component:() => import('../pages/home.vue')
        }
      ]
    },
  
    {
      path: '/releaseContent',
      name: 'releaseContent',
      component:() => import('../pages/releaseContent.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:() => import('../pages/login.vue')
    },

  ]
})
