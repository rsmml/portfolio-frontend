<template>
  <div id="background" :class="{ 'dark' : darkMode, 'light' : !darkMode}">
  </div>
</template>

<script>
export default {
  name: 'Background',
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style scoped>
  #background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    height: 100vh;
    width: 100%;
  }
  .dark {
    background-color: #4d4d73;
  }
  .light {
    background-color: #def5f8;
  }
</style>
