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
    <div class="right-card">
      <form>
        <div class="form-group d-flex justify-content-between align-items-center">
          <div class="">
            <label for="formGroupExampleInput">First Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="John">
          </div>
          <div>
            <label for="formGroupExampleInput">Last Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Smith">
          </div>
        </div>
        <div class="form-group d-flex justify-content-between align-items-center">
          <div class="">
            <label for="formGroupExampleInput">Company Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Google">
          </div>
          <div>
            <label for="formGroupExampleInput">Phone Number</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="+01 234 5678 9101">
          </div>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Message</label>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
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
      color: white;
      text-decoration: none;
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
