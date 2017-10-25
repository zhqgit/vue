// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import VueLetterAvatar from 'vue-letter-avatar'

import common from './common'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueLetterAvatar)
Vue.prototype.$common = common
/* eslint-disable no-new */
new Vue({
  el: '#cpp',
  router,
  store,
  // 注释中 的代码表示使用 App.vue中的内容替换掉 #cpp这个标签的内容
  // template: '<App/>',
  // components: {
  //   App
  // }
  render: h => h(App)
})
