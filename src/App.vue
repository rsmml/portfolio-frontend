<template>
  <div id="app">
    <Background />
    <div id="icon-nav" v-if="mobileView" @click="openNav" :class="{ 'move': showNav}">
      <font-awesome-icon icon="bars" v-if="!showNav" :class="{'light': !darkMode}"/>
      <font-awesome-icon icon="times" v-if="showNav" :class="{'light': !darkMode}"/>
    </div>
    <Navbar v-if="!mobileView" :key="componentKey"/>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutLeft"
    >
      <NavbarMobile v-if="showNav" class="mobile-nav"/>
    </transition>
    <transition
    >
      <router-view/>
    </transition>
    <MediaBtns v-if="!mobileView && normalMode" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'
import MediaBtns from '@/components/MediaBtns'
import Background from '@/components/Background'
import { bus } from './main'

export default {
  name: 'App',
  data () {
    return {
      darkmode: '',
      componentKey: 0
    }
  },
  components: {
    Navbar,
    NavbarMobile,
    MediaBtns,
    Background
  },
  methods: {
    handleView () {
      this.$store.state.mobileView = window.innerWidth <= 768
      if (this.$store.state.mobileView <= 768) {
        this.$store.state.showNav = false
      }
    },
    openNav () {
      this.$store.state.showNav = !this.$store.state.showNav
    }
  },
  created () {
    this.handleView()
    window.addEventListener('resize', this.handleView)
    this.componentKey += 1
  },
  updated () {
    bus.$on('reload', (data) => {
      this.componentKey += data
    })
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    },
    mobileView () {
      return this.$store.state.mobileView
    },
    showNav () {
      return this.$store.state.showNav
    },
    normalMode () {
      return this.$store.state.normalMode
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap')
  p {
    color: white;
  }
  body {
    cursor: default;
  }
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
    color: white;
  }
  svg.light {
    color: #202231 !important;
  }
  svg.fa-times {
    z-index: 1200;
    cursor: pointer;
  }
  .mobile-nav{
    position: absolute;
    top: 0;
  }
  .move{
    transform: translateX(150px);
    /*transition: 0.45s transform cubic-bezier(0,.12,.14,1);*/
    transition: 0.45s;
  }
  .animate__animated.animate__slideInLeft{
    --animate-duration: .45s;
  }
  .animate__animated.animate__slideOutLeft{
    --animate-duration: .45s;
  }
</style>
