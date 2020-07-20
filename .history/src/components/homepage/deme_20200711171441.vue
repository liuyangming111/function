<template>
 <div>
    
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
         rows:[]
     }
   },
   methods: {
       getData() {
            axios.get("/api/ringChat")
              .then(res => {
                if (res.data.code===0) {
                  this.chartDatas.rows = res.data.data;
                }
                console.log(res.data.data);
              })
              .catch(err => {
                console.log(err);
              });
          },
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