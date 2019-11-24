<template>
  <a class="practice-area-a" href="">
    <div 
      class="text-center ml-2 mr-2 shadow practice-area-link d-flex justify-content-center align-items-center text-dark p-1" 
      style="height: 175px; border-radius: 4px; "
    > 
      <strong style="font-size: 20px;">{{ name }}</strong>
    </div>
  </a>
</template>

<script>
export default {
    props: ['name', 'link']
}
</script>

<style lang="scss">
@import "./../css/_variables.scss";
  
.practice-area-link {
  // border-bottom: 7px solid $secondary;
  background: $primary-light;
  color: white !important;
}
.practice-area-a:hover {
  text-decoration: none;  
}
</style>