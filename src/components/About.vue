<template>
  <div id="about" class="animate__animated animate__slideInLeft">
    <div class="close-icon" @click="close()">
      <font-awesome-icon icon="times"/>
    </div>
    <div class="col-12 card-left">
      <div>
        <p class="about">About me</p>
      </div>
      <div>
        <h1>Rodrigo Sommacal.</h1>
        <p class="text-gray text-shadow">Hello there! My name is Rodrigo Sommacal. I'm a <strong>Full Stack Developer</strong> and Architect. I'm currently living in Berlin, DE, with the ambition to develop my career and the goal to work in the tech field.  I love to resolve problems as well as create nice user interfaces and experiences. I love all aspects of web development.</p>
        <div>
          <p class="m-0 text-small-bold">UI/UX</p>
          <p class="m-0 text-small-bold">FrontEnd</p>
          <p class="m-0 text-small-bold">BackEnd</p>
          <p class="m-0 text-small-bold">Data</p>
          <p class="m-0 text-small-bold">REST API</p>
          <p class="m-0 text-small-bold">Web Design</p>
        </div>
      </div>
      <div><h2>Skills</h2></div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex flex-column align-items-center">
          <img src="@/assets/icons/ruby-2.png" alt="" v-if="hoverOne" @mouseleave="hoverOne = false">
          <img src="@/assets/icons/ruby-1.png" alt="" v-if="!hoverOne" @mouseover="hoverOne = true">
          <p class="py-2 text-uppercase font-weight-bold background-white">Ruby</p>
        </div>
        <div class="d-flex flex-column align-items-center">
          <img src="@/assets/icons/rails-2.png" alt="" v-if="hoverTwo" @mouseleave="hoverTwo = false">
          <img src="@/assets/icons/rails-1.png" alt="" v-if="!hoverTwo" @mouseover="hoverTwo = true">
          <p class="py-2 text-uppercase font-weight-bold background-white">Rails</p>
        </div>
        <div class="d-flex flex-column align-items-center">
          <img src="@/assets/icons/vue-2.png" alt="" v-if="hoverThree" @mouseleave="hoverThree = false">
          <img src="@/assets/icons/vue-1.png" alt="" v-if="!hoverThree" @mouseover="hoverThree = true">
          <p class="py-2 text-uppercase font-weight-bold background-white">Vue</p>
        </div>
        <div class="d-flex flex-column align-items-center">
          <img src="@/assets/icons/postgres-2.png" alt="" v-if="hoverFour" @mouseleave="hoverFour = false">
          <img src="@/assets/icons/postgres-1.png" alt="" v-if="!hoverFour" @mouseover="hoverFour = true">
          <p class="py-2 text-uppercase font-weight-bold background-white">PostgreSQL</p>
        </div>
        <div class="d-flex flex-column align-items-center">
          <img src="@/assets/icons/docker-2.png" alt="" v-if="hoverFive" @mouseleave="hoverFive = false">
          <img src="@/assets/icons/docker-1.png" alt="" v-if="!hoverFive" @mouseover="hoverFive = true">
          <p class="py-2 text-uppercase font-weight-bold background-white">Docker</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: 'Rodrigo Sommacal',
      age: '29',
      hoverOne: false,
      hoverTwo: false,
      hoverThree: false,
      hoverFour: false,
      hoverFive: false
    }
  },
  methods: {
    close () {
      this.$store.state.about = false
    }
  }
}
</script>

<style scoped>
  @media (max-width: 767px) {
    img {
      height: 60px;
      width: 60px;
      transition: 0.2s ease;
    }
    img:hover {
      transform: scale(1.3);
      cursor: pointer;
    }
    #about {
      position: absolute;
      width: 80vw;
      height: 80vh;
      background-color: #f9fcfc;
      box-shadow: 0 2px 50px #1e1f2b;
      border-radius: 4px;
      /*background-image: url(../assets/back-about-01.png);*/
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
    }
    p.about {
      font-weight: bolder;
      font-size: 18px;
      border-bottom: 6px solid #dd3e83;
      padding-bottom: 8px;
      width: max-content;
    }
    .card-left {
      padding: 60px;
      width: 100%;
    }
    h1 {
      font-weight: 900;
      text-align: start;
      padding: 18px 0;
    }
    p.text-gray {
      opacity: 0.8;
      font-weight: 700;
      font-size: 18px;
    }
    p.text-small-bold {
      opacity: 0.8;
      font-weight: 700;
      font-size: 18px;
    }
    h2 {
      font-weight: 900;
      text-align: start;
      padding: 18px 0;
    }
    svg.fa-times {
      color: #1e1f2b;
      height: 24px !important;
      width: 32px !important;
      font-weight: thine
    }
    .close-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      z-index: 1000;
    }
    p {
      color: #1e1f2b;
      text-align: start;
      text-justify: inter-word;
    }
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    img {
      height: 60px;
      width: 60px;
      transition: 0.2s ease;
    }
    img:hover {
      transform: scale(1.3);
      cursor: pointer;
    }
    #about {
      position: absolute;
      width: 80vw;
      height: 80vh;
      background-color: #f9fcfc;
      box-shadow: 0 2px 50px #1e1f2b;
      border-radius: 4px;
      /*background-image: url(../assets/back-about-01.png);*/
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
    }
    p.about {
      font-weight: bolder;
      font-size: 18px;
      border-bottom: 6px solid #dd3e83;
      padding-bottom: 8px;
      width: max-content;
    }
    .card-left {
      padding: 60px;
      width: 100%;
    }
    h1 {
      font-weight: 900;
      text-align: start;
      padding: 18px 0;
    }
    p.text-gray {
      opacity: 0.8;
      font-weight: 700;
      font-size: 18px;
    }
    p.text-small-bold {
      opacity: 0.8;
      font-weight: 700;
      font-size: 18px;
    }
    h2 {
      font-weight: 900;
      text-align: start;
      padding: 18px 0;
    }
    svg.fa-times {
      color: #1e1f2b;
      height: 24px !important;
      width: 32px !important;
      font-weight: thine
    }
    .close-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      z-index: 1000;
    }
    p {
      color: #1e1f2b;
      text-align: start;
      text-justify: inter-word;
    }
  }
  @media (min-width: 1441px) {
    img {
      height: 60px;
      width: 60px;
      transition: 0.3s ease;
    }
    img:hover {
      transform: scale(1.3);
      cursor: pointer;
    }
    #about {
      position: absolute;
      width: 1240px;
      height: 768px;
      background-color: #f9fcfc;
      box-shadow: 0 2px 50px #1e1f2b;
      border-radius: 4px;
      background-image: url(../assets/back-about-01.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
    }
    p.about {
      font-weight: bolder;
      font-size: 18px;
      border-bottom: 6px solid #dd3e83;
      padding-bottom: 8px;
      width: max-content;
    }
    .card-left {
      padding: 60px;
    }
    h1 {
      font-weight: 900;
      text-align: start;
      padding: 18px 0;
    }
    p.text-gray {
      opacity: 0.8;
      font-weight: 700;
      font-size: 18px;
    }
    p.text-small-bold {
      opacity: 0.8;
      font-weight: 700;
      font-size: 18px;
    }
    h2 {
      font-weight: 900;
      text-align: start;
      padding: 18px 0;
    }
    svg.fa-times {
      color: #1e1f2b;
      height: 24px !important;
      width: 32px !important;
      font-weight: thine
    }
    .close-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      z-index: 1000;
    }
    p {
      color: #1e1f2b;
      text-align: start;
      text-justify: inter-word;
    }
    p.background-white {
      background-color: rgba(255,255,255,0.7);
      padding: 0 12px !important;
      margin: 12px;
    }
  }
</style>
