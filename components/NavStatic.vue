<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a href="" class="navbar-brand">
        <nuxt-link to="/" >
          <img id="nav-logo" class="mt-1 mb-1 mr-4" src="./../static/logo_text.png" alt="logo" >
        </nuxt-link>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/" >HOME</nuxt-link>
          </li> 

          <li class="dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">AREAS OF PRACTICE 
            <span class="caret"></span></a>
            <ul class="dropdown-menu p-2">
              <li v-for="p in this.practices" v-bind:key="p.id">
                <nuxt-link class="nav-link" :to="p.link" >{{ p.name }}</nuxt-link>
              </li>
            </ul>
          </li>

          <li class="dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">OUR TEAM 
            <span class="caret"></span></a>
            <ul class="dropdown-menu p-2">
              <li v-for="p in this.people" v-bind:key="p.id">
                <nuxt-link class="nav-link" :to="p.link" >{{ p.name }}</nuxt-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link" to="/#contact" >CONTACT US</nuxt-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { practices, people } from './../store/globals.js';

export default {
  data() {
    return {
      practices, 
      people
    }
  }
}
</script>

<style lang="scss" scoped>


#logo-name {  
  display: inline;
  font-family: 'sf_old_republicregular';
}

#nav-logo {
  max-width: 375px;
}
@media (max-width: 768px){
  #nav-logo {
    max-width: 190px;
  }
}
// #nav {
//   transition: background $transition-time;
// }
// .nav-link, #logo-name {
//   color: rgba(white, .8) !important;
//   transition: color $transition-time;
// }
// .nav-white-bg {
//   background: white;
//   box-shadow: 0px 0px 10px 0px rgba(black, .4);
//   .nav-link {
//     color: rgba(black, .8) !important;
//   }
//   #logo-name {
//     color: rgba(black, .7) !important;
//   }
// }
</style>
