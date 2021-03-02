<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <h2>What's on it:</h2>
    <ul>
      <li>A Simple Navbar</li>
      <li>FontAwesome</li>
      <li>Bootstrap</li>
      <li>Axios</li>
      <li>Vuex</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to this Vue.js Template'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
