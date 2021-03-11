<template>
  <div id="work" class="animate__animated animate__fadeIn">
    <div>
      <p class="my-work">My Work</p>
    </div>
    <div class="d-flex justify-content-start align-items-center">
      <p class="mr-4 toggle" @click="openWorkA" :class="{ 'active' : workA }">2020</p>
      <p class="mr-4 toggle" @click="openWorkB" :class="{ 'active' : workB }">2021</p>
      <p class="mr-4 toggle">...</p>
    </div>
    <WorkA v-if="workA"/>
    <WorkB v-if="workB"/>
  </div>
</template>

<script>
import WorkA from './works/WorkA'
import WorkB from './works/WorkB'

export default {
  name: 'Work',
  components: {
    WorkA,
    WorkB
  },
  data () {
    return {
      workA: false,
      workB: true
    }
  },
  methods: {
    openWorkA () {
      this.workA = true
      this.workB = false
    },
    openWorkB () {
      this.workA = false
      this.workB = true
    }
  }
}
</script>

<style scoped>
  @media (max-width: 767px) {
    #work {
      padding: 20px;
    }
    p.my-work {
      font-weight: bolder;
      font-size: 12px;
      border-bottom: 4px solid #dd3e83;
      padding-bottom: 4px;
      width: max-content;
    }
    p.active {
      color: #ff218e !important;
      -webkit-text-stroke-width: 0 !important;
      -webkit-text-stroke-color: transparent !important;
    }
    p.toggle {
      font-size: 30px;
      color: #232638;
      cursor: pointer;
      transition: 0.3s ease;
    }
    p.toggle:hover {
      color: #ff218e;
      opacity: 0.7;
      transform: scale(1.05);
    }
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    #work {
      padding: 60px;
    }
    p.my-work {
      font-weight: bolder;
      font-size: 16px;
      border-bottom: 6px solid #dd3e83;
      padding-bottom: 6px;
      width: max-content;
    }
    p.active {
      color: #ff218e !important;
      -webkit-text-stroke-width: 0 !important;
      -webkit-text-stroke-color: transparent !important;
    }
    p.toggle {
      font-size: 60px;
      color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
      cursor: pointer;
      transition: 0.3s ease;
    }
    p.toggle:hover {
      color: #ff218e;
      opacity: 0.7;
      transform: scale(1.05);
      -webkit-text-stroke-width: 0 !important;
      -webkit-text-stroke-color: transparent !important;
    }
  }
  @media (min-width: 1441px) {
    #work {
      padding: 60px;
    }
    p.my-work {
      font-weight: bolder;
      font-size: 16px;
      border-bottom: 6px solid #dd3e83;
      padding-bottom: 6px;
      width: max-content;
    }
    p.active {
      color: #ff218e !important;
      -webkit-text-stroke-width: 0 !important;
      -webkit-text-stroke-color: transparent !important;
    }
    p.toggle {
      font-size: 60px;
      color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
      cursor: pointer;
      transition: 0.3s ease;
    }
    p.toggle:hover {
      color: #ff218e;
      opacity: 0.7;
      transform: scale(1.05);
      -webkit-text-stroke-width: 0 !important;
      -webkit-text-stroke-color: transparent !important;
    }
  }
</style>
