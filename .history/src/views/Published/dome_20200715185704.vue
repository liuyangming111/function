<template>
 <div>
    
  </div>
</template>

<script>
import 
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
     get
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