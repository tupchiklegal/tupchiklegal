<template>
<div>

  <div id="home" class="container-fluid">
    <div class="row h-100">
      <div id="gallery-content" class="text-center col-sm-12 h-100 p-5">

        <br>

        <h1 id="h1-quote" class="text-light font-weight-bold display-4">
        HOLISTIC LEGAL RESOLUTION
        </h1>

        <br>

        <div class="row mt-5">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <button v-on:click="test" class="btn btn-primary pt-3 pb-3 pl-5 pr-5"><h4>Contact Us</h4></button>
          </div> 
          <div class="col-sm-3"></div>      
        </div>

        <br>
    
        <div class="row mt-5">
          <div class="col-sm-3"></div>
          <div class="col-sm-6 bg-light rounded-lg shadow-lg">
            <div hidden id="contact-info" class="p-5">
              <table class="table table-borderless">
                <tbody class="text-dark">
                  <tr>
                    <td>Convention Towers</td>
                    <td>Phone (716) 856-5556</td>
                  </tr>
                  <tr>
                    <td>43 Court Street, Mezzanine</td>
                    <td>Fax (716) 358-1015</td>
                  </tr>
                  <tr>
                    <td>Buffalo, NY 14202</td>
                    <td>vgabrieletlg@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="contact-quote" class="text-dark p-5">
              <h3 style="margin-top: auto; margin-bottom: auto;"><i>"Some inspiring quote about law or something it doesnt matter."</i></h3>
            </div>
          </div>     
          <div class="col-sm-3"></div>      
        </div>
      </div>
    </div>
  </div>
  

  <div class="text-center quote-container">
    <quote></quote>
    <quote></quote>
    <quote></quote>
    <quote></quote>
    <quote></quote>
    <quote></quote>
  </div>


</div>
</template>

<script>

import quote from './quote.vue'

export default {
  components: {
    quote
  },
  methods: {
    test() {
      console.log('test');
    }
  }
}
</script>

<style lang="scss">
#home {
  background-image: url("./../assets/stock3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0%;
}
#h1-quote {
  text-shadow: 2px 4px 5px rgba(black, .15);
}
</style>