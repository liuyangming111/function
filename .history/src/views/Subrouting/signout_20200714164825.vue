<template>
 <div class="signout">
    <h3>感谢您的使用,期待您的下次光临</h3>
    <el-button type="primary" @click="clickbtn">确认退出</el-button>
 </div>
</template>

<script>
import axios from "axios"
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
     clickbtn(){
       axios.get("/api/user/logout")
          .then(res => {
          if (res.data===0) {
            localStorage.clear();
            this.$message.success(res.data.message);
            this.$router.push('/logon')
          }
            console.log(res.data);
        }).catch(err => {
              console.log(err);
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
.signout{
  text-align: center;
  h3{
    margin: 120px 0 20px 0;
  }
}
</style>