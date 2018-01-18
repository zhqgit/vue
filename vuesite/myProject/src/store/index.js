import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
// import modules from './modules'
import mutations from './mutations'
import actions from './actions'
import types from './types'
import Storage from '@/common/data/storage'

Vue.use(Vuex)

const state = {
  user: {
    id: localStorage.getItem(Storage.USER_ID),
    username: localStorage.getItem(Storage.USER_USERNAME),
    email: localStorage.getItem(Storage.USER_EMAIL),
    grade: localStorage.getItem(Storage.USER_GRADE),
    major: localStorage.getItem(Storage.USER_MAJOR),
    avatar: localStorage.getItem(Storage.USER_AVATAR)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  // modules,
  mutations,
  actions,
  types
})

export default store
