<template>
 <div class="signout">
    <h3>感谢您的使用,期待您的下次光临</h3>
    <el-button type="primary" @click="clickbtn">确认退出</el-button>
 </div>
</template>

<script>
import axios from 
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
       
       // this.$router.push('/logon')
     },
     getData() {
        axios.get("/api/user/logout")
          .then(res => {
          if (res.data.code===0) {
              this.arr = res.data.data;
            }
            console.log(res.data.data);
        }).catch(err => {
              console.log(err);
        });
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
.signout{
  text-align: center;
  h3{
    margin: 120px 0 20px 0;
  }
}
</style>