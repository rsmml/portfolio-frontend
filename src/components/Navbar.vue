<template>
  <div id="navbar" v-if="normal">
    <nav class="d-flex align-items-center justify-content-start text-left">
      <div class="flex-grow-1">
        <router-link to="/">
          <img v-if="!this.darkMode" src="../assets/favicon.png" alt="RS" class="logo-sm m-3 animate__animated animate__bounce">
          <img v-else src="../assets/neon.png" alt="RS" class="logo-sm m-3 animate__animated animate__flash">
        </router-link>
      </div>
      <div class="menu-link-lg">
        <ul class="d-flex">
          <a href="/#" class="mx-4">
            <li @mouseover="workActive = true" @mouseleave="workActive = false">
              <p v-if="darkMode" :class="{ workActive }">Work</p>
              <p v-else :class="{ workActive }" style="color: #1e1f2b;">Work</p>
              <hr :class="{ workActive }">
            </li>
          </a>
          <div class="mx-4" @click.prevent="open()">
            <li @mouseover="aboutActive = true" @mouseleave="aboutActive = false">
              <p v-if="darkMode" :class="{ aboutActive }">About</p>
              <p v-else :class="{ aboutActive }" style="color: #1e1f2b;">About</p>
              <hr :class="{ aboutActive }">
            </li>
          </div>
          <a href="/#" class="mx-4" @click.prevent="contact()">
            <li @mouseover="contactActive = true" @mouseleave="contactActive = false">
              <p v-if="darkMode" :class="{ contactActive }">Contact</p>
              <p v-else :class="{ contactActive }" style="color: #1e1f2b;">Contact</p>
              <hr :class="{ contactActive }">
            </li>
          </a>
        </ul>
      </div>
      <div id="toggle-mode" @click="toggleMode">
        <font-awesome-icon icon="moon" v-if="this.darkMode === true"/>
        <font-awesome-icon icon="sun" v-else/>
      </div>
      <div>
        <i @click="sup" class="snes-jp-logo"></i>
      </div>
    </nav>
  </div>
</template>

<script>
import { bus } from '../main'
export default {
  name: 'Navbar',
  data () {
    return {
      workActive: false,
      aboutActive: false,
      contactActive: false,
      componentKey: 0,
      count: 0
    }
  },
  updated () {
    bus.$on('reload', (data) => {
      this.componentKey += data
    })
    // this.broken()
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    },
    normal () {
      return this.$store.state.normalMode
    }
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
      if (this.$store.state.contact === true) {
        this.$store.state.contact = false
      }
    },
    contact () {
      if (this.$store.state.modal === false) {
        this.$store.state.modal = true
      }
      this.$store.state.about = false
      this.$store.state.contact = true
    },
    counter () {
      this.count += 1
    },
    sup () {
      this.$confirm('You are about to enter in a 8-bit world').then(() => {
        this.$store.state.executed = true
        this.$store.state.normalMode = false
      })
    }
  }
}
</script>

<style scoped>
  i.snes-jp-logo:hover {
    cursor: pointer;
  }
  img.logo-sm{
    height: 44px;
  }
  a:hover, p:hover {
    cursor: pointer;
  }

  /*Small devices ( < 576px )*/
  @media (max-width: 576px) {
  }

  /*Medium devices (tablets, > 577px < 768px )*/
  @media (min-width: 577px) and (max-width: 768px) {

  }

  /*Extra large devices (large desktops, 1200px and up)*/
  @media (min-width: 768px) and (max-width: 1440px) {
    #navbar {
      background-color: transparent;
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      cursor: defaul;
      padding-right: 24px;
    }
    ul {
      list-style: none;
      margin-bottom: 0;
      position: relative;
      top: 20px;
    }
    a {
      color: #555971;
      padding-bottom: 12px;
      transition: 0.25s ease;
    }
    a:hover {
      color: #1e1f2a;
      text-decoration: none;
    }
    p {
      margin-bottom: 0px;
      color: white
    }
    hr {
      position: relative;
      top: 12px;
      border-color: transparent;
    }
    hr.workActive {
      border-style: solid;
      transition: border-color 0.3s ease;
      border-color: #e72378;
      border-width: 2px;
      margin-top: 0px;
      -webkit-transform:rotate(4deg);
    }
    hr.aboutActive {
      border-style: solid;
      transition: border-color 0.3s ease;
      border-color: #e72378;
      border-width: 2px;
      margin-top: 0px;
      -webkit-transform:rotate(-2deg);
    }
    hr.contactActive {
      border-style: solid;
      transition: border-color 0.3s ease;
      border-color: #e72378;
      border-width: 2px;
      margin-top: 0px;
      -webkit-transform:rotate(3deg);
    }
    p.workActive, p.aboutActive, p.contactActive {
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
    #toggle-mode {
      cursor: pointer;
    }
    i.nes-jp-logo {
      transform: scale(.7);
    }
  }

  @media (min-width: 1441px) {
    #navbar {
      background-color: transparent;
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      width: 1440px;
      margin: 0 auto;
      cursor: defaul;
    }
    ul {
      list-style: none;
      margin-bottom: 0;
      position: relative;
      top: 20px;
    }
    a {
      color: #555971;
      padding-bottom: 12px;
      transition: 0.25s ease;
    }
    a:hover {
      color: #1e1f2a;
      text-decoration: none;
    }
    p {
      margin-bottom: 0px;
      color: white
    }
    hr {
      position: relative;
      top: 12px;
      border-color: transparent;
    }
    hr.workActive {
      border-style: solid;
      transition: border-color 0.3s ease;
      border-color: #e72378;
      border-width: 2px;
      margin-top: 0px;
      -webkit-transform:rotate(4deg);
    }
    hr.aboutActive {
      border-style: solid;
      transition: border-color 0.3s ease;
      border-color: #e72378;
      border-width: 2px;
      margin-top: 0px;
      -webkit-transform:rotate(-2deg);
    }
    hr.contactActive {
      border-style: solid;
      transition: border-color 0.3s ease;
      border-color: #e72378;
      border-width: 2px;
      margin-top: 0px;
      -webkit-transform:rotate(3deg);
    }
    p.workActive, p.aboutActive, p.contactActive {
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
    #toggle-mode {
      cursor: pointer;
    }
    i.nes-jp-logo {
      transform: scale(.7);
    }
  }
</style>
