<template>
<div>

  <div id="home" class="container-fluid">
    <div class="row h-100">
      <div id="gallery-content" class="text-center col-sm-12 h-100 p-5">

        <br>

        <h1 id="h1-quote" class="text-light font-weight-bold display-4">
        HOLISTIC LEGAL RESOLUTION
        </h1>

        <br>

        <div class="row mt-5">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <button v-on:click="test" class="btn btn-primary pt-3 pb-3 pl-5 pr-5"><h4>Contact Us</h4></button>
          </div> 
          <div class="col-sm-3"></div>      
        </div>

        <br>
    
        <div class="row mt-5">
          <div class="col-sm-3"></div>
          <div class="col-sm-6 bg-light rounded-lg shadow-lg" style="height: 150px;">
            <div class="text-dark p-5">
                <transition name="contact-transition"  enter-active-class="animated flipInX">
                  <component :is="contact"></component>
                </transition>
            </div>
          </div>     
          <div class="col-sm-3"></div>      
        </div>
      </div>
    </div>
  </div>
  

  <div class="text-center quote-container">
    <quote></quote>
    <quote></quote>
    <quote></quote>
    <quote></quote>
    <quote></quote>
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
  methods: {
    test() {
      this.contact = ContactInfo
    }
  },
  data() {
    return {
      contact: ContactQuote
    }
  }
}
</script>

<style>

#home {
  background-image: url("./../assets/stock3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0%;
}
#h1-quote {
  text-shadow: 2px 4px 5px rgba(black, .15);
}
#gallery-content {
  height: 923px;
}
</style>