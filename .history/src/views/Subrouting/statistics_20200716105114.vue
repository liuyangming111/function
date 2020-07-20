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
         if (res.data.code === 200) {
                // console.log(res.data);
                this.$message.success("发表成功");
                this.$router.push("/published");
              } 
         console.log(res.data)
       }).catch(err=>{
         console.log(err)
       })
     }
   },
   mounted() {
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>