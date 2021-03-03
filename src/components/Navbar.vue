<template>
  <div id="navbar">
    <nav class="d-flex align-items-center justify-content-start text-left">
      <div class="flex-grow-1">
        <router-link to="/">
          <img src="../assets/favicon.png" alt="RS" class="logo-sm m-3 animate__animated animate__bounce">
        </router-link>
      </div>
      <div class="menu-link-lg">
        <ul class="d-flex">
          <router-link to="/" class="mx-4">
            <li @mouseover="workActive = true" @mouseleave="workActive = false">
              <p :class="{ workActive }">Work</p>
              <hr :class="{ workActive }">
            </li>
          </router-link>
          <router-link to="/about" class="mx-4">
            <li @mouseover="aboutActive = true" @mouseleave="aboutActive = false">
              <p :class="{ aboutActive }">About</p>
              <hr :class="{ aboutActive }">
            </li>
          </router-link>
          <router-link to="/#" class="mx-4">
            <li @mouseover="contactActive = true" @mouseleave="contactActive = false">
              <p :class="{ contactActive }">Contact</p>
              <hr :class="{ contactActive }">
            </li>
          </router-link>
        </ul>
      </div>
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
  data () {
    return {
      workActive: false,
      aboutActive: false,
      contactActive: false
    }
  },
  components: {
    ToggleMode
  }
}
</script>

<style scoped>
  img.logo-sm{
    height: 44px;
  }

  /*Small devices ( < 576px )*/
  @media (max-width: 576px) {
  }

  /*Medium devices (tablets, > 577px < 768px )*/
  @media (min-width: 577px) and (max-width: 768px) {

  }

  /*Extra large devices (large desktops, 1200px and up)*/
  @media (min-width: 768px) {
    #navbar {
      background-color: transparent;
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
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
    p.workActive {
      margin-bottom: -3px;
    }
    p.aboutActive {
      margin-bottom: -3px;
    }
    p.contactActive {
      margin-bottom: -3px;
    }
  }
</style>
