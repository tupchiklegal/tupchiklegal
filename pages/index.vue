<template>
  <div class="home">
    
    <!-- nav -->
    <Nav/>
    
    <!-- gallery -->
    <Gallery> 
      <a href="https://creativecommons.org/licenses/by-sa/3.0/" hidden >Background image 'stock8.jpg' license & source, from wikipedia 'File:Aerial photo of Buffalo, NY Skyline.jpg</a>
      <div class="container text-center text-light" style="padding-top: 250px; padding-bottom: 300px;">
        <h1 class="display-4 d-inline" style="font-weight: 700; text-decoration: underline;">
          Tupchik Legal Group
        </h1>
        <!-- <h3 class="d-inline">PLLC</h3> -->
        <p style="font-size: 25px;">
          Committed to providing high quality representation in a timely <br> and cost-efficient manner.  
          <strong> We pride ourselves on being experienced, <br> respected trial lawyers, advocates, and negotiators. </strong>
        </p>
        <a v-on:click="onScroll('about')" class="btn btn-primary" href="#" v-scroll-to="'#about'">Learn More</a>
        <a v-on:click="onScroll('contact')" class="btn btn-secondary" href="#" v-scroll-to="'#contact'">Contact Us</a>

      </div>
    </Gallery>

    <!-- about -->
    <div id="about" style="background: rgb(15,15,15)" class="pb-5 text-light">
      <div data-aos="fade" data-aos-offset="275" data-aos-duration="700" class="container text-center pb-5">
        <h2 class="roman-head">ABOUT US</h2>
        <p style="font-size: 22px;">
          <!-- When it comes to family, legal matters can be challenging, sensitive and highly volatile. 
          With Tupchik Legal, 
          you’ll find our family and matrimonial law attorneys combine compassion with practical advice to deliver caring, 
          yet effective resolutions for our clients. 
          Our goal is to successfully resolve family legal matters while minimizing cost and emotional upheaval. -->
          Tupchik Legal Group is not your typical law firm. We have earned a stellar reputation for taking on difficult, complex cases and maintain a track record of zealously and respectfully fighting for our clients. We are experienced, dogged and diligent, never backing down on behalf of our clients. We work as a team with our clients and work to maximize our clients’ objectives. Where others fail, we succeed.
        </p>
        <div id="icons" class="d-md-flex justify-content-around text-center pt-5">
          
          <!-- <div data-aos="fade-up" data-aos-duration="700" data-aos-offset="0">
            <h3>40+</h3>
            <p>Years combined experience</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="700" data-aos-offset="40">
            <h3>$</h3>
            <p>Minimal cost</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="700" data-aos-offset="80">
            <h3>100+</h3>
            <p>Cases served</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="700" data-aos-offset="120">
            <h3>24/7</h3>
            <p>Support</p>
          </div> -->

        </div>
      </div>
    </div>

    <!-- divider -->
    <div id="parallax-1" class="text-light">
      <div id="parallax-1-content" class="h-100 pt-5 pb-5">
        <div class="h-100 container pt-5 pb-5 d-flex justify-content-center align-items-center">
          <h2>BOOK A CONSULATION</h2>

            <a       
              v-on:click="onScroll('contact')"      
              class="ml-5 p-2 pl-5 pr-5"
              href="#" 
              v-scroll-to="'#contact'"
              style="color: white;border: 1px solid white; border-radius: 6px;"
            ><h2>Contact</h2></a>
          
        </div>
      </div>
    </div>

    <!-- practice areas -->
    <div id="practices" class="container text-left mt-5 mb-5 pt-5 pb-5 text-center">
      <div data-aos="fade-in" data-aos-duration="700" >
        <h2 class="roman-head font-weight-bold">AREAS OF PRACTICE</h2>
        <hr>
        <!-- <p style="font-size: 22px;">
        With over 40 combined years of experience in handling family law matters right here in Buffalo, our practice is well-seasoned in issues involving:
        </p> -->
      </div>
      <div class="d-md-flex justify-content-between mb-5 flex-wrap">
        <PracticeAreaCard 
          class="flex-fill"
          data-aos="fade-up"
          data-aos-duration="700"
          v-bind:data-aos-delay="(p.id - 1)*50"
          v-bind:key="p.id" 
          v-for="p in this.practices" 
          v-bind:link="p.link"
          v-bind:name="p.name" 
      />
      </div>

      <hr>
    </div>

    <!-- our team -->
    <div id="our-team" class="mt-5 container-fluid">

      <div class="row">
        <div id="our-team-left" class="p-5 col-sm-4 d-md-flex align-items-center justify-content-center">
          <div>
            <h2 class="roman-head text-light mb-0" style="font-weight: bold; font-size: 55px;">OUR TEAM</h2>
            <p class="text-light" style="font-size: 21px;">
              <!-- Experienced. Dedicated. Caring -->
            </p>
          </div>
        </div>
          <div class="col-sm-7 d-md-flex pt-5 pb-5 mt-5 mb-5 justify-content-around text-center">
          <PersonCard 
              data-aos="fade-left"
              data-aos-duration="700"
              :data-aos-delay="(p.id - 1) * 50"
              v-for="p in this.people" 
              :key="p.id" 
              :name="p.name"
              :pic="p.pic"
              :link="p.link"
              :description="p.description"
            />
        </div>

        <!-- <div class="col-sm-1"></div> -->
 
      </div>      
    </div>


    <span id="contact"></span>

    <!-- contact us head -->
    <div id="contact-us-head">
      <div id="contact-us-head-grad" class="h-100 pt-4 pb-4">
        <div class="container d-flex h-100 align-items-center justify-content-center">
          <div class="text-light" style="opacity: .95">
            <h2 style="font-size: 64px; font-weight: bold">CONTACT US</h2>
            <h3 style="font-size: 22px;">LOCATED IN THE HEART OF BUFFALO</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- contact us body -->
    <div id="contact-us" class="container mt-5 pt-0 mb-5 pb-5">
      <div class="row">
        <div class="col-sm-5 text-left d-flex align-items-center pt-5 pr-0">
          <Contact directions />
        </div>  
        <div class="col-sm-7">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.4660898709567!2d-78.87761998414328!3d42.88411207915516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d31249ce87a7b5%3A0x7b9abe1251803679!2s350%20Main%20St%20%232420%2C%20Buffalo%2C%20NY%2014202!5e0!3m2!1sen!2sus!4v1583794661584!5m2!1sen!2sus" 
              frameborder="0" 
              style="border:0; width: 100%; height: 100%" 
              allowfullscreen=""
            ></iframe>
        </div>
      </div>
    </div>


    <Footer />

  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Gallery from '@/components/Gallery.vue';
import PracticeAreaCard from '@/components/PracticeAreaCard.vue';
import PersonCard from '@/components/PersonCard.vue';
import Footer from '@/components/Footer.vue';
import Contact from '@/components/Contact.vue';
import AOS from 'aos';

import { practices, people } from './../store/globals.js';

export default {
  name: 'home',
  data() {
    return {
      practices,
      people
    }
  },
  components: {
    Nav,
    Gallery,
    PracticeAreaCard,
    PersonCard,
    Footer,
    Contact
  },
  created() {
    AOS.init();
  },
  methods: {
    onScroll(target) {
      history.pushState({}, '', `#${target}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/_variables.scss";

#icons {
  h3 {
    font-size: 60px;
    font-weight: bold;
    border-bottom: 1px solid $primary;
  }
}

.roman-head {
  // font-family: 'Times New Roman', Times, serif;
  font-size: 45px;
  margin-bottom: 30px;
  // text-transform:capitalize;
  // font-variant:small-caps;
  // font-weight:bold;
}
#parallax-1 {
  background-image: url("./../static/statue-1.jpg");

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // height: 175px;
  #parallax-1-content {
    background-image: linear-gradient(180deg, rgba(black, .45) 0%, rgba(black, .35) 100%);
    * {
      opacity: .95;
      font-size: 25px;
    } 
  }
}

$cutoff: 85%;
$our-team-grey: rgb(255, 249, 240);
#our-team {
  background-color: $our-team-grey;
}
#our-team-left {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: 
      // linear-gradient(100deg, rgba($primary-light,.95) 0%, rgba($primary-light,.95) $cutoff, $our-team-grey $cutoff + .2%, $our-team-grey 100%),
      // url("./../static/logo_gs.png"),
      linear-gradient(98deg, $primary-light 0%, $primary-light $cutoff, $our-team-grey $cutoff + .2%, $our-team-grey 100%);
}
@media (max-width: 768px){
  #our-team-left {
      background-repeat: no-repeat;
      background-size: cover;
      background: $primary-light;
  }
}

#contact-us-head {
  height: 250px;
  background-image: url("./../static/desk-1.jpg");
  // background-position: 0px -275px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
#contact-us-head-grad {
  background-image: linear-gradient(180deg, rgba(black, .6) 0%, rgba(black, .7) 100%);
}

.social {
  a {
    font-size: 20px;
  }
}

</style>


