// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/css/bootstrap.min.css'
import api from './api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

// 开启调试模式
localStorage.setItem('debug', 'leancloud*')

// 通过 Vue.mixin 注册了一下全局的生命周期函数，会为每一个组件实例都注入 api 对象
Vue.mixin({
  beforeCreate() {
    if (api && !this.$api) {
      this.$api = api;
    }
  }
})



// 全局组件在这里注册，注册之后在全局范围内可用
Vue.component('global', {
  template: '<div>这是一个全局注册组件</div>'
})

let Child = Vue.extend({
  template: '<div>Child</div>'
})

let Parent = Vue.extend({
  template: '<div>Parent<my-child></my-child></div>',
  components: {
    'my-child': Child
  }
})

Vue.use(ElementUI)

new Vue({
  el: '#cpp',
  router,

  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件，子组件能通过 this.$store访问到
  store,
  //template: '<App/>',
  //components: { App }
  render: h => h(App)
})
