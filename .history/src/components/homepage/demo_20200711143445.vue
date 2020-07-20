<template>
 <div>
    <div>
        <div><ve-radar :data="chartData" :settings="chartSettings"></ve-radar></div>
        <div></div>
        <div></div>
    </div>
 </div>
</template>

<script>
import axios from "axios";
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         arr:'',
         brr
     }
   },
   methods: {
       getData() {
            axios.get("/api/ringChat")
              .then(res => {
                if (res.data.code===0) {
                  this.arr = res.data.data;
                }
                console.log(res.data.data);
              })
              .catch(err => {
                console.log(err);
              });
          },
         etData() {
            axios.get("/api/ringChat")
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
       this.getData()
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