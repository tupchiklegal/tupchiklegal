<template>
<div>
  <div class="container p-2 bg-light">
    <router-link to="/" >	Home </router-link> -
    <router-link to="/about" >	About </router-link>
    <span> - {{ title }}</span>
  </div>
  <div class="container-fuid bg-dark bg-image">
    <div class="container p-3 ">
      <h1 class="text-light about">{{ title }}</h1>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["title"]
}
</script>


<style lang="scss" scoped>
  .bg-image {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./../../assets/stock1.jpg');
    background-repeat: no-repeat;
    background-size: cover;

  }
  .about {
      text-shadow: 2px 4px 9px rgba(black, .8);
  }
</style>