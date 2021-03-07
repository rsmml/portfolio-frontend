<template>
  <div id="game-me" class="animate__animated animate__flash">
    <div id="player" class="game-board">
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div id="30" class="box"></div>

      <div class="wall"></div>
      <div class="wall"></div>
      <!-- 20 -->
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div id="29" class="box"></div>
      <div id="28" class="box"></div>

      <div class="wall"></div>
      <!-- 40 -->
      <div id="1" class="box active"></div>
      <div id="2" class="box"></div>
      <div id="3" class="box"></div>
      <div id="4" class="box"></div>
      <div id="5" class="box"></div>
      <div id="6" class="box"></div>
      <div id="7" class="box"></div>
      <div id="8" class="box"></div>
      <div id="9" class="box"></div>
      <div id="10" class="box"></div>
      <div id="11" class="box"></div>
      <div id="12" class="box"></div>

      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div id="27" class="box"></div>
      <div id="26" class="box"></div>
      <!-- 60 -->
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div class="wall"></div>

      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div id="13" class="box"></div>
      <div id="14" class="box"></div>

      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div id="25" class="box"></div>
      <!-- 80 -->
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div id="15" class="box"></div>

      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div id="22" class="box"></div>
      <div id="23" class="box"></div>
      <div id="24" class="box"></div>
      <!-- 100 -->
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>
      <div class="wall"></div>

      <div id="16" class="box"></div>
      <div id="17" class="box"></div>
      <div id="18" class="box"></div>
      <div id="19" class="box"></div>
      <div id="20" class="box"></div>
      <div id="21" class="box"></div>
    </div>
  </div>
</template>

<script>
// import { ctx, tileW, tileH, mapW, mapH, currentSecond, frameCount, framesLastSecond } from './variables.js'
export default {
  name: 'Game',
  data () {
    return {
      id: 1
    }
  },
  computed: {
    bit () {
      return this.$store.state.bit
    },
    points () {
      return this.$store.state.points
    }
  },
  created () {
    this.move()
  },
  methods: {
    move () {
      window.addEventListener('keydown', (e) => {
        const player = document.querySelector(`#player .active`)
        if (e.key === 'ArrowRight') {
          this.id += 1
          var next = document.getElementById(`${this.id}`)
          if (next) {
            next.classList.add('active')
            player.classList.remove('active')
            if (player.id === '29') {
              this.$alert(`Woow you made ${this.points} points`)
            }
            if (player.id === '1') {
              this.$store.state.points += Math.floor(Math.random() * 101)
              this.$alert(`I moved to Berlin`)
            } else if (player.id === '6') {
              this.$store.state.points += Math.floor(Math.random() * 51)
              this.$alert(`I Learn how to code`)
            } else if (player.id === '16') {
              this.$store.state.points += Math.floor(Math.random() * 401)
              this.$alert(`I did my first App`)
            } else if (player.id === '25') {
              this.$store.state.points += Math.floor(Math.random() * 1001)
              this.$alert(`I started to work as a teacher assistant at LW`)
            }
          }
        } else if (e.key === 'ArrowLeft') {
          this.id -= 1
          var prev = document.getElementById(`${this.id}`)
          if (prev) {
            prev.classList.add('active')
            player.classList.remove('active')
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  #game-me {
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url(../../assets/map.png);
    background-size: contain;
    width: 1440px;
    height: 100vh;
    background-repeat: no-repeat;
  }
  .game-board {
    display: grid;
    grid-template-columns: repeat(20, 70px);
    margin-top: 140px;
  }
  canvas {
    margin-top: 140px;
    width: 1440px;
    height: 100vh;
  }
  .box {
    height: 70px;
    width: 70px;
    /*background-color: rgba(216, 39, 102, 0.4);
    border: 2px solid black;*/
  }
  .wall {
    height: 70px;
    width: 70px;
    /*background-color: rgba(0, 0, 0, 0.4);*/
    /*border: 2px solid black;*/
  }
  #player div.active {
    background-image: url(../../assets/mebit.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
  img {
    width: 100%;
  }
  @media (max-width: 576px) {
  }

  /*Medium devices (tablets, > 577px < 768px )*/
  @media (min-width: 577px) and (max-width: 768px) {
  }

  /*Extra large devices (large desktops, 1200px and up)*/
  @media (min-width: 768px) and (max-width: 1440px) {
  }

  @media (min-width: 1441px) {
    img {
      width: 1440px;
    }
  }
</style>
