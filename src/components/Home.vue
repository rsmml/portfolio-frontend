<template>
  <div id="home" class="row justify-content-around align-items-center">
    <NightMode :key="componentKey"/>
    <div class="left-box">
      <div class="title">
        <SvgTitle id="img-title" v-if="darkMode"/>
        <SvgTitleDark id="img-title" v-else/>
      </div>
      <h2 v-if="darkMode" class="dark-mode-title data my-4">FullStack Web Developer</h2>
      <h2 v-else class="light-mode-title data my-4">FullStack Web Developer</h2>
      <button class="btn btn-primary d-flex align-items-center" @click.prevent="open">
        <p class="mb-0">About Me</p>
        <font-awesome-icon icon="arrow-right" />
      </button>
    </div>
    <div class="right-box d-flex">
      <img src="@/assets/profile.png" alt="avatar" class="profile animate__animated animate__fadeIn">
      <!-- <img id="glasses" src="@/assets/glasses.png" alt="avatar" class="animate__animated" :class="{ 'animate__fadeIn' : !darkMode}"> -->
    </div>
    <About v-if="about"/>
  </div>
</template>

<script>
import baffle from 'baffle'
import SvgTitle from './SvgTitle'
import NightMode from './NightMode'
import SvgTitleDark from './SvgTitleDark'
import About from './About'
import { bus } from '../main'

export default {
  name: 'Home',
  data () {
    return {
      nameTitle: require('@/assets/name.svg'),
      componentKey: 0
    }
  },
  components: {
    SvgTitle,
    NightMode,
    SvgTitleDark,
    About
  },
  mounted () {
    let b = baffle('.data', {
      characters: '>▒█ <▓█▓/ ▓█>▒█ <<▓ ░█▓▒░ ▓░█░ <█▓ ░█▒█ ░▓▓▒',
      speed: 90
    })
    b.start()
    b.reveal(2500)
  },
  updated () {
    bus.$on('reaload', (data) => {
      this.componentKey += data
    })
    bus.$on('close', (data) => {
      this.about = data
    })
    bus.$on('open', (data) => {
      this.about = data
    })
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    },
    about () {
      return this.$store.state.about
    }
  },
  methods: {
    open () {
      this.$store.state.about = true
    }
  }
}
</script>

<style scoped>
  @media (max-width: 767px) {
    #home {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column-reverse;
    }
    img.profile {
      height: 315px;
      width: 315px;
      border-radius: 50%;
      border: 10px solid white;
    }
    h2 {
      color: white;
      font-size: 24px;
      text-align: center;
    }
    .left-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
    .btn-primary {
      font-size: 21px;
      padding: 12px 26px;
      background: rgb(255,0,110);
      background: linear-gradient(90deg, rgba(255,0,110,1) 0%, rgba(199,72,127,1) 100%);
      color: white;
      border-radius: 0;
      border: none;
      transition: 0.3s ease
    }
    .btn-primary:not(:disabled):not(.disabled):active {
      background: rgb(208,13,97);
      background: linear-gradient(90deg, rgba(208,13,97,1) 0%, rgba(161,68,108,1) 100%);
    }
    svg.fa-arrow-right {
      position: relative;
      left: 38px;
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    #home {
      width: 100vw;
      height: 80vh;
    }
    img.profile {
      height: 385px;
      width: 385px;
      border-radius: 50%;
      border: 20px solid white;
    }
    h2 {
      color: white;
      font-size: 30px;
      text-align: start;
    }
    .btn-primary {
      font-size: 21px;
      padding: 12px 26px;
      background: rgb(255,0,110);
      background: linear-gradient(90deg, rgba(255,0,110,1) 0%, rgba(199,72,127,1) 100%);
      color: white;
      border-radius: 0;
      border: none;
      transition: 0.3s ease
    }
    .btn-primary:not(:disabled):not(.disabled):active {
      background: rgb(208,13,97);
      background: linear-gradient(90deg, rgba(208,13,97,1) 0%, rgba(161,68,108,1) 100%);
    }
    svg.fa-arrow-right {
      position: relative;
      left: 38px;
    }
    p {
      position: relative;
      left: 10px;
    }
    .animate__animated.animate__fadeIn {
      --animate-duration: 3s;
    }
    img#glasses {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 20%
    }
    h2.light-mode-title {
      color: #1e1f2b;
    }
  }
  @media (min-width: 1441px) {
    #home {
      width: 1440px;
      justify-content: space-around;
      align-items: center;
      margin: auto;
      height: 80vh;
    }
    img.profile {
      height: 385px;
      width: 385px;
      border-radius: 50%;
      border: 20px solid white;
    }
    h2 {
      color: white;
      font-size: 30px;
      text-align: start;
    }
    .btn-primary {
      font-size: 21px;
      padding: 12px 26px;
      background: rgb(255,0,110);
      background: linear-gradient(90deg, rgba(255,0,110,1) 0%, rgba(199,72,127,1) 100%);
      color: white;
      border-radius: 0;
      border: none;
      transition: 0.3s ease
    }
    .btn-primary:not(:disabled):not(.disabled):active {
      background: rgb(208,13,97);
      background: linear-gradient(90deg, rgba(208,13,97,1) 0%, rgba(161,68,108,1) 100%);
    }
    svg.fa-arrow-right {
      position: relative;
      left: 38px;
    }
    p {
      position: relative;
      left: 10px;
    }
    .animate__animated.animate__fadeIn {
      --animate-duration: 3s;
    }
    img#glasses {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 20%
    }
    h2.light-mode-title {
      color: #1e1f2b;
    }
    .left-box {

    }
  }
</style>
