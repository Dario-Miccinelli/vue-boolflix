<template>
    <div id="HeadContent" class="d-flex flex-wrap">
    
        <img class="" src="../Netflix-Logo.wine.svg" alt="">
        
        <input  v-model="ricerca" 
        @keyup="$emit('emit' , ricerca ) "
        type="text" placeholder="Search a Film" 
        class="w-25 h-25  customx">
     
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
    margin-top: 3rem;
  }
  
  </style>