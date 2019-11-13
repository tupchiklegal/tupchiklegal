<template>
<div>

  <div id="home" class="container-fluid">
    <div class="row h-100">
      <div id="gallery-content" class="p-0 col-sm-12 h-100">
        
        <div v-if="bg1Active" :style="{'background-image': 'url(' + require(`./../assets/${images[bg1Index]}`) + ')'}" id="gallery-image-1"></div>

        <transition v-on:after-enter="afterGalleryFadeIn" enter-active-class="animated fadeIn">
          <div v-if="bg2Active" :style="{'background-image': 'url(' + require(`./../assets/${images[bg2Index]}`) + ')'}" id="gallery-image-2"></div>
        </transition>


        <!-- <div id="gallery-image-footer"></div> -->

    <!-- <div class="bg-dark">
      <b-container class="text-right text-white p-1">
        <a class="text-light small" href="#">Contact Us (716) 856-5556</a>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-envelope"></a>

      </b-container>
    </div> -->
    <b-navbar toggleable="lg" type="dark" class="fixed-top">
      <b-container>
        <b-navbar-brand href="#">
          <router-link to="/">
            <img src="./../assets/logo_text.png" height="80" alt="logo" class="mt-1 mb-1 mr-4">
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">ABOUT</router-link>
            </li>
            <b-nav-item-dropdown text="PRACTICE AREAS" right>
              <li>
                <router-link class="dropdown-item" to="/practice/divorce-seperation">
                  Divorce & Seperation
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/practice/high-asset">
                  High-Asset / High Net Worth Divorce Representation
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/practice/child-custody">
                  Child Custody & Visitation
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/practice/pre-marriage">
                  Pre-Marriage Planning
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/practice/modifications">
                  Modifications of Divorce Judgment
                </router-link>
              </li>
                      
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>

        
        <div class="container" style="padding-top: 325px; padding-bottom: 400px;">
          <div class="row">
            <div class="col-sm-9 text-light">

                <h1 class="display-4" style="font-weight: 700">HOLISTIC LEGAL RESOLUTION</h1>
                <p style="font-size:30px;">
                  We offer clients personalized attention and one-on-one service. You will never get lost in the shuffle.
                </p>

                <button class="btn btn-primary mr-4">Learn More</button>
                <button class="btn btn-secondary">Contact Us</button>

            </div>
          </div>
        </div>


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
  background: linear-gradient(90deg, rgba(black, .92) 0%, rgba(black, .7) 55%, rgba(black, .1) 100%), 
  linear-gradient(180deg, rgba(black, .5) 0%, rgba(black, 0) 40%, rgba(black, 0) 100%);
}

.nav-link {
  color: white !important;
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