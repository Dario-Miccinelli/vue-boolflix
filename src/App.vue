<template>
  <div id="app">
   
    <HeaderComp @emit="nomeMethods"/>
    <button class="custom d-flex p-1 bg-danger" @click="getFilm()">Cerca solo Film</button>
    <button class="custom2 d-flex p-1 bg-danger" @click="getSeries()">Cerca solo Serie TV</button>
    <MainApp :card="apiInfo" :card2="apiSeriesInfo"/>
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
      apiSeriesInfo: {},
      valoreEmit:"",
      
      

    }
  },
 mounted() {

  

 },
 methods: {

  nomeMethods(valoreEmesso) {

    this.valoreEmit = valoreEmesso
    
    this.getFilm();
    this.getSeries();


  },

  
  getFilm() {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=28bc56582f78d1b00e9e134f5c8d3df6&query=${this.valoreEmit}`   )
        .then((response) => {
          this.apiInfo = response.data.results,
          console.log(this.apiInfo)
        })
      

  },

  getSeries() {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=' + this.valoreEmit)
    .then((response) => {
      this.apiSeriesInfo = response.data.results
    })
  }

 }

}




 

</script>




<style lang="scss">

* {
  background-color: black;

  color: white;
 }

 .custom {
  position: relative;
  left: 19.8rem;
  bottom: 5.7rem;
 }

 .custom2 {
  position: relative;
  left: 27.8rem;
  bottom: 7.95rem;
 }
</style>
