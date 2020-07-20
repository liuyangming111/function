<template>
 <div>
    
  </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       id:''
     }
   },
   methods: {
     getData(){
       axios.post('/api/article/article',{
         _id: this.id
       }).then(res=>{
         console.log(res.data)
       }).catch(res=>{
         console
       })
     }
   },
   mounted() {
     this.id=this.$route.query.id
     console.log(this.$route.query.id)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>