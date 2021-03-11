<template>
  <div v-if="contact" id="contact" class="animate__animated animate__fadeIn">
    <div class="left-card">
      <div>
        <p class="contact">Contact</p>
      </div>
      <h1>Let's have a talk ☕</h1>
      <p>Fill up the form and I will get back to you. <br>
      You can also contact me via E-mail or LinkedIn</p>
      <div class="d-flex justify-content-start align-items-center my-4">
        <font-awesome-icon icon="paper-plane" class="my-0 mr-4"/>
        <a href = "mailto: rodrigosommacal@gmail.com?" target="_blank" class="flex-grow-1">rodrigosommacal@gmail.com</a>
        <p class="m-0 ml-4">copy </p>
      </div>
      <div class="d-flex justify-content-start align-items-center my-4">
        <font-awesome-icon class="my-0 mr-4" :icon="['fab', 'linkedin-in']" />
        <a href="https://www.linkedin.com/in/rodrigosommacal" target="_blank">LinkedIn</a>
      </div>
    </div>
    <div class="right-card d-flex flex-column align-items-end">
      <form class="flex-grow-1 w-100">
        <div class="form-group d-flex justify-content-between align-items-center">
          <md-field class="mr-3">
            <label>Name</label>
            <md-input v-model="name" placeholder="Jhon"></md-input>
          </md-field>
          <md-field>
            <label>Last Name</label>
            <md-input v-model="lastName" placeholder="Smith"></md-input>
          </md-field>
        </div>
        <div class="form-group d-flex justify-content-between align-items-center">
          <md-field class="mr-3">
            <label>Company</label>
            <md-input v-model="company" placeholder="Google Inc"></md-input>
          </md-field>
          <md-field>
            <label>E-mail</label>
            <md-input v-model="email" placeholder="jhonsmith@gmail.com"></md-input>
          </md-field>
        </div>
        <md-field>
          <label>Message</label>
          <md-textarea v-model="message" md-autogrow></md-textarea>
        </md-field>
      </form>
      <md-button class="md-raised">Send</md-button>
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
      copmany: '',
      email: '',
      message: ''
    }
  },
  computed: {
    contact () {
      return this.$store.state.contact
    }
  }
}
</script>

<style scoped>
  @media (max-width: 767px) {

  }
  @media (min-width: 768px) and (max-width: 1440px) {
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
  }
  @media (min-width: 1441px) {

  }
</style>
