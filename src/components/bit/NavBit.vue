<template>
  <div id="navbit">
    <nav class="d-flex justify-content-between align-items-end">
      <div class="first-square">
        <p>RODRIGO</p>
        <p>{{ points }}</p>
      </div>
      <div class="second-square">
        <p><i class="nes-icon coin is-large"></i>x05</p>
      </div>
      <div class="third-square">
        <p>WORLD</p>
        <p>1-1</p>
      </div>
      <div class="fourth-square">
        <p>TIME</p>
        <p>{{ counter }}</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBit',
  data () {
    return {
      counter: 0
    }
  },
  computed: {
    points () {
      return this.$store.state.points
    }
  },
  mounted: function () {
    window.setInterval(() => {
      this.counter += 1
    }, 1000)
  }
}
</script>

<style scoped>
  #navbit {
    padding: 12px 12px 0 12px;
    font-family: 'Press Start 2P' !important;
    color: white;
    text-shadow: 2.5px 2.5px 2px black
  }
  i {
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
    #navbit {
      width: 100%;
      padding: 0 40px;
    }
  }

  @media (min-width: 1441px) {
    #navbit {
      width: 1440px;
      margin: 0 auto;
      position: absolute;
      top: 24px;
    }
  }
</style>
