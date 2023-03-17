<template>
  <div @click="counter++">
    <!-- <img src="../../assets/bigPhoto.png"> -->
    <!--  Original (14575 × 8441) 125 mb -->
    <!-- <img
      src="https://live.staticflickr.com/65535/52259221868_3d2963c1fe_o.png"
    /> -->
    <!--  X-Large 6K (6144 × 3558)  2.4 mb -->
    <img 
      src="https://live.staticflickr.com/65535/52259221868_e86daccb7d_6k.jpg"
    />
  </div>

  <p>The photo above has been clicked {{ counter }} times.</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PhotoPage",
  data() {
    return {
      counter: 0,
    };
  },
});
</script>

<style scoped>
/* .container {
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
  } */
img {
  width: 90%;
  height: auto;
}
p {
  font-size: xx-large;
  color: blue;
}
</style>
