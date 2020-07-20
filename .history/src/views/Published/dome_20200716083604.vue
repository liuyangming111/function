<template>
 <div>
    <el-button type="primary">返回</el-button>
    <h2 class="title">{{obj.title}}</h2>
    <div class="title">摘要:{{obj.abstract}}</div>
    <div>发表于</div>
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
    text-align: center;
    margin-bottom: 20px;
  }
</style>