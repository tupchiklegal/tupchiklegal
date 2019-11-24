<template>
  <div class="home">
    
    <!-- nav -->
    <Nav/>
    
    <!-- gallery -->
    <Gallery>
      <div class="container text-left text-light" style="padding-top: 352px; padding-bottom: 300px;">
        <h1 class="display-4" style="font-weight: 700">
          HOLISTIC LEGAL RESOLUTION
        </h1>
        <p style="font-size:30px;">
          We offer clients personalized attention and one-on-one service. <br> You will never get lost in the shuffle.
        </p>
        <button class="btn btn-primary mr-4">Learn More</button>
        <button class="btn btn-secondary">Contact Us</button>
      </div>
    </Gallery>

    <!-- about -->
    <div style="background: rgb(15,15,15)" class="pb-5 text-light">
      <div data-aos="fade" data-aos-offset="275" data-aos-duration="700" class="container text-center pb-5">
        <h2 class="roman-head">FAMILY & MATRIMONIAL LAW</h2>
        <p style="font-size: 22px;">
          When it comes to family, legal matters can be challenging, sensitive and highly volatile. 
          With Tupchik Legal, 
          you’ll find our family and matrimonial law attorneys combine compassion with practical advice to deliver caring, 
          yet effective resolutions for our clients. 
          Our goal is to successfully resolve family legal matters while minimizing cost and emotional upheaval.
        </p>
        <div id="icons" class="d-flex justify-content-around text-center pt-5">
          
          <div data-aos="fade-up" data-aos-duration="700" data-aos-offset="0">
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
          </div>

        </div>
      </div>


    </div>

    <!-- divider -->
    <div id="parallax-1" class="text-light">
      <div id="parallax-1-content" class="h-100 pt-5 pb-5">
        <div class="h-100 container pt-5 pb-5 d-flex justify-content-center align-items-center">
          <h2>BOOK A CONSULATION</h2>
          <a 
            href=""
            class="ml-5 p-2 pl-5 pr-5"
            style="color: white;border: 1px solid white; border-radius: 6px;"
          ><h2>Contact</h2></a>
        </div>
      </div>
    </div>

    <!-- practice areas -->
    <div class="container text-left mt-5 mb-5 pt-5 pb-5 text-center">
      <div data-aos="fade-in" data-aos-duration="700" >
        <h2 class="roman-head font-weight-bold">PRACTICES</h2>
        <p style="font-size: 22px;">
          Short explaination of practice areas or other information. The rest of this text is temp filler. 
          With Tupchik Legal, you’ll find our family and matrimonial law attorneys combine compassion with practical advice to deliver caring.
        </p>
      </div>
      <div class="d-flex justify-content-between mt-5 mb-4">
        <PracticeAreaCard data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" name="Divorce & Separation"/>
        <PracticeAreaCard data-aos="fade-up" data-aos-duration="700" data-aos-delay="150" name="High-Asset / High Net Worth Divorce Representation"/>
        <PracticeAreaCard data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" name="Child Custody & Visitation" />
        <PracticeAreaCard data-aos="fade-up" data-aos-duration="700" data-aos-delay="50" name="Pre-Marriage Planning" />
        <PracticeAreaCard data-aos="fade-up" data-aos-duration="700" data-aos-delay="" name="Modifications of Divorce Judgment" />
      </div>
    </div>

    <!-- our team -->
    <div id="our-team" class="mt-5 container-fluid">

      <div class="row">
        <div id="our-team-left" class="p-5 col-sm-4 d-flex align-items-center justify-content-center">
          <div>
            <h2 class="roman-head text-light mb-0" style="font-weight: bold; font-size: 55px;">OUR TEAM</h2>
            <p class="text-light" style="font-size: 21px;">
              Experienced. Dedicated. Caring
            </p>
          </div>
        </div>
          <div class="col-sm-6 d-flex pt-5 pb-5 mt-5 mb-5 justify-content-around">
            <PersonCard data-aos="fade-left" data-aos-duration="700" data-aos-delay="" name="Shane Griffin" />
            <PersonCard data-aos="fade-left" data-aos-duration="700" data-aos-delay="50" name="Shane Griffin" />
            <PersonCard data-aos="fade-left" data-aos-duration="700" data-aos-delay="100" name="Shane Griffin" />
        </div>

        <div class="col-sm-1"></div>
 
      </div>      
    </div>


    <!-- contact us head -->
    <div id="contact-us-head">
      <div id="contact-us-head-grad" class="h-100 pt-5 pb-5">
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
        <div class="col-sm-3 text-left d-flex align-items-center pt-5 pr-0">
          <Contact />
        </div>  
        <div class="col-sm-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.4447816911393!2d-78.87738718452702!3d42.88456172915519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d31248532beb9b%3A0x1cb6fe2bbd09208!2sMain%20Place%20Liberty%20Group!5e0!3m2!1sen!2sus!4v1574562836098!5m2!1sen!2sus" 
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

export default {
  name: 'home',
  components: {
    Nav,
    Gallery,
    PracticeAreaCard,
    PersonCard,
    Footer,
    Contact
  },
};
</script>

<style lang="scss" scoped>
@import "./../css/_variables.scss";

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
  background-image: url("./../assets/stock3.jpg");

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
      // url("./../assets/logo_gs.png"),
      linear-gradient(100deg, $primary-light 0%, $primary-light $cutoff, $our-team-grey $cutoff + .2%, $our-team-grey 100%);
}


#contact-us-head {
  height: 300px;
  background-image: url("./../assets/stock8.jpg");
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


