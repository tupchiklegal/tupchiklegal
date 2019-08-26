<template>
  <div id="about" class="container mt-4">
    <h2 class="display-4">About</h2>
    <hr>
    <h4 class="text-primary">Our Mission</h4>
    <div class="row">
      <div class="col-sm-6">
        <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sem placerat, ullamcorper augue id, tincidunt tellus. Proin dapibus bibendum cursus. Quisque a egestas purus. Curabitur quis luctus ipsum. Nulla justo neque, viverra quis odio in, dignissim aliquam eros. Cras gravida in diam eget eleifend. Maecenas elit purus, convallis ac aliquet maximus, vulputate sed quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </div>
       <div class="col-sm-6">
        <p class="text-justify">Maecenas lectus urna, fringilla non est at, porta tempor neque. Maecenas dictum, justo id lobortis tempus, turpis ante fermentum felis, eget elementum enim ipsum nec turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tempus interdum nibh sed ultricies. Mauris scelerisque tempus commodo. Nulla elementum porta aliquam. Donec et sem convallis, feugiat augue quis, fringilla urna. Aenean vitae nunc sit amet ex malesuada venenatis et eget nisl. Integer accumsan neque urna, in cursus dolor fringilla eu.</p>
      </div>
    </div>
    <h4 class="text-primary">About Us</h4>

    <div>
      <person></person>
      <person></person>
      <person></person>
      <person></person>
      <person></person>

    </div>

  </div>
</template>

<script>
import person from './person.vue'

export default {
  components: {
    person
  }
}
</script>