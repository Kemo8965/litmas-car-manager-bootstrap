<template>
  <div id="app">
    
    <div>
      <circle-8 class="spinner"></circle-8>
    </div>
  </div>
   
</template>

<script>
  import {Circle8} from 'vue-loading-spinner'
  export default {
    components: {
     Circle8
    },

    data(){

      return{

        loading:false
      }
    },

    methods:{

      async onload(){
        this.loading= true;
        console.log('Loading is true');
        this.loading= false;
        
      }
    }

  
  }
</script>

<style scoped>
.spinner{
  color: aqua;
}
</style>