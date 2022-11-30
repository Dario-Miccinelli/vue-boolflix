<template>
  <div id="Main" class="d-flex flex-wrap m-auto ">
    <div id="" class=" d-flex flex-wrap p-1 gap">
      <FilmApp v-for="(elem, index) in card" :key="index" :card="elem" />
    </div>
    <div class="d-flex flex-wrap gap ">
      <SeriesApp v-for="(elem, index) in card2" :key="index" :card2="elem"/>
    </div>

  </div>

</template>



<script>

import FilmApp from './FilmApp.vue'
import SeriesApp from './SeriesApp.vue'
export default {
  name: 'MainApp',
  components: {
    FilmApp,
    SeriesApp
  },

  props: {
    card: Array,
    card2: Array,

  },

  data() {
    return {

    }
  }

}
</script>

  
<style scoped lang="scss">

 #Main {
 margin: auto;
 width: 90%;
 }

.gap {
  gap: 10px;
 

  
}
</style>