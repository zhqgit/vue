import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Index from '@/components/Index/Home'
import MsgBoard from '@/components/MsgBoard'
import Profile from '@/components/profile/Profile'
import ResShare from '@/components/share/ResShare'
import SiteDetail from '@/components/about/SiteDetail'
import StuLinkUp from '@/components/StuLinkUp'
import Carousel from '@/components/carousel/Carousel'
import Login from '@/components/login/Login'
import T from '@/components/Login/T'

Vue.use(Router)

const router = new Router({
  // 美化url，单页面一直会带着#(表示当前页面)
  // 使用history模式会除去#
  mode: 'history',
  routes: [
    // 维护好这张表和 router-view 的位置即可
    // 根目录('/') 和 目录'/login' 在平行位置
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      // name: 'Index',
      component: Index,
      children: [{
          path: '/msg_board',
          name: 'MsgBoard',
          component: MsgBoard
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/site_detail',
          name: 'SiteDetail',
          component: SiteDetail
        },
        {
          path: '/resource_share',
          name: 'ResShare',
          component: ResShare
        },
        {
          path: '/stu_linkup',
          name: 'StuLinkUp',
          component: StuLinkUp
        },
        // {
        //   path:'/login',
        //   name: 'Login',
        //   component: Login
        // },
        {
          path: '',
          name: 'Default',
          component: Carousel
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 未登录，并且进入的路径不是 '/login'，则跳转到登录页面
  console.log('现在进入的路径是' + to.path)
  // 如果 store.getters.user是空，那么则不进行后面的判断
  if ((store.getters.user === null || store.getters.user.userid === 0 || store.getters.user.userid === null || store.getters.user.password === null) && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
