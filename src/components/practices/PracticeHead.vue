<template>
<div>
  <div class="container p-2">
    <router-link to="/" >	Home </router-link> &gt; 
    <router-link to="/about" >	About </router-link>
    <span> &gt; {{ title }}</span>
  </div>
  <div class="container-fuid bg-dark">
    <div class="container p-3">
      <h1 class="text-light">{{ title }}</h1>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["title"]
}
</script>