<template>
  <div id="app">
    <div id="icon-nav" v-if="mobileView" @click="showNav = !showNav" :class="{ 'move': showNav}">
      <font-awesome-icon icon="bars" v-if="!showNav" />
      <font-awesome-icon icon="times" v-if="showNav" />
    </div>
    <Navbar v-if="!mobileView" />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <NavbarMobile v-if="showNav" class="mobile-nav"/>
    </transition>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__bounceInDown"
      leave-active-class="animate__animated animate__bounceOutDown"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'
export default {
  name: 'App',
  data () {
    return {
      darkmode: false,
      mobileView: false,
      showNav: false
    }
  },
  components: {
    Navbar,
    NavbarMobile
  },
  methods: {
    handleView () {
      this.mobileView = window.innerWidth <= 768
      if (this.mobileView <= 768) {
        this.showNav = false
      }
    }
  },
  created () {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#icon-nav {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  text-align: left;
  width: max-content;
}
svg.fa-bars, svg.fa-times {
  width: 22px !important;
  height: 22px !important;
}
.mobile-nav{
  position: absolute;
  top: 0;
}
.move{
  transform: translateX(150px);
  transition: 0.25s transform cubic-bezier(0,.12,.14,1)
}
.animate__animated.animate__fadeInLeft{
  --animate-duration: .25s;
}
.animate__animated.animate__fadeOutLeft{
  --animate-duration: .25s;
}
</style>
