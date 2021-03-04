<template>
  <div id="night-mode">
    <Moon class="animate__animated animate__bounce" :class="{ 'animate__bounceOutDown' : !darkMode }" />
    <Stars class="animate__animated animate__flash" :class="{ 'animate__zoomOut' : !darkMode }" />
    <Clouds class="animate__animated animate__heartBeat" :class="{ 'animate__bounceOutDown' : !darkMode }" />
    <Mountains class="animate__animated animate__rubberBand" :class="{ 'animate__fadeOut' : !darkMode }" />
    <Lake class="animate__animated " :class="{ 'animate__fadeOut' : !darkMode, 'animate__slideInLeft' : darkMode  }" />
    <Grass class="animate__animated " :class="{ 'animate__fadeOut' : !darkMode, 'animate__slideInUp' : darkMode }" />
  </div>
</template>

<script>
import Clouds from './night/Clouds'
import Grass from './night/Grass'
import Lake from './night/Lake'
import Moon from './night/Moon'
import Mountains from './night/Mountains'
import Stars from './night/Stars'

export default {
  name: 'NightMode',
  components: {
    Clouds,
    Grass,
    Lake,
    Moon,
    Mountains,
    Stars
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
</style>
