<template>
  <div id="dialog">
    <div v-if="dialogOne">
      <div class="nes-container is-dark with-title text-left">
        <p class="title"> > Hello World _</p>
        <div class="d-flex justify-content-between align-items-start">
          <p>Thou hast had a good night's sleep, I hope.
            <br>
            It looks like you found my portfolio's 8-bit vault.
            <br>
            Could you help me to go through the map?
            <br>
            You will learn more about me!
          </p>
          <div id="cross" @click="closeDialog" v-if="dialog">
            <p style="transform: rotate(45deg); font-size: 40px">+</p>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <a class="nes-btn" href="#" @click="normal">Back</a>
          <a class="nes-btn is-warning" href="#" @click="play">LETS PLAY! Get to know me</a>
          <a class="nes-btn" href="#">See my work</a>
        </div>
      </div>
    </div>
    <div v-else>
      <div  class="nes-container is-dark with-title text-left">
        <p class="title"> > My portfolio's game _</p>
        <div class="d-flex align-items-between">
          <p>Thank you for playing. Move the arrows of your keyboard
            <i class="snes-jp-logo"></i>
            <br>
            ◀ LEFT - ▶ RIGHT
            <br>
            This little journey will teach you a bit more about my past experiences.
            <br>
            Let me know how many points you have made!
            <br>
            Have fun!<i class="nes-icon is-large heart"></i>
          </p>
          <div class="d-flex flex-column justify-content-between align-items-end">
            <div id="cross" @click="closeDialog" v-if="dialog">
              <p style="transform: rotate(45deg); font-size: 40px">+</p>
            </div>
            <a class="nes-btn" href="#" @click="normal">Main page</a>
          </div>
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
      this.$store.state.dialogOne = false
    },
    normal () {
      this.$store.state.normalMode = true
      this.$store.state.dialogOne = true
      this.$store.state.executed = false
    },
    closeDialog () {
      this.$store.state.dialog = false
    }
  },
  computed: {
    dialog () {
      return this.$store.state.dialog
    },
    dialogOne () {
      return this.$store.state.dialogOne
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
  i.heart {
    margin: 0 12px 0 0 !important;
    transform: scale(1.4) !important;
    height: 23px !important;
    width: 23px !important;
    font-size: 20px !important;
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
