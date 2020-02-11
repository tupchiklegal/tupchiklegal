<template>
  <Page :name="name">
      <slot></slot>
  </Page>
</template>

<script>
import Page from './Page.vue';

export default {
    data() {
      return {
        name: ''
      }
    },
    components: {
        Page
    },
    mounted() {
      this.name = decodeURI(this.$route.path.slice(10)).split('_').join(' ');
    }
}
</script>