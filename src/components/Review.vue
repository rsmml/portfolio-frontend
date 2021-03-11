<template>
  <div id="review" v-if="normal">
    <div id="review-box">
      <div class="points animate__animated animate__headShake" v-if="display">
        <p class="text-review">Help me to grow! your feedback is more than welcome</p>
        <p class="text-review"><strong>what is your impression of this portfolio?</strong></p>
        <div class="faces d-flex justify-content-around align-items-center w-100">
          <div @click="openInput(1)" class="icon">
            <!-- <font-awesome-icon icon="poo" /> -->
            <p class="emogi">👎</p>
            <p v-if="!clicked">Indifferent</p>
            <p v-else class="animate__animated animate__fadeIn">{{ this.one }}%</p>
          </div>
          <div @click="openInput(2)" class="icon">
            <!-- <font-awesome-icon icon="meh" /> -->
            <p class="emogi">😕</p>
            <p v-if="!clicked">Meh</p>
            <p v-else class="animate__animated animate__fadeIn">{{ this.two }}%</p>
          </div>
          <div @click="click(3)" class="icon">
            <!-- <font-awesome-icon icon="grin-tears" /> -->
            <p class="emogi">😂</p>
            <p v-if="!clicked">Funny</p>
            <p v-else class="animate__animated animate__fadeIn">{{ this.three }}%</p>
          </div>
          <div @click="click(4)" class="icon">
            <!-- <font-awesome-icon icon="grin-hearts" /> -->
            <p class="emogi">😍</p>
            <p v-if="!clicked">Creative</p>
            <p v-else class="animate__animated animate__fadeIn">{{ this.four }}%</p>
          </div>
          <div @click="click(5)" class="icon">
            <!-- <font-awesome-icon icon="heart" /> -->
            <p class="emogi">❤️‍</p>
            <p v-if="!clicked">Love it</p>
            <p v-else class="animate__animated animate__fadeIn">{{ this.five }}%</p>
          </div>
        </div>
        <div v-if="clicked" class="w-100 animate__animated animate__heartBeat">
          <p>🎉 THANK YOU 🎉</p>
        </div>
        <div v-if="indifferent" class="w-100 animate__animated animate__fadeIn">
          <form class="d-flex justify-content-between align-items-end" @submit.prevent="click(Math.floor(Math.random() * 2)+1)">
            <div class="form-group w-100 text-left">
              <label for="exampleInputEmail1">I'll like to read what you think about.</label>
              <input v-model="feedback" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Say something here.">
            </div>
            <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
          </form>
        </div>
      </div>
      <div class="open" @click="open">
        <font-awesome-icon icon="comment-dots"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Review',
  data () {
    return {
      clicked: false,
      display: false,
      indifferent: false,
      feedback: '',
      one: '',
      two: '',
      three: '',
      four: '',
      five: ''
    }
  },
  methods: {
    click (data) {
      axios.post('https://rsmml-portfolio-eu.herokuapp.com/api/v1/reviews', {
        value: data,
        feedback: this.feedback
      },
      { withCredentials: true }
      )
        .then(response => this.created(response))
        .catch(error => this.error(error))
    },
    created (response) {
      if (!response) {
        // eslint-disable-next-line
        return
      } else {
        this.clicked = true
        this.indifferent = false
        this.average()
      }
    },
    average () {
      axios.get('https://rsmml-portfolio-eu.herokuapp.com/api/v1/reviews', { withCredentials: true })
        .then(response => {
          if (response) {
            this.one = response.data.one.toFixed(0)
            this.two = response.data.two.toFixed(0)
            this.three = response.data.three.toFixed(0)
            this.four = response.data.four.toFixed(0)
            this.five = response.data.five.toFixed(0)
          }
        })
        .catch(error => console.log(error))
    },
    open () {
      this.display = !this.display
      this.clicked = false
      this.indifferent = false
    },
    openInput (data) {
      this.clicked = false
      this.indifferent = true
    }
  },
  computed: {
    normal () {
      return this.$store.state.normalMode
    }
  }
}
</script>

<style scoped>
  @media (max-width: 767px) {
    #review {
      color: #202231;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      position: absolute;
      bottom: 5%;
      padding: 0 12px;
      z-index: 1000;
    }
    #review-box {
      width: max-content;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .points {
      background: white;
      padding: 16px 22px;
      border-radius: 4px;
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-shadow: 4px 4px 16px #232638;
    }
    p {
      font-weight: bolder;
    }
    p.text-review {
      text-align: start;
      margin-bottom: 0;
    }
    svg {
      font-size: 24px;
      transition: 0.2s ease;
    }
    svg.fa-poo {
      color: #ba7446 ;
    }
    svg.fa-meh, svg.fa-grin-tears, svg.fa-grin-hearts {
      color: #666666;
    }
    svg.fa-heart {
      color: #ff032c;
    }
    p.emogi {
      font-size: 24px;
      transition: 0.2s ease;
    }
    p.emogi:hover {
      transform: scale(1.7);
    }
    .icon:hover {
      cursor: pointer;
    }
    svg:hover {
      transform: scale(1.5);
    }
    svg.fa-comment-dots {
      color: #ececec;
      font-size: 40px;
      transition: 0.3s ease;
    }
    svg.fa-comment-dots:hover {
      transform: scale(1.2);
      text-shadow: 2px 2px 4px black;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    #review {
      color: #202231;
      width: max-content;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      position: absolute;
      bottom: 5%;
      right: 0;
      padding: 0 12px;
      z-index: 1000;
    }
    #review-box {
      width: max-content;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .points {
      background: white;
      padding: 16px 22px;
      border-radius: 4px;
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-shadow: 4px 4px 16px #232638;
    }
    p {
      font-weight: bolder;
    }
    svg {
      font-size: 24px;
      transition: 0.2s ease;
    }
    svg.fa-poo {
      color: #ba7446 ;
    }
    svg.fa-meh, svg.fa-grin-tears, svg.fa-grin-hearts {
      color: #666666;
    }
    svg.fa-heart {
      color: #ff032c;
    }
    p.emogi {
      font-size: 24px;
      transition: 0.2s ease;
    }
    p.emogi:hover {
      transform: scale(1.7);
    }

    .icon:hover {
      cursor: pointer;
    }
    svg:hover {
      transform: scale(1.5);
    }
    svg.fa-comment-dots {
      color: #ececec;
      font-size: 40px;
      transition: 0.3s ease;
    }
    svg.fa-comment-dots:hover {
      transform: scale(1.2);
      text-shadow: 2px 2px 4px black;
      cursor: pointer;
    }
  }
  @media (min-width: 1441px) {
    #review {
      color: #202231;
      width: 1440px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      position: absolute;
      bottom: 5%;
      padding: 0 12px;
      z-index: 1000;
    }
    #review-box {
      width: max-content;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .points {
      background: white;
      padding: 16px 22px;
      border-radius: 4px;
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-shadow: 4px 4px 16px #232638;
    }
    p {
      font-weight: bolder;
    }
    svg {
      font-size: 24px;
      transition: 0.2s ease;
    }
    svg.fa-poo {
      color: #ba7446 ;
    }
    svg.fa-meh, svg.fa-grin-tears, svg.fa-grin-hearts {
      color: #666666;
    }
    svg.fa-heart {
      color: #ff032c;
    }
    p.emogi {
      font-size: 24px;
      transition: 0.2s ease;
    }
    p.emogi:hover {
      transform: scale(1.7);
    }
    .icon:hover {
      cursor: pointer;
    }
    svg:hover {
      transform: scale(1.5);
    }
    svg.fa-comment-dots {
      color: #ececec;
      font-size: 40px;
      transition: 0.3s ease;
    }
    svg.fa-comment-dots:hover {
      transform: scale(1.2);
      text-shadow: 2px 2px 4px black;
      cursor: pointer;
    }
  }
</style>
