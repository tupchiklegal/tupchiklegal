<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a href="" class="navbar-brand">
        <img id="nav-logo" class="img-fluid mt-1 mb-1 mr-4" src="./../assets/logo.png" alt="logo" >
        <h3 id="logo-name">Tupchik Legal Group</h3>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="#practices">PRACTICES</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#our-team">OUR TEAM</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#contact">CONTACT US</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

var transitionBreakPoint = 200;

export default {
  data() {
    return {
      bgWhite: false
    }
  },
  methods: {
    scroll(e) {
      if (!this.bgWhite && window.scrollY > transitionBreakPoint) {
        this.bgWhite = true;
        document.getElementById("nav").classList.add("nav-white-bg");
      } 
      if (this.bgWhite && window.scrollY < transitionBreakPoint) {
        document.getElementById("nav").classList.remove("nav-white-bg");
        this.bgWhite = false;
      }
    }
  },
  created() {
      window.addEventListener('scroll', this.scroll);
  }
}
</script>

<style lang="scss" scoped>

$transition-time: .7s;

#nav-logo {
  max-width: 80px;
}
@media (max-width: 768px){
  #nav-logo {
    max-width: 50px;
  }
  #logo-name {
    font-size: 18px;
  }
}

#logo-name {  
  display: inline;
  font-family: 'sf_old_republicregular';
}
#nav {
  transition: background $transition-time;
}
.nav-link, #logo-name {
  color: rgba(white, .8) !important;
  transition: color $transition-time;
}
.nav-white-bg {
  background: white;
  box-shadow: 0px 0px 10px 0px rgba(black, .4);
  .nav-link {
    color: rgba(black, .8) !important;
  }
  #logo-name {
    color: rgba(black, .7) !important;
  }
}
</style>
