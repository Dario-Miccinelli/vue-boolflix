<template>
    <div id="Main" class="d-flex flex-wrap p-2" >
      <div id="" class="container-fluid d-flex flex-wrap p-1 gap">
       <FilmApp 
       v-for="(elem, index) in card"
          :key="index"
          :card="elem"/>
          </div>
     
    </div>
  
  </template>



<script>

import FilmApp from './FilmApp.vue'
export default {
  name: 'MainApp',
  components: {
    FilmApp
  },

  props: {
    card: Array,
    
  },
  
  data() {
    return {
        
    }
  }
 
}
</script>

  
  <style scoped lang="scss">

  #Main {
    width: 80%;
    margin: auto;
  
  }
  
  .gap {
    gap: 25px;
    padding: 10px;
  }

  
  </style>