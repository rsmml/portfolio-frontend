<template>
  <div id="navbar">
    <nav>I'm the navbar</nav>
     <font-awesome-icon icon="spinner" />
     <button @click="click" class="btn btn-primary">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    click () {
      this.$alert('Hello Vue Simple Alert.')
    }
  }
}
</script>

<style scoped>

</style>
