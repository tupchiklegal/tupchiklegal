<template>
<div>
  <div class="container p-1">
    <router-link to="/" >	Home </router-link> &gt; About
  </div>
  <div class="container-fuid bg-dark">
    <div class="container p-3">
      <h1 class="text-light">About</h1>
    </div>
  </div>
  <div id="about" class="container mt-4">

    <h4 class="text-primary">Family and Matrimonial Law</h4>
    <p>
      When it comes to family, legal matters can be challenging, sensitive and highly volatile. 
      At Bouvier Law, you’ll find our family and matrimonial law attorneys combine compassion with 
      practical advice to deliver caring, yet effective resolutions for our clients. 
      <strong> We offer clients personalized attention and one-on-one service. 
      You will never get lost in the shuffle. </strong>
      Our attorneys are compassionate advocates who accord every case a high level of importance. 
      Our goal is to successfully resolve family legal matters while minimizing cost and emotional upheaval for our clients. 
      With over 40 combined years of experience in handling family law matters right here in Buffalo, 
      our practice is well-seasoned in issues involving:
    </p>
    <div class="row">
      <div class="col-sm-6">
        <ul>
          <li>
            <router-link to="/practice/divorce-seperation">
              Divorce & Seperation
            </router-link>
          </li>
          <li>
            <router-link to="/practice/high-asset">
              High-Asset / High Net Worth Divorce Representation
            </router-link>
          </li>
          <li>
            <router-link to="/practice/child-custody">
              Child Custody & Visitation
            </router-link>
          </li>  
        </ul>
      </div>
      <div class="col-sm-6">
        <ul>  
          <li>
            <router-link to="/practice/pre-marriage">
              Pre-Marriage Planning
            </router-link>
          </li>
          <li>
            <router-link to="/practice/modifications">
              Modifications of Divorce Judgment
            </router-link>
          </li>    
        </ul>
      </div>
    </div>

    <h4 class="text-primary">Our Team</h4>

    <div>
      <person bio='test' name='Shane Griffin' picture='empty_profile.jpeg'></person>
      <!-- <person name='Shane Griffin' picture='empty_profile.jpeg'></person>
      <person name='Shane Griffin' picture='empty_profile.jpeg'></person>
      <person name='Shane Griffin' picture='empty_profile.jpeg'></person> -->
    </div>

  </div>
</div>
</template>

<script>
import person from './person.vue'

export default {
  components: {
    person
  }
}
</script>