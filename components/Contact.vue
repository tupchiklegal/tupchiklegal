<template>
  <div class="text-left pr-2 pl-2">

    <div class="d-flex justify-content-begin flex-wrap">

      <div class="mr-5">
        <h3><strong>Contact</strong></h3>
        <h4>Phone (716) 856-5556</h4>
        <h4>Fax (716) 358-1015</h4>
        <!-- <h4>infotupchiklegalgroup@gmail.com</h4> -->
      </div>

      <div>
        <h3><strong>Office</strong></h3>
        <address>
          <h4>Tupchik Legal Group</h4>
          <h4>The Main Place Tower</h4>
          <h4>350 Main Street</h4>
          <h4>Suite 2420</h4>
          <h4>Buffalo, New York 14202</h4>
        </address>
      </div>

    </div>


    <div v-if="directions">

      <h4><strong>Directions</strong></h4>
      <p>
        We are located in the Main Place Tower. 
        The Main Place Tower is connected to the Main Place Mall 
        (located along Main Street between Court Street and South Division Streets). 
        You must enter the Main Place Mall in order to enter our building. 
      </p>

      <p>
        Glass Door Entrances to the Main Place Mall are located on Main Street, 
        on Pearl Street as well as the Main Place Mall parking ramp. 
      </p>

      <p>
        If you enter the building via the Main Place Mall Parking Ramp--take the elevator to the Mall Level or "ML" 
        then exit the elevators and look for the Main Place Tower.
      </p>

      <h4><strong>Parking</strong></h4>
      <p>
        You can find metered parking on the street or you can find parking in the Main Place Mall Ramp attached to our building. 
        If you enter the building via the Main Place Mall Parking Ramp--take the elevator to the Mall Level or "ML" 
        then exit the elevators and look for the Main Place Tower.    
      </p>
          
    </div>

    <div class="social d-flex justify-content-between mb-3 mt-5">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-envelope"></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h4 {
    font-size: 17px;
}
h3 {
    font-size: 25px;
    margin-bottom: 18px;
    // text-align: center;
}
</style>

<script>
export default {
  props: {
    directions: {
      type: Boolean,
      default: false
    }
  }
}
</script>