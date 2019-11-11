<template>
<div>

  <div id="home" class="container-fluid">
    <div class="row h-100">
      <div id="gallery-content" class="col-sm-12 h-100">
        
        <div v-if="bg1Active" :style="{'background-image': 'url(' + require(`./../assets/${images[bg1Index]}`) + ')'}" id="gallery-image-1"></div>

        <transition v-on:after-enter="afterGalleryFadeIn" enter-active-class="animated fadeIn">
          <div v-if="bg2Active" :style="{'background-image': 'url(' + require(`./../assets/${images[bg2Index]}`) + ')'}" id="gallery-image-2"></div>
        </transition>


        <!-- <div id="gallery-image-footer"></div> -->

        <div class="container" style="padding-top: 250px; padding-bottom: 350px;">
          <div class="row">
            <div class="col-sm-9 text-light">

                <h1 class="display-3" style="font-weight: 700">HOLISTIC LEGAL RESOLUTION</h1>
                <p style="font-size:30px;">
                  We offer clients personalized attention and one-on-one service. You will never get lost in the shuffle.
                </p>

                <button class="btn btn-primary mr-4">Learn More</button>
                <button class="btn btn-secondary">Contact Us</button>

            </div>
          </div>
        </div>

        <!-- <br> -->
  
        <!-- <div class="row mt-5">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <button v-on:click="showContact" class="btn btn-primary shadow-lg pt-3 pb-3 pl-5 pr-5 m-1"><h4>Contact Us</h4></button>
            <router-link to="about">
              <button class="btn btn-secondary pt-3 pb-3 pl-5 pr-5 m-1"><h4>Learn More</h4></button>
            </router-link>
          </div> 
          <div class="col-sm-3"></div>      
        </div> -->

        <!-- <br> -->
    
        <!-- <div class="row mt-5">
          <div class="col-sm-3"></div>
          <div class="col-sm-6 bg-light rounded-lg shadow-lg" id="contact-display" style="height: 200px;">
            <div class="text-dark">
                <transition name="contact-transition"  enter-active-class="animated flipInX">
                  <component :is="contact"></component>
                </transition>
            </div>
          </div>     
          <div class="col-sm-3"></div>      
        </div> -->

      </div>
    </div>
  </div>
  
  <div class="text-center quote-container mt-5 d-flex flex-wrap p-3 justify-content-around">
    <quote name="Divorce & Seperation" link="/practice/divorce-seperation"></quote>
    <quote name="High-Asset / High Net Worth Divorce Representation" link="/practice/high-asset"></quote>
    <quote name="Child Custody & Visitation" link="/practice/child-custody"></quote>
    <quote name="Pre-Marriage Planning" link="/practice/pre-marriage"></quote>
    <quote name="Modifications of Divorce Judgment" link="/practice/modifications"></quote>
  </div>


</div>
</template>

<script>
import quote from './quote.vue'
import ContactInfo from './contact/ContactInfo.vue';
import ContactQuote from './contact/ContactQuote.vue';


export default {
  components: {
      quote,  
      ContactInfo,
      ContactQuote
  },
  created () {
    window.setInterval(this.incrementGallery, 5000)
  },
  methods: {
    showContact() {
      this.contact = ContactInfo
    },
    incrementGallery() {
      this.bg2Active = true
    },
    afterGalleryFadeIn() {
      this.bg1Index = this.bg2Index;
      this.bg2Index = this.bg2Index == this.images.length - 1 ? 0 : this.bg2Index + 1;
      this.bg1Active = true;
      this.bg2Active = false;
    }
   },
  data() {
    return {
      bg1Index: 0,
      bg2Index: 1,
      bg1Active: true,
      bg2Active: false,
      images: [
        // "stock4.jpg",
        // "stock3.jpg",
        "stock8.jpg"

      ],

      contact: ContactQuote
    }
  }
}
</script>

<style lang="scss">
.card-main h1 {
  // font-family: 'Times New Roman', Times, serif !important;
}
#home {
  // height: 650px;  
}
#gallery-content {
  background: linear-gradient(90deg, rgba(black, .9) 0%, rgba(black, .7) 40%, rgba(black, .1) 100%);
}

#gallery-image-1 { z-index: -2; }
#gallery-image-2 { z-index: -1; }

#gallery-image-1, #gallery-image-2 {
  position: absolute; 
  left: 0; 
  right: 0; 
  height: 100%; 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 10%;
}

#gallery-image-footer {
  position: absolute; 
  left: 0; 
  right: 0; 
  height: 20%; 
  bottom: 0; 
  background-color: white;
}

#h1-quote {
  // z-index: 100;
  // text-shadow: 2px 4px 9px rgba(black, .5);
}
#gallery-content {
  height: 923px;
}

</style>