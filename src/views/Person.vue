<template>
  <Page :name="name">
    <div class="row">
      <div class="col-sm-3">
        <img class="img-fluid" src="./../assets/profile.jpeg" alt="profile">
      </div>
      <div class="slot col-sm-9">
        <slot ></slot>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  // props: [ image ],
  data() { return { name: "" }; },
  components: {
    Page
  },
  mounted() {
    this.name = decodeURI(this.$route.path.slice(8)).split('_').join(' ');
  }
}
</script>

<style lang="scss">
.slot {
  h4 {
    margin-top: 10px;
    font-size: 20px;
  }
}
</style>
