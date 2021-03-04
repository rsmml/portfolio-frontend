<template>
  <div id="night-mode">
    <Moon class="animate__animated animate__bounce"/>
    <Stars class="animate__animated animate__flash"/>
    <Clouds class="animate__animated animate__heartBeat"/>
    <Mountains class="animate__animated animate__rubberBand"/>
    <Lake class="animate__animated animate__slideInLeft"/>
    <Grass class="animate__animated animate__slideInUp"/>
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
