<template>
    <div class=" ">


        <h5 class="text-secondary">Voto : </h5>
       
        <i v-for="star in voteCalc" :key="star"><font-awesome-icon icon="fa-solid fa-star" /></i>

       








    </div>
</template>

<script>

export default {
    name: "StarsVote",
    components: {

    },
    props: {
        vote: Number,

    },
    computed: {

        voteCalc() {
            return Math.round(this.vote / 2); // dividiamo il voto a metà per poter dare un voto da 1 a 5 e max 5 stelline
        }


    },
    data() {
        return {
           

        }
    },
    methods: {

    }

};
</script>

<style lang="scss" scoped>
  #hidden > div > i {
   color: yellow;
  }
</style>