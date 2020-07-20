<template>
 <div>
    555
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