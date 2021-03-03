// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faBars, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Animate.css
import 'animate.css'
// Simple Alert
import VueSimpleAlert from 'vue-simple-alert'
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// Vuex
import Vuex from 'vuex'
// Router
import router from './router'
// Store
import { store } from './store/store'
// Anime.js
import VueAnime from 'vue-animejs'

// Font Awesome
library.add(faSpinner, faBars, faTimes, faArrowRight, faLinkedinIn, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Axios
Vue.use(VueAxios, axios)
// Vuex
Vue.use(Vuex)
// Simple Alert
Vue.use(VueSimpleAlert)
// Anime.js
Vue.use(VueAnime)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
document.getElementById('toggle').checked = true
// if (localStorage.darkMode === 'true') {
//   console.log('DarlMode On')
//   document.getElementById('toggle').checked = true
// } else {
//   console.log('DarkMode Off')
// }
