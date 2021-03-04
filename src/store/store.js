import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
    darkMode: true,
    about: false
  },

  mutations: {
    setWindowWidth (state) {
      state.windowWidth = window.innerWidth
    }
  }
})
