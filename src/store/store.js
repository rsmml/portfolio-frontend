import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
    darkMode: true,
    modal: false,
    bit: true,
    play: false,
    normalMode: true,
    work: false,
    dialog: true,
    dialogOne: true,
    points: 0,
    mobileView: false,
    showNav: false,
    executed: false
  },

  mutations: {
    setWindowWidth (state) {
      state.windowWidth = window.innerWidth
    }
  }
})
