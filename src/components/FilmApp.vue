<template>
    <div class="d-flex flex-wrap box m-auto ">
        <div class="disnone">
        <h6 class="ms-1">{{card.title}}</h6>
        <p class="text-secondary ms-1">Titolo originale: {{card.original_title}}</p>  
        </div>
       

        <img class="not-found" id="show" v-if="card.backdrop_path === null " src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1536px-Black_colour.jpg" alt="posterNotAvaible">
        <img id="show" v-else :src="`http://image.tmdb.org/t/p/w342/${card.backdrop_path}`">  



        <img v-if="lingue.includes(card.original_language)" :src="`/flags/${card.original_language}.png`" alt="flags" class="flags"/> 
         <span class="text-uppercase" v-else>Original Lang:{{ card.original_language }}</span>
         <span class="ms-3 mt-3 text-danger">average vote: {{card.vote_average }} </span>
           
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
    width: 350px;
    height: 380px;
    border-radius: 4%;
    background-color:  #0c0c0d;
    color: white;

}

.not-found {
    width: 350px;
    height: 200px;
}

.flags {
    margin-top: 10px;
    width: 40px;
    height: 40px;
}

</style>