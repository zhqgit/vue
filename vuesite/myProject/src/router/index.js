import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SignIn from '@/components/SignIn'
import MsgBoard from '@/components/MsgBoard'
import PersonSpace from '@/components/PersonSpace'
import ResShare from '@/components/ResShare'
import SiteDetail from '@/components/SiteDetail'
import StuLinkUp from '@/components/StuLinkUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/sign_in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/msg_board',
      name: 'MsgBoard',
      component: MsgBoard
    },
    {
      path: '/person_space',
      name: 'PersonSpace',
      component: PersonSpace
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
    }
  ]
})
