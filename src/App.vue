<template>
  <div id="app">
   
    <HeaderComp @emit="nomeMethods"/>
    <button class="custom d-flex p-1 bg-danger" @click="getFilm() ">Cerca Film</button>
    <MainApp :card="apiInfo"/>
  </div>
</template>





<script>
import axios from 'axios';

import HeaderComp from './components/HeaderComp.vue'
import MainApp from './components/MainApp.vue'

export default {
  name: 'App',

  components: {
    HeaderComp,
    MainApp
  },
  data() {
    return {
      apiInfo: {},
      valoreEmit:"",
      
      

    }
  },
 mounted() {

  

 },
 methods: {

  nomeMethods(valoreEmesso) {

    this.valoreEmit = valoreEmesso


  },

  
  getFilm() {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=28bc56582f78d1b00e9e134f5c8d3df6&query=${this.valoreEmit}`   )
        .then((response) => {
          this.apiInfo = response.data.results,
          console.log(this.apiInfo)
        })
      

  }

 }

}




 

</script>




<style lang="scss">

 #app {
  background-color: black;
  height: 250vh;
  color: white;
 }

 .custom {
  position: relative;
  left: 20rem;
  bottom: 5.7rem;
 }
</style>
