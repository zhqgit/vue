import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Index from '@/components/Index/Home'
import MsgBoard from '@/components/MsgBoard'

import Profile from '@/components/profile/Profile'
import Info from '@/components/profile/Info'
import Favorites from '@/components/profile/Favorites'
import Resource from '@/components/profile/Resource'
import Issue from '@/components/profile/Issue'

import ResShare from '@/components/share/ResShare'
import SiteDetail from '@/components/about/SiteDetail'
import StuLinkUp from '@/components/bbs/StuLinkUp'

import Carousel from '@/components/carousel/Carousel'
import Banner from '@/components/banner/Banner'

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
        component: Profile,
        children: [{
          path: '/profile/info',
          name: 'info',
          component: Info
        },
        {
          path: '/profile/favorites',
          name: 'favorites',
          component: Favorites
        },
        {
          path: '/profile/resource',
          name: 'resource',
          component: Resource
        },
        {
          path: '/profile/issue',
          name: 'issue',
          component: Issue
        },
        {
          path: '',
          name: 'Default',
          component: Info
        }
        ]
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
      {
        path: '/msg_board',
        name: 'MsgBoard',
        component: MsgBoard
      },
      {
        path: '',
        name: 'Default',
        component: Banner
      }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 未登录，并且进入的路径不是 '/login'，则跳转到登录页面
  console.log('现在进入的路径是' + to.path)
  // 如果 store.getters.user是空，那么则不进行后面的判断
  if ((store.getters.user === null || store.getters.user.id === null) && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
