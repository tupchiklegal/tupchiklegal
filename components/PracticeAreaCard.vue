<template>
  <nuxt-link class="practice-area-a mt-3" :to="link" >
    <div>

      <div 
        class="text-center ml-1 mr-1 shadow practice-area-link d-flex justify-content-center align-items-center text-dark p-2" 
        style="height: 175px; border-radius: 4px; "
      > 
        <strong style="font-size: 20px;">{{ name }}</strong>
      </div>

      <div class="text-center ml-1 mr-1 shadow practice-area-link d-flex justify-content-center align-items-center text-dark p-2 learn-more">
        <strong style="font-size: 20px;">Learn More</strong>
      </div>

    </div>
  </nuxt-link>
</template>

<script>
export default {
    props: ['name', 'link']
}
</script>

<style lang="scss" scoped>
@import "./../assets/_variables.scss";
  
.practice-area-link {
  // border-bottom: 7px solid $secondary;
  background: $primary-light;
  color: white !important;
}
.practice-area-a {
  position: relative;
}
.practice-area-a:hover {
  text-decoration: none;  
  @media (min-width: 768px){
    .learn-more {
      opacity: .9;
      height: 100%;
    }
  }
}
.learn-more {
  transition: height .3s, opacity .4s;
  opacity: 0;
  position: absolute;
  background: $secondary;
  top: 0;
  right: 0;
  left: 0;
  height: 0%;
}
</style>