<template>
  <div id="nav-mobile" >
    <nav class="d-flex flex-column text-left">
      <div class="text-center">
        <router-link to="/">
          <img src="../assets/favicon.png" alt="RS" class="logo-sm m-3">
        </router-link>
      </div>
      <div class="menu-link-lg flex-grow-1">
        <ul class="d-flex flex-column">
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
  name: 'NavbarMobile',
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
  img {
    height: 40px;
  }
  nav {
    width: 150px;
    z-index: 100;
    height: 100vh;
    padding: 32px 12px;
    background-color: #adafae;
    transition: 1s transform cubic-bezier(0,.12,.14.1);
  }
  #nav-mobile {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
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
</style>
