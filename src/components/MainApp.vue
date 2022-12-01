<template>
  <div id="Main" class="d-flex flex-wrap m-auto ">

    <H1 class="mt-3 mb-3 ms-1 p-2" >FILM</H1>
    <!-- <div id="" class=" d-flex flex-wrap p-1 gap"> -->
      <div id="" class="d-flex scrollmenu  gap">
       
      <FilmApp v-for="(elem, index) in card" :key="index" :card="elem" />
    </div>
    <H1 class="mt-3 mb-3 ms-1 p-2">SERIE TV</H1>
    <!-- <div class="d-flex flex-wrap gap "> -->
      <div class="d-flex scrollmenu gap ">
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



 div.scrollmenu {
 
  overflow: auto;
 
}

::-webkit-scrollbar {
  width: 5px;
  height: 18px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: black;
  border-radius: 15px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #D81F26;
  border-radius: 5px;
}


</style>