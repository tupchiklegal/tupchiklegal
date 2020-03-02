<template>
  <Page :name="name">
    <div class="row">
      <div class="col-sm-3">
        <div class="card shadow">
          <img class="img-fluid" :src="require(`./../static/${pic}`)" alt="profile">
          <div class="pl-3" style="border-top: 3px solid orange;">
            <slot name="contact"></slot>
          </div>
        </div>
      </div>
      <div class="slot col-sm-9">
        <div class="card shadow p-4">
          <!-- <h5>About</h5> -->
          <slot ></slot>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from './Page.vue';
import { people } from './../store/globals.js'; 

export default {
  props: [ 'id' ],
  data() { return { name: people[this.id].name, pic: 'profile.jpeg' }; },
  components: {
    Page
  },
  mounted() {
    this.name =  people[this.id].name;
    this.pic =  people[this.id].pic;

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
address h5 {
  font-size: 15px !important;
}
</style>
