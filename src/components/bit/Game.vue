<template>
  <div id="game" class="animate__animated animate__flash">
    <img src="@/assets/map.png">
  </div>
</template>

<script>
export default {
  name: 'Game',
  computed: {
    bit () {
      return this.$store.state.bit
    }
  }
}
</script>

<style scoped>
  #game {
    position: absolute;
    top: 0;
    z-index: -1;
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
