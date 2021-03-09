<template>
  <div id="review" v-if="normal">
    <div id="review-box">
      <div class="points animate__animated animate__headShake" v-if="display">
        <p class="text-review">Help me to grow! your feedback is more than welcome</p>
        <p class="text-review"><strong>what is your impression of this portfolio?</strong></p>
        <div class="faces d-flex justify-content-around align-items-center w-100">
          <div @click="click()" class="icon">
            <!-- <font-awesome-icon icon="poo" /> -->
            <p class="emogi">💩</p>
            <p>Indifferent</p>
          </div>
          <div @click="click()" class="icon">
            <!-- <font-awesome-icon icon="meh" /> -->
            <p class="emogi">😕</p>
            <p>Meh</p>
          </div>
          <div @click="click()" class="icon">
            <!-- <font-awesome-icon icon="grin-tears" /> -->
            <p class="emogi">😂</p>
            <p>Funny</p>
          </div>
          <div @click="click()" class="icon">
            <!-- <font-awesome-icon icon="grin-hearts" /> -->
            <p class="emogi">😍</p>
            <p>Creative</p>
          </div>
          <div @click="click()" class="icon">
            <!-- <font-awesome-icon icon="heart" /> -->
            <p class="emogi">❤️‍</p>
            <p>Love it</p>
          </div>
        </div>
        <div v-if="clicked" class="w-100 animate__animated animate__heartBeat">
          <p>🎉 THANK YOU 🎉</p>
        </div>
      </div>
      <div class="open" @click="open">
        <font-awesome-icon icon="comment-dots"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  data () {
    return {
      clicked: false,
      display: false
    }
  },
  methods: {
    click () {
      this.clicked = true
    },
    open () {
      this.display = !this.display
      this.clicked = false
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
