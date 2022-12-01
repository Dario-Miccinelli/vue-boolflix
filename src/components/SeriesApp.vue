<template>
    <div class="d-flex flex-wrap box m-auto ">

        <!-- titolo  -->
        <div class="film-details">


            <!-- immagine   -->
            <img class="not-found imgx" id="show" v-if="card2.backdrop_path === null"
                src="http://m.gettywallpapers.com/wp-content/uploads/2021/09/Black-Wallpaper-HD-576x1024.jpg"
                alt="posterNotAvaible">
            <img id="show" v-else :src="`http://image.tmdb.org/t/p/w1280/${card2.backdrop_path}`">



            <div id="hidden">
                
                <h6 class="ms-1 mt-3">{{ card2.name }}</h6>
                <p class="text-secondary ms-1">Titolo originale: {{ card2.original_name }}</p>
                <p>SERIE TV</p>
                <p class="text-secondary">{{card2.overview}}</p>


                <!-- bandierine -->
                <img v-if="lingue.includes(card2.original_language)" :src="`/flags/${card2.original_language}.png`"
                    alt="flags" class="flags mt-3" />
                <span class="text-uppercase mt-3" v-else>Original Lang:{{ card2.original_language }}</span>
                <!-- <span class="ms-3 mt-3 text-danger">average vote: {{ card2.vote_average }} </span> -->

                <StarsVote :vote="card2.vote_average"/>
            </div>
        </div>








    </div>
</template>

<script>
import StarsVote from "./StarsVote.vue";

export default {
    name: "SeriesApp",
    components: {
        StarsVote

    },
    props: {
        card2: Object,

    },
    data() {
        return {
            lingue: ['en', 'it', 'fr', 'es', 'de'],

        }
    },
    methods: {

    }

};
</script>

<style lang="scss" scoped>
.box {

text-align: center;
width: 550px;






.flags {
 width: 45px;
 height: 45px;
}



img {
    
    width: 525px;
    height: 500px;
    
}

#hidden {
    display: none;
    width: 500px;
    height: 390px;
    

   
    
 
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
        line-height: 15px;
        
       
    }

}





}
</style>