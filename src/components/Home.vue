<template>
  <div id="home" class="row justify-content-around align-items-center">
    <NigthMode />
    <div class="left-box">
      <SvgTitle id="img-title"/>
      <h2 class="data my-4">FullStack Web Developer</h2>
      <button class="btn btn-primary d-flex align-items-center">
        <p class="mb-0">About Me</p>
        <font-awesome-icon icon="arrow-right" />
      </button>
    </div>
    <div class="right-box">
      <img src="@/assets/profile.png" alt="avatar" class="profile animate__animated animate__fadeIn">
    </div>
  </div>
</template>

<script>
import baffle from 'baffle'
import SvgTitle from './SvgTitle'
import NigthMode from './NigthMode'

export default {
  name: 'Home',
  data () {
    return {
      nameTitle: require('@/assets/name.svg')
    }
  },
  components: {
    SvgTitle,
    NigthMode
  },
  mounted () {
    // on mounted property start obfuscating
    let b = baffle('.data', {
      characters: '>▒█ <▓█▓/ ▓█>▒█ <<▓ ░█▓▒░ ▓░█░ <█▓ ░█▒█ ░▓▓▒',
      speed: 90
    })
    b.start()
    b.reveal(2500)
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

  @media (min-width: 768px) {
    #home {
      width: 100vw;
      height: 80vh;
    }
    img.profile {
      height: 385px;
      width: 385px;
      border-radius: 50%;
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
  }
</style>
