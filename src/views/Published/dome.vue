<template>
 <div>
    <el-button type="primary" @click="returns">返回</el-button>
    <h2 class="title">{{obj.title}}</h2>
    <div class="title">摘要:{{obj.abstract}}</div>
    <div class="title" style="color:#999">发表于:{{obj.author}}</div>
    <div class="center">{{obj.text}}</div>
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
         console.log(res.data.data)
         this.obj=res.data.data
       }).catch(err=>{
         console.log(err)
       })
     },
     returns(){
       this.$router.push('/published')
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
  .center{
    width: 98%;
    background-color: rgb(245, 245, 245);
    padding: 10px;
  }
</style>