<template>
  <div id="bit">
    <NavBit />
    <Game v-if="play"/>
    <div v-else class="middle animate__animated animate__flash">
      <section class="message-list d-flex justify-content-center align-items-center">
        <i class="nes-octocat animate"></i>
        <section class="message -left">
          <div class="nes-balloon from-left">
            <p>Shall we play?</p>
          </div>
        </section>
      </section>
    </div>
    <Dialog v-if="dialog"/>
    <div id="options" v-if="!dialog" class="d-flex">
      <div class="text-center flex-grow-1">
        <button type="button" class="nes-btn is-primary" @click="playme('left')"> < </button>
        <button type="button" class="nes-btn is-primary" @click="playme('right')"> > </button>
      </div>
      <p @click="openDialog" class="nes-btn is-primary">Options</p>
    </div>
  </div>
</template>

<script>
import NavBit from './bit/NavBit'
import Dialog from './bit/Dialog'
import Game from './bit/Game'

export default {
  name: 'Bit',
  data () {
    return {
      game: false
    }
  },
  components: {
    NavBit,
    Dialog,
    Game
  },
  computed: {
    bit () {
      return this.$store.state.bit
    },
    play () {
      return this.$store.state.play
    },
    dialog () {
      return this.$store.state.dialog
    }
  },
  created () {
    this.setBackground()
  },
  methods: {
    setBackground () {
      if (this.bit) { document.body.style.backgroundcolor = '#222a2f' }
    },
    openDialog () {
      this.$store.state.dialog = true
    },
    playme (data) {
      this.$root.$refs.Game.playme(data)
    }
  }
}
</script>

<style scoped>
  @media (min-width: 768px) and (max-width: 1440px) {
    #bit {
      font-family: 'Press Start 2P' !important;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    #options {
      width: 100%;
      height: max-content;
      position: absolute;
      bottom: 0;
      text-align: end;
      color: white;
    }
  }

  @media (min-width: 1441px) {
    #bit {
      font-family: 'Press Start 2P' !important;
      width: 1440px;
      margin: 0 auto;
    }
    #options {
      width: 1440px;
      height: max-content;
      position: absolute;
      bottom: 0;
      text-align: end;
      color: white;
    }
    .middle {
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content {
      position: absolute;
      top: 0;
      z-index: -1;
    }
  }
</style>
