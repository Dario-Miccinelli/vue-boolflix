<template>
  <div class="d-flex flex-wrap box m-auto ">

      <!-- titolo  -->
      <div class="film-details">


          <!-- immagine   -->
          <img class="not-found imgx" id="show" v-if="card.backdrop_path === null"
              src="http://m.gettywallpapers.com/wp-content/uploads/2021/09/Black-Wallpaper-HD-576x1024.jpg"
              alt="posterNotAvaible">
          <img id="show" v-else :src="`http://image.tmdb.org/t/p/w780/${card.backdrop_path}`">



          <div id="hidden">

              <h6 class="ms-1 mt-3">{{ card.title }}</h6>
              <p class="text-secondary ms-1">Titolo originale: {{ card.original_title }}</p>
              <p>FILM</p>
              <p class="text-secondary">{{card.overview}}</p>


              <!-- bandierine -->
              <img v-if="lingue.includes(card.original_language)" :src="`/flags/${card.original_language}.png`"
                  alt="flags" class="flags" />
              <span class="text-uppercase" v-else>Original Lang:{{ card.original_language }}</span>
              <span class="ms-3 mt-3 text-danger">average vote: {{ card.vote_average }} </span>
          </div>
      </div>








  </div>
</template>

<script>

export default {
  name: "FilmApp" ,
  components: {
   
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
    padding: 0.5rem;
    width: 400px;       
    text-align: center;
  
    border: 1px solid #0c0c0d;


    .imgx {
        width: 350px;
        height: 600px;
    }

    

    

    .flags {
     width: 50px;
    }
    .disnone {

        

        &:hover {
            filter: alpha(opacity=40);
            opacity: 0.5;
        }

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
        height: 390px;
      
   
    }

    &:hover .film-details {

        #show {
            display: none;
        }

        #hidden {
            display: block;
            line-height: 18px;
        }

    }

   
}
</style>