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
      <div data-aos="fade" data-aos-offset="275" class="container text-left pt-5 pb-5">
        <h2 style="display-4">FAMILY & MATRIMONIAL LAW</h2>
        <p style="font-size: 21px;">
          When it comes to family, legal matters can be challenging, sensitive and highly volatile. 
          With Tupchik Legal, 
          you’ll find our family and matrimonial law attorneys combine compassion with practical advice to deliver caring, 
          yet effective resolutions for our clients. 
          Our attorneys are compassionate advocates who accord every case a high level of importance. 
          Our goal is to successfully resolve family legal matters while minimizing cost and emotional upheaval for our clients.
          We have over 40 years of combined experience in handling family law matters right here in Buffalo.
        </p>
      </div>
    </div>

    <!-- practice areas -->
    <div id="parallax-1" class="pt-4 pb-4">
      <div data-aos="fade" class="pb-5 pt-5 container d-flex justify-content-between">
        <PracticeAreaCard name="Divorce & Separation"/>
        <PracticeAreaCard name="High-Asset / High Net Worth Divorce Representation"/>
        <PracticeAreaCard name="Child Custody & Visitation" />
        <PracticeAreaCard name="Pre-Marriage Planning" />
        <PracticeAreaCard name="Modifications of Divorce Judgment" />
      </div>
    </div>

    <!-- our team -->
    <div class="container pt-5 pb-5 text-left">
      <h2 style="display-4">OUR TEAM</h2>
    </div>

    <!-- contact us -->
    <div class="container pt-5 pb-5 text-left">
      <h2 style="display-4">CONTACT US</h2>
    </div>

    <div style="height: 1000px;"></div>

  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Gallery from '@/components/Gallery.vue';
import PracticeAreaCard from '@/components/PracticeAreaCard.vue';
import PersonCard from '@/components/PersonCard.vue';

export default {
  name: 'home',
  components: {
    Nav,
    Gallery,
    PracticeAreaCard,
  },
};
</script>

<style lang="scss" scoped>
#parallax-1 {
  background-image: 
    linear-gradient(rgba(black, .5) 0%, rgba(black, .5) 0%), 
    url("./../assets/stock3.jpg");

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>


