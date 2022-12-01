<template>
  <div class="d-flex flex-wrap box m-auto ">
 

      <!-- titolo  -->
      <div class="film-details">

      


          <!-- immagine   -->
          <img class="not-found imgx" id="show" v-if="card.backdrop_path === null"
              src="http://m.gettywallpapers.com/wp-content/uploads/2021/09/Black-Wallpaper-HD-576x1024.jpg"
              alt="posterNotAvaible">
          <img id="show" v-else :src="`http://image.tmdb.org/t/p/w1280/${card.backdrop_path}`">



          <div id="hidden">

              <h6 class="ms-1 mt-3">{{ card.title }}</h6>
              <p class="text-secondary ms-1">Titolo originale: {{ card.original_title }}</p>
              <p>FILM</p>
              <p class="text-secondary font">{{card.overview}}</p>


              <!-- bandierine -->
              <img v-if="lingue.includes(card.original_language)" :src="`/flags/${card.original_language}.png`"
                  alt="flags" class="flags" />
              <span class="text-uppercase" v-else>Original Lang:{{ card.original_language }}</span>
              <!-- <span class="ms-3 mt-3 text-danger">average vote: {{ card.vote_average }} </span> -->
              <StarsVote :vote="card.vote_average"/>
          </div>
      </div>








  </div>
</template>

<script>

import StarsVote from "./StarsVote.vue";

export default {
  name: "FilmApp" ,
  components: {
    StarsVote
  },
  props: {
    card: Object,
    
  },
  data() {
    return {
        lingue: ['en', 'it', 'fr', 'es', 'de'],
       
    }
  },
  methods:{
  
  }

  };
</script>

<style lang="scss" scoped>
.box {
    height: 470px;
    width: 445px;       
    text-align: center;
  
    border: 1px solid #0c0c0d;

 
    
 
 
    .flags {
     width: 45px;
    }


   


    img {
        object-fit: fill;
        width: 100%;
        height: 100%;
    }

    #hidden {
        display: none;
       
        
     
    }

    .film-details {
        cursor: pointer;
      
        
      
   
    }

    &:hover .film-details {

        #show {
            display: none;
        }

        #hidden {
            display: block;
            line-height: 17px;
            padding: 2rem;
           
        }

    }

   
}
</style>