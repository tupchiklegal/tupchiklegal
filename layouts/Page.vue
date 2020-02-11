<template>
  <div>
    <Nav />
    <div class="head mb-4">
      <div class="head-grad h-100">
        <div class="container d-flex align-items-center text-light h-100">
          <h2 style="font-size: 40px;">{{ name }}</h2>
        </div>
      </div>
    </div>
    <div class="container text-left" style="min-height: 500px;" >
      <slot ></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/NavStatic.vue';
import Footer from '@/components/Footer.vue';

export default {
    props: ['name'],
    components: {
        Nav,
        Footer
    }
}
</script>

<style lang="scss">
.head {
  background-image: url("./../static/stock8.jpg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
}
.head-grad {
  background-image: linear-gradient(180deg, rgba(black, .75) 0%, rgba(black, .9) 100%);
}
@media only screen and (min-width : 1200px) {
  .container { max-width: 1100px; }
}
</style>