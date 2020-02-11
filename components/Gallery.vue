<template>
  <div class="container-fluid">
    <div class="row h-100">
      <div id="gallery" class="p-0 col-sm-12 h-100">

          <!-- <div v-if="bg1Active" :style="{'background-image': 'url(' + require(`./../static/${images[bg1Index]}`) + ')'}" id="gallery-image-1"></div> -->

          <div 
            class="gallery-image" 
            :style="{'background-image': 'url(' + require(`./../static/stock8.jpg`) + ')'}"
          ></div>
        
          <slot></slot>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#gallery {
  background: 
    linear-gradient(180deg, rgba(black, .0) 0%,  rgba(black, 0) 40%,  rgba(rgb(15,15,15), 1) 100%),
    linear-gradient(90deg,  rgba(black, .92) 0%, rgba(black, .7) 55%, rgba(black, .1) 100%), 
    linear-gradient(180deg, rgba(black, .4) 0%,  rgba(black, 0) 35%,  rgba(black, 0) 100%);
}
.gallery-image {
  z-index: -2;
  position: absolute; 
  left: 0; 
  right: 0; 
  height: 100%; 
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 768px){
  #gallery {
    background: 
      linear-gradient(180deg, rgba(black, .0) 0%,  rgba(black, 0) 40%,  rgba(rgb(15,15,15), 1) 100%),
      // linear-gradient(90deg,  rgba(black, .92) 0%, rgba(black, .7) 55%, rgba(black, .1) 100%), 
      linear-gradient(180deg, rgba(black, .8) 0%,  rgba(black, .8) 100%);
  }
}

</style>