<template>
  <div id="toggle-mode" class="mx-3">
    <input @change="changeMode" type="checkbox" id="toggle"/>
    <label for="toggle"></label>
  </div>
</template>

<script>
import { bus } from '../main'

export default {
  name: 'ToggleMode',
  data () {
    return {
      darkMode: localStorage.darkMode
    }
  },
  methods: {
    changeMode () {
      if (localStorage.darkMode === 'true') {
        localStorage.darkMode = 'false'
        bus.$emit('reload', 1)
      } else if (localStorage.darkMode === 'false') {
        localStorage.darkMode = 'true'
        bus.$emit('reload', 1)
      }
    }
  }
}
</script>

<style scoped>
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  label {
    position: relative;
    display: block;
    width: 64.8px;
    height: 36px;
    border-radius: 36px;
    background-color: #000839;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 0;
  }
  label:before,
  label:after {
    display: block;
    position: absolute;
    content: "";
    width: 25.92px;
    height: 25.92px;
    border-radius: 50%;
    top: 5px;
    left: 5px;
    transition: .5s ease;
  }
  label:before {
    background-color: #ffa41b;

  }

  label:after {
    background-color: #000839;
    left: -20.88px;
    transform: scale(0.00001);
  }

  input[type="checkbox"] {
    display: none;
  }
  input:checked + label {
  }
  input:checked + label:before {
    background-color: #FFF;
    transform: translateX(28.8px);
  }

  input:checked + label:after {
    transform: translateX(43.2px) scale(1);
  }
</style>
