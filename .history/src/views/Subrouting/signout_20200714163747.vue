<template>
 <div class="signout">
    <h3>感谢您的使用,期待您的下次光临</h3>
    <el-button type="primary" @click="clickbtn">确认退出</el-button>
 </div>
</template>

<script>
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
       getData() {
            axios.get("/api/homeData")
              .then(res => {
                if (res.data.code===0) {
                  this.arr = res.data.data;
                }
                // console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          },
       // this.$router.push('/logon')
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