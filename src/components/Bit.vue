<template>
  <div id="bit">
    <NavBit />
    <Game v-if="play"/>
    <div v-else class="animate__animated animate__flash">
    <section class="message-list d-flex justify-content-center align-items-center">
      <i class="nes-kirby"></i>
      <section class="message -left">
        <div class="nes-balloon from-left">
          <p>Shall we play?</p>
        </div>
      </section>
    </section>
    </div>
    <Dialog v-if="dialog"/>
    <div id="options" @click="openDialog" v-if="!dialog">
      <p>Options</p>
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
    }
  }
}
</script>

<style scoped>
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
    color: white
  }
  #options p {
    /*color: white;*/
  }
  .content {
    position: absolute;
    top: 0;
    z-index: -1;
  }
</style>
