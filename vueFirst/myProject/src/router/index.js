import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

