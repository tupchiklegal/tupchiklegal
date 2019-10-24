<template>
  <router-link :to="link" >
    <div class="quote shadow d-flex justify-content-center align-items-center" style="height: 200px;">
      <p class=" m-3 p-4 text-center"  >
        <span class="text-primary">
        <!-- &#9733; &#9733; &#9733; &#9733; &#9733; <br> -->
        </span>
          {{name}}
      </p>
    </div>
  </router-link> 
</template>

<script>
export default {
  props: ['name', 'link']
}
</script>
<style>
.quote * {
  color: black;
}
.quote a:hover {
  text-decoration: none !important;
}
.quote {
  font-size: 20px;
  display: inline-block;
  border-bottom: 2px solid orange;
  width: 300px;
}
</style>