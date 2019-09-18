<template>
  <div class="person m-5 text-center">
    <img v-bind:src="require(`./../assets/${picture}`)" alt="">
    <div class="p-2">
    <h4><small>{{ name }}</small></h4>
    <hr>
    <p class="text-justify"> {{ bio }} </p>
    </div>

  </div>
</template>

<script>
export default {
  props: ['name', 'picture', 'bio']
}
</script>

<style>
.person {
  display: inline-block;
  width: 250px;
}
</style>