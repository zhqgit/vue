/**
 * @Vuex  是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  ADD_NOTE(state){
    // 初始化新的笔记
    const newNote = {
      text: 'new Note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  EDIT_NOTE(state,text){
    state.activeNote.text = text
  },
  TOGGLE_FAVORITE(state){
    state.activeNote.favorite = !state.activeNote.favorite
  },
  DELETE_NOTE(state){
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },
  SET_ACTIVE_NOTE(state,note){
    state.activeNote = note
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
