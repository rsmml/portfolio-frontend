<template>
  <div id="modal" class="animate__animated animate__slideInLeft">
    <div class="close-icon text-right" @click="close()">
      <font-awesome-icon icon="times"/>
    </div>
    <About  v-if="about"/>
    <Work  v-if="work"/>
    <Contact  v-if="contact"/>
  </div>
</template>

<script>
import About from './modal-components/About'
import Contact from './modal-components/Contact'
import Work from './modal-components/Work'
export default {
  name: 'Modal',
  components: {
    About,
    Contact,
    Work
  },
  methods: {
    close () {
      this.$store.state.modal = false
    }
  },
  computed: {
    about () {
      return this.$store.state.about
    },
    work () {
      return this.$store.state.workmodal
    },
    contact () {
      return this.$store.state.contact
    }
  }
}
</script>

<style scoped>
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1000;
  }
  @media (max-width: 767px) {
    #modal {
      position: absolute;
      width: 80vw;
      top: 10%;
      height: max-content;
      background-color: #f9fcfc;
      box-shadow: 0 2px 50px #1e1f2b;
      border-radius: 4px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      z-index: 3;
    }
    svg.fa-times {
      color: #1e1f2b;
      height: 16px !important;
      width: 28px !important;
      font-weight: thine
    }
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    #modal {
      position: absolute;
      width: 80vw;
      height: 80vh;
      background-color: #f9fcfc;
      box-shadow: 0 2px 50px #1e1f2b;
      border-radius: 4px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      z-index: 3;
    }
    svg.fa-times {
      color: #1e1f2b;
      height: 24px !important;
      width: 32px !important;
      font-weight: thine
    }
  }
  @media (min-width: 1441px) {
    #modal {
      position: absolute;
      width: 1240px;
      height: 768px;
      background-color: #f9fcfc;
      box-shadow: 0 2px 50px #1e1f2b;
      border-radius: 4px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      z-index: 3;
    }
    svg.fa-times {
      color: #1e1f2b;
      height: 24px !important;
      width: 32px !important;
      font-weight: thine
    }
  }
</style>
