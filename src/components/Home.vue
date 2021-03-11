<template>
  <div id="home" class="row justify-content-around align-items-center">
    <Bit v-if="!normal"/>
    <NightMode :key="componentKey" v-if="normal"/>

    <div class="info">
      <div class="left-box" v-if="normal">
        <div class="title">
          <SvgTitle id="img-title" v-if="darkMode"/>
          <SvgTitleDark id="img-title" v-else/>
        </div>
        <h2 v-if="darkMode" class="dark-mode-title data my-4">FullStack Web Developer</h2>
        <h2 v-else class="light-mode-title data my-4">FullStack Web Developer</h2>
        <button class="btn btn-primary d-flex align-items-center" @click.prevent="open">
          <p class="mb-0 about">About Me</p>
          <font-awesome-icon icon="arrow-right" :class="{'dark-arrow': !darkMode }" />
        </button>
      </div>
      <div class="right-box d-flex" v-if="normal">
        <img src="@/assets/profile.png" alt="avatar" class="profile animate__animated animate__fadeIn">
        <!-- <img id="glasses" src="@/assets/glasses.png" alt="avatar" class="animate__animated" :class="{ 'animate__fadeIn' : !darkMode}"> -->
      </div>
    </div>

    <Modal v-if="modal"/>
    <Review />
    <button v-if="normal && !mobileView" class="btn btn-outline-light play-btn" @click="play">I just want to Play</button>
    <footer v-if="normal && !mobileView" class="d-flex justify-content-between align-items-center">
      <p class="m-2">This portfolio was made with <strong>Love</strong> ❤️ and a few 🐛</p>
      <p class="m-2">© 2021</p>
    </footer>
  </div>
</template>

<script>
import baffle from 'baffle'
import SvgTitle from './SvgTitle'
import NightMode from './NightMode'
import SvgTitleDark from './SvgTitleDark'
import Modal from './Modal'
import Bit from './Bit'
import Review from './Review'
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
    Modal,
    Bit,
    Review
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
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    },
    modal () {
      return this.$store.state.modal
    },
    normal () {
      return this.$store.state.normalMode
    },
    mobileView () {
      return this.$store.state.mobileView
    },
    showNav () {
      return this.$store.state.showNav
    }
  },
  methods: {
    open () {
      this.$store.state.modal = true
      this.$store.state.about = true
      this.$store.state.contact = false
      this.$store.state.workmodal = false
    },
    play () {
      this.$store.state.normalMode = false
    }
  }
}
</script>

<style scoped>
  button.btn-outline-light {
    position: absolute;
    bottom: 24px;
  }
  @media (max-width: 767px) {
    #home {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column-reverse;
    }
    .info {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-between;
      height: 80vh;
    }
    img.profile {
      height: 250px;
      width: 250px;
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
    svg.dark-arrow {
      color: #5d5e5d;
    }
    button.play-btn {
      display: none;
    }
    footer {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 979px) {
    #home {
      width: 100vw;
    }
    .info {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-between;
      height: 80vh;
    }
    footer{
      position: absolute;
      bottom: 0;
      left: 30px;
      color: #fcfcfd;
      font-size: 12px;
    }
    img.profile {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      border: 16px solid white;
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
    p.about {
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
    svg.dark-arrow {
      color: #5d5e5d;
    }
  }

  @media (min-width: 980px) and (max-width: 1440px) {
    #home {
      width: 100%;
      justify-content: space-around;
      align-items: center;
      margin: auto;
      height: 80vh;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 80vh;
      width: 100%;
    }
    footer{
      width: 100%;
      position: absolute;
      bottom: 0;
      margin: 0px auto;
      text-align: initial;
      color: #fcfcfd;
      font-size: 12px;
    }
    img.profile {
      height: 350px;
      width: 350px;
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
    svg.dark-arrow {
      color: #5d5e5d;
    }
    p.about {
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
  @media (min-width: 1441px) {
    #home {
      width: 1440px;
      justify-content: space-around;
      align-items: center;
      margin: auto;
      height: 80vh;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 80vh;
      width: 100%;
    }
    footer{
      width: 1440px;
      position: absolute;
      bottom: 0;
      margin: 0px auto;
      text-align: initial;
      color: #fcfcfd;
      font-size: 12px;
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
    svg.dark-arrow {
      color: #5d5e5d;
    }
    p.about {
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
