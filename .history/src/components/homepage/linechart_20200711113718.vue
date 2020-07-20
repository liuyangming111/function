<template>
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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
         brr:{}
     }
   },
   methods: {
       etData() {
            axios.get("/api/homeChat")
              .then(res => {
                if (res.data.code===0) {
                  this.brr = res.data.data;
                }
                console.log(res.data.data);
              })
              .catch(err => {
                console.log(err);
              });
          } 
   },
   mounted() {
     this.etData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>