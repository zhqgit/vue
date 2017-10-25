import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import modules from './modules'
import mutations from './mutations'
import actions from './actions'
import types from './types'
import Storage from '@/common/data/storage'

Vue.use(Vuex)

const state = {
  user: {
    userid: localStorage.getItem(Storage.userid),
    role: localStorage.getItem(Storage.role),
    password: localStorage.getItem(Storage.password)
  }
}

const store = new Vuex.Store({
    state,
    getters,
    modules,
    mutations,
    actions,
    types
})


export default store
