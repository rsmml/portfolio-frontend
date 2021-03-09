<template>
  <div id="nav-mobile" >
    <nav class="d-flex flex-column text-left align-items-center" :class="{'light': !this.darkMode}">
      <div class="text-center">
        <router-link to="/" :class="{'light': !this.darkMode}">
          <img v-if="!this.darkMode" src="../assets/favicon.png" alt="RS" class="logo-sm m-3 animate__animated animate__bounce">
          <img v-else src="../assets/neon.png" alt="RS" class="logo-sm m-3 animate__animated animate__flash">
        </router-link>
      </div>
      <div class="menu-link-lg flex-grow-1">
        <ul class="d-flex flex-column">
          <router-link to="/" class="mx-4" :class="{'light': !this.darkMode}">
            <li @mouseover="workActive = true" @mouseleave="workActive = false">
              <p :class="{ workActive }">Work</p>
              <hr :class="{ workActive }">
            </li>
          </router-link>
          <router-link to="/about" class="mx-4" :class="{'light': !this.darkMode}">
            <li @mouseover="aboutActive = true" @mouseleave="aboutActive = false">
              <p :class="{ aboutActive }">About</p>
              <hr :class="{ aboutActive }">
            </li>
          </router-link>
          <router-link to="/#" class="mx-4" :class="{'light': !this.darkMode}">
            <li @mouseover="contactActive = true" @mouseleave="contactActive = false">
              <p :class="{ contactActive }">Contact</p>
              <hr :class="{ contactActive }">
            </li>
          </router-link>
        </ul>
      </div>
      <div id="toggle-mode" @click="toggleMode()">
        <font-awesome-icon icon="moon" v-if="this.darkMode === true"/>
        <font-awesome-icon icon="sun" v-else/>
      </div>
    </nav>
  </div>
</template>

<script>
import ToggleMode from './ToggleMode'
export default {
  name: 'NavbarMobile',
  data () {
    return {
      workActive: false,
      aboutActive: false,
      contactActive: false,
      count: 0
    }
  },
  components: {
    ToggleMode
  },
  methods: {
    toggleMode () {
      const el = document.body
      if (this.darkMode) {
        this.$store.state.darkMode = false
        el.style.backgroundcolor = 'white'
      } else {
        this.$store.state.darkMode = true
        el.style.backgroundcolor = '#4d4d73'
      }
    }
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style scoped>
  img {
    height: 40px;
  }
  nav {
    width: max-content;
    z-index: 100;
    height: 100vh;
    padding: 32px 12px;
    background-color: #39393b;
    transition: 1s transform cubic-bezier(0,.12,.14.1);
  }
  nav.light {
   background-color: #e9e9e9 !important;
  }
  a.light {
    color: #202231 !important;
  }
  #nav-mobile {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    z-index: 1100;
    cursor: default !important;
  }
  ul {
    list-style: none;
    margin-bottom: 0;
    position: relative;
    top: 20px;
    padding-left: 0
  }
  li {
    width: max-content;
  }
  a {
    color: #e9e9e9;
    padding-bottom: 12px;
    transition: 0.25s ease;
  }
  a:hover {
    transform: scale(1.1);
    text-decoration: none;
    cursor: pointer !important;
  }
  p {
    margin-bottom: 0px;
  }
  hr {
    position: relative;
    top: 0px;
    border-color: transparent;
  }
  hr.workActive {
    border-style: solid;
    transition: border-color 0.3s ease;
    border-color: #e72378;
    border-width: 2px;
    -webkit-transform:rotate(4deg);
  }
  hr.aboutActive {
    border-style: solid;
    transition: border-color 0.3s ease;
    border-color: #e72378;
    border-width: 2px;
    -webkit-transform:rotate(-2deg);
  }
  hr.contactActive {
    border-style: solid;
    transition: border-color 0.3s ease;
    border-color: #e72378;
    border-width: 2px;
    -webkit-transform:rotate(3deg);
  }
  p.workActive {
    margin-bottom: -3px;
  }
  p.aboutActive {
    margin-bottom: -3px;
  }
  p.contactActive {
    margin-bottom: -3px;
  }
  svg.fa-moon {
    color: white;
    font-size: 24px;
    margin-right: 24px;
    transition: 2s ease;
  }
  svg.fa-sun {
    color: #1e1f2b;
    font-size: 24px;
    margin-right: 24px;
    transition: 2s ease;
  }
</style>
