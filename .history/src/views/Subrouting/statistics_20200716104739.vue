<template>
 <div>
    
 </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash"
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
     getData(){
       axios.get("/api/article/allArticle").then(res=>{
         d
       })
     }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>