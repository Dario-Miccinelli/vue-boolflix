<template>
    <div id="HeadContent" class="d-flex flex-wrap justify-content-around">
        
        <img class="" src="../Netflix-Logo.wine.svg" alt="">


        <div class="w-50 customx">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="glass"/>
        <input  v-model="ricerca" 
        @keyup="$emit('emit' , ricerca ) "
        type="text" placeholder="Search a film or a series" 
        class="w-50 h-25 p-3">
      </div>
     


      <div class="gap d-flex flex-wrap">
        <font-awesome-icon icon="fa-solid fa-user" class="m-2"/>
        <h5 class="m-2">Profilo</h5>
        
        <font-awesome-icon icon="fa-solid fa-star" class="m-2"/>
        <h5 class="m-2">Preferiti</h5>
      </div>
    </div>
  
  </template>



<script>
export default {
  name: 'HeaderComp',

  props: {
   
  },
  
  data() {
    return {
        ricerca:''
    }
  }
 
}
</script>

  
  <style scoped lang="scss">



  img {
    width: 15%;
    margin-left: 2rem;
    margin-top: -1rem;
   
  }

  .customx {
    margin-top: 3.9rem;
    border-radius: 5px;
    margin-left: 2rem;
    
    
  
  }
  

  .gap {
    margin-top: 4rem;
    font-size: 1.4rem;
   
   
  }

  .customz {
    margin-top: 4.5rem;
    cursor: pointer;
    
  }

.glass {
  margin-right: 10px;
  font-size: 1.1rem;
}



  .p-3 {
    border-radius: 8px;
  }

  </style>