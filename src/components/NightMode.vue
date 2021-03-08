<template>
  <div id="night-mode">
    <Moon id="moon" class="animate__animated animate__bounce" :class="{ 'animate__bounceOutDown' : !darkMode }" />
    <Stars class="animate__animated animate__flash" :class="{ 'animate__zoomOut' : !darkMode }" />
    <Clouds class="animate__animated animate__heartBeat" :class="{ 'animate__bounceOutDown' : !darkMode }" />
    <Mountains class="animate__animated animate__rubberBand" :class="{ 'animate__fadeOut' : !darkMode }" />
    <DMountains v-if="!darkMode" class="animate__animated animate__rubberBand" :class="{ 'animate__fadeOut' : darkMode }" />
    <Lake class="animate__animated " :class="{ 'animate__fadeOut' : !darkMode, 'animate__slideInLeft' : darkMode  }" />
    <DLake v-if="!darkMode" class="animate__animated " :class="{ 'animate__fadeOut' : darkMode, 'animate__slideInLeft' : !darkMode  }" />
    <Grass class="animate__animated " :class="{ 'animate__fadeOut' : !darkMode, 'animate__slideInUp' : darkMode }" />
    <DGrass v-if="!darkMode" class="animate__animated " :class="{ 'animate__fadeOut' : darkMode, 'animate__slideInUp' : !darkMode }" />
  </div>
</template>

<script>
import Clouds from './night/Clouds'
import Grass from './night/Grass'
import Lake from './night/Lake'
import Moon from './night/Moon'
import Mountains from './night/Mountains'
import Stars from './night/Stars'
import DGrass from './light/DGrass'
import DLake from './light/DLake'
import DMountains from './light/DMountains'

export default {
  name: 'NightMode',
  components: {
    Clouds,
    Grass,
    Lake,
    Moon,
    Mountains,
    Stars,
    DGrass,
    DLake,
    DMountains
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style scoped>
  #night-mode {
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.6;
  }
  @media (max-width: 767px) {
    #moon {
      opacity: 0;
    }
  }
</style>
