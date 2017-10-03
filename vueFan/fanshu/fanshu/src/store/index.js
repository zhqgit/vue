/**
 * @Vuex  是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态
 */


import Vue from 'vue'
import Vuex from 'vuex'
import todo from './todo'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 存放状态值
    count: 0,
    name: 'zhqgit',
    bar: {
      name: 'Bar',
      age: 12
    },
    active: todo.active,
    todoList: []
  },
  mutations: {
    // 存放触发状态改变的所有方法
    inc: state => state.count++,
    dec: state => state.count--,
    changeName: (state) => {
        state.name = 'JoLing'
    },
    sayHello: (state)=>{
      state.bar.name = 'Hello Bar!'
    },
    change(state,val){
      state.active = val;
    },
    del(){
      
    }
  }
})

export default store
