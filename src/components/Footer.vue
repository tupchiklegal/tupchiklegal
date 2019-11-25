<template>
  <div id="footer" class="pt-4">
    <div class="container pt-5 pb-3" style="opacity: .8">
      <div class="row">
        <div class="col-sm-3">
          <Contact />
        </div>
        <div class="col-sm-9">
          <img 
            class="img-fluid mt-0" 
            src="./../assets/logo_text_gs.png" 
            alt="logo_text_gs"
          >
          <div class="text-left mt-4 d-md-flex justify-content-around">
            <div>
              <h3>Navigation</h3>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Practices</a></li>
                <li><a href="">Our Team</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3>Our Team</h3>
              <ul>
                <li v-for="p in this.$people" :key="p.id">
                  <router-link :to="{name : `person-${p.id}`}" >{{ p.name }}</router-link>
                </li>         
              </ul>
            </div>

            <div>
              <h3>Practice Areas</h3>
              <ul>
                <li v-for="p in this.$practices" :key="p.id">
                  <router-link :to="{name : `practice-${p.id}`}" >{{ p.name }}</router-link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div class="mt-5 d-md-flex justify-content-between">
        <div>Designed by <a href="">Shane Griffin</a></div>
        <div>Copyright 2019</div>
        <div> Tupchick Legal Group, PLLC </div>
      </div>

    </div>
  </div>
</template>
<script>
import Contact from '@/components/Contact.vue';

export default {
components: {
Contact,
}
}
</script>


<style lang="scss" scoped>
* {
  color: black !important;
}
#footer {
  background: rgba(0,0,0,.05);
  margin-top: 150px;
}
h3 {
  font-size: 25px;
}
ul {
  padding: 0px;
  list-style-type: none;
}
li {
  margin-top: 6px;
  a {
    color: inherit;
  }
}
</style>