<template>
  <a class="practice-area-a" href="">
    <div class="mr-1 ml-1 practice-area-link card shadow d-flex justify-content-center align-items-center text-dark p-1" style="height: 200px;">
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
.practice-area-link {
  border-bottom: 3px solid orange;
}
.practice-area-a:hover {
  text-decoration: none;  
}
</style>