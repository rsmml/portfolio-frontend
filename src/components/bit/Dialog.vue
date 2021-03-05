<template>
  <div id="dialog">
    <div v-if="dialog">
      <div class="nes-container is-dark with-title text-left">
        <p class="title">Important Message! Must Read</p>
        <p>Hello There... Thou hast had a good night's sleep, I hope.
          <br>
          Looks like you like to test my portfolio and now something went wrong.
          <br>
          Some styleshits went missing.
          <br>
          Please select an option:
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <a class="nes-btn" href="#" @click="normal">find /normal.scss</a>
          <a class="nes-btn" href="#" @click="play">LETS PLAY! Get to know me</a>
          <a class="nes-btn" href="#">See my work</a>
        </div>
      </div>
    </div>
    <div v-else>
      <div  class="nes-container is-dark with-title text-left">
        <p class="title">Welcome to my portfolio game!</p>
        <div class="d-flex align-items-end">
          <p>Hey! thanks for playing. Please just move the arrows of your keyboard
            <i class="snes-jp-logo"></i>
            <br>
            UP - DOWN - LEFT - RIGHT
            <br>
            Every breakpoint will teach you a bit more about myself
            <br>
            Have fun!<i class="nes-icon is-large heart"></i>
          </p>
          <a class="nes-btn" href="#" @click="normal">Go back to main page</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  methods: {
    play () {
      this.$store.state.play = true
      this.$store.state.dialog = false
    },
    normal () {
      location.reload()
    }
  },
  computed: {
    dialog () {
      return this.$store.state.dialog
    }
  }
}
</script>

<style scoped>
  #dialog {
    font-family: 'Press Start 2P' !important;
    position: absolute;
    bottom: 24px;
    padding: 24px;
  }
  /*Small devices ( < 576px )*/
  @media (max-width: 576px) {
  }

  /*Medium devices (tablets, > 577px < 768px )*/
  @media (min-width: 577px) and (max-width: 768px) {
  }

  /*Extra large devices (large desktops, 1200px and up)*/
  @media (min-width: 768px) and (max-width: 1440px) {
  }

  @media (min-width: 1441px) {
    #dialog {
      width: 1440px;
      position: absolute;
      bottom: 24px;
      padding: 24px;
    }
  }
</style>
