import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Home from '@/components/Home'
import Bit from '@/components/Bit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/bit',
      name: 'Bit',
      component: Bit
    }
  ]
})
