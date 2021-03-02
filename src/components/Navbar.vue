<template>
  <div id="navbar">
    <nav class="d-flex align-items-center justify-content-start text-left">
      <div class="flex-grow-1">
        <img src="../assets/favicon.png" alt="RS" class="logo-sm m-3">
      </div>
      <ul class="d-flex">
        <router-link to="/">
          <li>Work</li>
        </router-link>
        <router-link to="/">
          <li>Work</li>
        </router-link>
        <router-link to="/">
          <li>Work</li>
        </router-link>
      </ul>
      <div id="toggle-mode">
        <ToggleMode />
      </div>
    </nav>
  </div>
</template>

<script>
import ToggleMode from './ToggleMode'
export default {
  name: 'Navbar',
  components: {
    ToggleMode
  },
  methods: {
    click () {
      this.$alert('Hello Vue Simple Alert.')
    }
  }
}
</script>

<style scoped>
  img.logo-sm{
    height: 44px;
  }
</style>
