<template>
 <div>
    <h2 class="title">{{obj.title}}</h2>
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
       id:'',
       obj:{}
     }
   },
   methods: {
     getData(){
       axios.post('/api/article/article',{
         _id: this.id
       }).then(res=>{
         console.log(res.data)
         this.obj=res.data.data
       }).catch(err=>{
         console.log(err)
       })
     }
   },
   mounted() {
     this.id=this.$route.query.id
     console.log(this.$route.query.id)
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .title{
    width: 100%;
    t
  }
</style>