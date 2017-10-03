import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import about from '../pages/about.vue'
import hello from '../pages/hello.vue'
import resume from '../pages/resume.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
          // 這個是透過 to.hash 的值來找到對應的元素
          // 照你的 html 來看是不用多加處理這樣就可以了
          // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/web',
      name: 'hello',
      component: hello
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
