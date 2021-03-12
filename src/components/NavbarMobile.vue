<template>
  <div id="nav-mobile" >
    <nav class="d-flex flex-column text-left align-items-center justify-content-start" :class="{'light': !this.darkMode}">
      <div class="text-center">
        <router-link to="/" :class="{'light': !this.darkMode}">
          <img v-if="!this.darkMode" src="../assets/favicon.png" alt="RS" class="logo-sm m-3 animate__animated animate__bounce">
          <img v-else src="../assets/neon.png" alt="RS" class="logo-sm m-3 animate__animated animate__flash">
        </router-link>
      </div>
      <div class="menu-link-lg mb-5">
        <ul class="d-flex flex-column">
          <div class="mx-4" @click.prevent="work">
            <li @mouseover="workActive = true" @mouseleave="workActive = false">
              <p v-if="darkMode" :class="{ workActive }" style="color: white;">Work</p>
              <p v-else :class="{ workActive }" style="color: #1e1f2b;">Work</p>
              <hr :class="{ workActive }">
            </li>
          </div>
          <div class="mx-4" @click.prevent="open">
            <li @mouseover="aboutActive = true" @mouseleave="aboutActive = false">
              <p v-if="darkMode" :class="{ aboutActive }" style="color: white;">About</p>
              <p v-else :class="{ aboutActive }" style="color: #1e1f2b;">About</p>
              <hr :class="{ aboutActive }">
            </li>
          </div>
          <div class="mx-4" @click.prevent="contact">
            <li @mouseover="contactActive = true" @mouseleave="contactActive = false">
              <p v-if="darkMode" :class="{ contactActive }" style="color: white;">Contact</p>
              <p v-else :class="{ contactActive }" style="color: #1e1f2b;">Contact</p>
              <hr :class="{ contactActive }">
            </li>
          </div>
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
    },
    open () {
      this.$store.state.modal = true
      this.$store.state.about = true
      this.$store.state.contact = false
      this.$store.state.workmodal = false
      this.$store.state.showNav = !this.$store.state.showNav
    },
    work () {
      this.$store.state.modal = true
      this.$store.state.about = false
      this.$store.state.contact = false
      this.$store.state.workmodal = true
      this.$store.state.showNav = !this.$store.state.showNav
    },
    contact () {
      this.$store.state.modal = true
      this.$store.state.about = false
      this.$store.state.contact = true
      this.$store.state.workmodal = false
      this.$store.state.showNav = !this.$store.state.showNav
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
  img.logo-sm {
    height: 40px !important;
  }
  img.logo-sm:hover {
    cursor: pointer !important;
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
 /* ul p {
    color: white;
  }*/
</style>
