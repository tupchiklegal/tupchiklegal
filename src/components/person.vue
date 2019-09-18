<template>
  <div class="container person">
    <div class="row">
      <div class="col-sm-3">
            <img v-bind:src="require(`./../assets/${picture}`)" alt="">
      </div>
      <div class="col-sm-9">
        <h4>{{ name }}</h4>
        <p class="text-justify"> 
          <slot></slot>  
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'picture' ]
}
</script>

<style>
/* .person {
  display: inline-block;
  width: 250px;
} */
</style>