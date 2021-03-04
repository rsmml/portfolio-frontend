<template>
  <div id="about" class="animate__animated animate__slideInLeft">
    <div class="close-icon" @click="close()">
      <font-awesome-icon icon="times"/>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 card-left">
        <h1 class="py-4">Hi There!</h1>
        <h2 class="text-left pb-4">Thanks for passing by 🎉</h2>
        <p>
          Soo... A bit about myself 👨‍💻.
          <br>
          I'm {{ this.name }}, a {{ 29 }} years old Italian-Argentinian living in Germany.
          <br>
          I am an ambitious and motivated <strong>Full Stack Developer</strong> and <strong>Architect</strong>.
          I moved to Berlin with the ambition to develop my career, with the goal to work in the tech field. I found coding and product management as a new direction.
          <br>
          I love to resolve design problems as well as create smart user interface and user experience.
          I like to be in all aspecs of web development, working in front-end as solving complex algorithms.
        </p>
      </div>
      <div class="col-12 col-lg-6 card-right">
        <h1>Lets Talk</h1>
        <h2>Thanks for passing by 🎉</h2>
        <p>

        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: 'Rodrigo Sommacal',
      age: '29'
    }
  },
  methods: {
    close () {
      this.$store.state.about = false
    }
  }
}
</script>

<style scoped>
  #about {
    position: absolute;
    top: 10%;
    left: 10%;
    height: 80vh;
    width: 80%;
    background-color: #f3f3f3;
    box-shadow: 0 2px 50px #1e1f2b;
  }
  svg.fa-times {
    color: #1e1f2b;
    height: 45px !important;
    width: 32px !important;
  }
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1000;
  }
  p {
    color: #1e1f2b;
    text-align: start;
    text-justify: inter-word;
    padding: 40px;
  }
  h2{
    padding-left: 40px;
  }
</style>
