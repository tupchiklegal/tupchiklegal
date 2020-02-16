<template>
  <nuxt-link :to="link">
    <div style="max-width: 280px;" class="person-card card shadow-sm">
        <img style="width: 100%" src="./../static/profile.jpeg" alt="profile">
        <div class="p-3 text-justify">
          <h4 style="font-size: 15px;" class="text-left font-weight-bold">{{ name }}</h4>
          <p style="font-size: 16px; color: black">
            {{ description }}
          </p>
        </div>

        <div class="learn-more d-flex align-items-center justify-content-center">
          <strong class="text-light" style="font-size: 20px;">Learn More</strong>
        </div>

    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['name', 'link', 'description', 'pic']
}
</script>

<style lang="scss" scoped>
@import './../assets/_variables.scss';

*:hover {
  text-decoration: none;

}
@media (min-width: 768px){
  .person-card:hover {
    .learn-more {
      opacity: .9;
      height: 100%;
    }
  }
}
h4 {
  color: black;
}
img {
  border-bottom: 2px solid $secondary;
}
.learn-more {
  transition: height .3s, opacity .4s;
  opacity: 0;
  position: absolute;
  background: $secondary;
  width: 100%;
  height: 0%;
}
</style>