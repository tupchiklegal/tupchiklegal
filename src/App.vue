<template>
  <div id="app">
    
    <div class="bg-dark">
      <b-container class="text-right text-white p-1">
        <a class="text-light small" href="#">Contact Us (716) 856-5556</a>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-envelope"></a>

      </b-container>
    </div>

    <b-navbar toggleable="lg" type="light" variant="light" class="shadow-sm">
      <b-container>
        <b-navbar-brand href="#">
          <router-link to="/">
            <img src="./assets/logo_text.png" height="60" alt="logo" class="mr-4">
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

      <div style="min-height: 700px;">
        <transition name="router-anim" enter-active-class="animated fadeIn">
            <router-view ></router-view>
        </transition>
      </div>

    <footer class="p-4 d-flex justify-content-center align-items-center mt-5" style="min-height: 300px;">
   
      <div class="footer-container">
        <div class="mb-3">
          <img src="./assets/logo_text_gs.png" height="60" alt="logo_gs" class="img-fluid mr-4">
        </div>
        <div class="mb-3">
          <router-link to="/"><span class="bottom-link">Home</span></router-link>
          <router-link to="/about"><span class="bottom-link">About</span></router-link>
          <router-link to="/about"><span class="bottom-link">Practice Areas</span></router-link>
        </div>
        <ContactInfo class="mb-3"></ContactInfo>
        <div class="mb-3">Tupchick Legal Group 2019</div>
      </div>

    </footer>
    
  </div>
</template>

<script>
import ContactInfo from './components/contact/ContactInfo.vue';


export default {
  name: 'app',
  components: {
    ContactInfo
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css';

.bottom-link {
  color: grey;
  margin: 10px;
}

.footer-container {
  width: 40%
}

.fa {
  color: white;
  font-size: 14px;
  margin: 0px 4px;
}
@media only screen and (max-width: 768px) {
  .footer-container {
    width: 95%
  }
}

</style>

