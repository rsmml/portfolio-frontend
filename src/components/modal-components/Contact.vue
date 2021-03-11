<template>
  <div v-if="contact" id="contact" class="animate__animated animate__fadeIn">

    <div v-if="!mobileView" class="left-card" :class="{ 'light' : !this.darkMode }">
      <div>
        <p class="contact">Contact</p>
      </div>
      <h1>Let's have a talk ☕</h1>
      <p>Fill up the form and I will get back to you. <br>
      You can also contact me via E-mail or LinkedIn</p>
      <div class="d-flex justify-content-start align-items-center my-4">
        <font-awesome-icon icon="paper-plane" class="my-0 mr-4"/>
        <a href = "mailto: rodrigosommacal@gmail.com?" target="_blank" class="flex-grow-1" :class="{ 'light' : !this.darkMode }" >E-mail me</a>
        <p class="m-0 ml-4 hover-cursor" v-if="!copied" @click="copy">copy e-mail</p>
        <p class="m-0 ml-4 animate__animated animate__rubberBand hover-cursor" v-if="copied">copied ✔️</p>
      </div>
      <div class="d-flex justify-content-start align-items-center my-4">
        <font-awesome-icon class="my-0 mr-4" :icon="['fab', 'linkedin-in']" />
        <a href="https://www.linkedin.com/in/rodrigosommacal" target="_blank" :class="{ 'light' : !this.darkMode }" >LinkedIn</a>
      </div>
    </div>
    <div v-if="mobileView" class="d-flex justify-content-start align-items-center">
      <div class="my-4">
        <p class="m-0 mx-3 hover-cursor" v-if="!copied" @click="copy">Copy my e-mail</p>
        <p class="m-0 mx-3 animate__animated animate__rubberBand hover-cursor" v-if="copied">copied ✔️</p>
      </div>
      <div class="my-4">
        <a href="https://www.linkedin.com/in/rodrigosommacal" target="_blank" :class="{ 'light' : !this.darkMode }" >LinkedIn</a>
      </div>
    </div>

    <div class="right-card d-flex flex-column align-items-end">
      <form class="flex-grow-1 w-100">
        <div class="form-group m-0 row">
          <md-field class="col-6 col-lg-6">
            <label>Name</label>
            <md-input v-model="name" placeholder="Jhon"></md-input>
          </md-field>
          <md-field class="col-6 col-lg-6">
            <label>Last Name</label>
            <md-input v-model="lastName" placeholder="Smith"></md-input>
          </md-field>
        </div>
        <div class="form-group m-0 row">
          <md-field class="col-12 col-lg-6">
            <label>Company</label>
            <md-input v-model="company" placeholder="Google Inc"></md-input>
          </md-field>
          <md-field class="col-12 col-lg-6">
            <label>E-mail</label>
            <md-input v-model="email" placeholder="E-mail"></md-input>
          </md-field>
        </div>
        <md-field>
          <label>Message</label>
          <md-textarea v-model="message" md-autogrow></md-textarea>
        </md-field>
      </form>
      <md-button>Send Message</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      lastName: '',
      company: '',
      email: '',
      message: '',
      copied: false
    }
  },
  computed: {
    contact () {
      return this.$store.state.contact
    },
    darkMode () {
      return this.$store.state.darkMode
    },
    mobileView () {
      return this.$store.state.mobileView
    }
  },
  methods: {
    copy () {
      this.$clipboard('rodrigosommacal@gmail.com')
      this.copied = true
    }
  }
}
</script>

<style scoped>
  @media (max-width: 767px) {
    #contact {
      position: absolute;
      width: 80vw;
      height: max-content;
      background-color: #f9fcfc;
      box-shadow: 0 2px 50px #1e1f2b;
      border-radius: 4px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      padding: 10px 20px;
    }
    a {
      color: #5d5e5d !important;
    }
    a:hover {
      cursor: pointer !important;
    }
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    #contact {
      height: inherit;
      display: flex
    }
    .left-card {
      text-align: left;
      padding: 60px 30px 60px 60px;
      color: white;
      width: 44%;
      height: inherit;
      background-color: #3c1d99;
      border-radius: 4px 8px 8px 4px;
      background-image: url(../../assets/contact-back-01.png);
      background-position: center;
      background-size: cover;
    }
    .light {
      color: #1e1f2c !important;
      background-color: #ececec !important;
    }

    a {
      color: white !important;
      text-decoration: none !important;
      transition: 0.3s ease;
    }
    a:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    p.contact {
      font-weight: bolder;
      font-size: 16px;
      border-bottom: 6px solid #dd3e83;
      padding-bottom: 6px;
      width: max-content;
    }
    .right-card {
      text-align: left;
      padding: 60px;
      width: 56%;
      height: inherit;
    }
    p.hover-cursor:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 1441px) {
    #contact {
      height: inherit;
      display: flex
    }
    .left-card {
      text-align: left;
      padding: 60px;
      color: white;
      width: 44%;
      height: inherit;
      background-color: #3c1d99;
      border-radius: 4px 8px 8px 4px;
      background-image: url(../../assets/contact-back-01.png);
      background-position: center;
      background-size: cover;
    }
    .light {
      color: #1e1f2c !important;
      background-color: #ececec !important;
    }

    a {
      color: white !important;
      text-decoration: none !important;
      transition: 0.3s ease;
    }
    a:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    p.contact {
      font-weight: bolder;
      font-size: 16px;
      border-bottom: 6px solid #dd3e83;
      padding-bottom: 6px;
      width: max-content;
    }
    .right-card {
      text-align: left;
      padding: 60px;
      width: 56%;
      height: inherit;
    }
    p.hover-cursor:hover {
      cursor: pointer;
    }
  }
</style>
