<template>
  <div style="max-width: 250px;" class="card shadow-sm">
      <img style="width: 100%" src="./../assets/profile.jpeg" alt="profile">
      <div class="p-3 text-justify">
        <h4 style="font-size: 20px;" class="text-center">{{ name }}</h4>
        <p style="font-size: 16px">
          Sed vitae sem in mi convallis efficitur. Fusce non sodales turpis, ut vestibulum nibh. 
          Integer a eros odio. Fusce tempus quam turpis.
        </p>
      </div>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">

</style>