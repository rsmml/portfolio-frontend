<template>
  <div id="nigth-mode">
    <Moon class="animate__animated animate__bounce"/>
    <Stars class="animate__animated animate__flash"/>
    <Clouds class="animate__animated animate__heartBeat"/>
    <Mountains class="animate__animated animate__rubberBand"/>
    <Lake class="animate__animated animate__slideInLeft"/>
    <Grass class="animate__animated animate__slideInUp"/>
  </div>
</template>

<script>
import Clouds from './nigth/Clouds'
import Grass from './nigth/Grass'
import Lake from './nigth/Lake'
import Moon from './nigth/Moon'
import Mountains from './nigth/Mountains'
import Stars from './nigth/Stars'

export default {
  name: 'NigthMode',
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
  #nigth-mode {
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.3;
  }
</style>
