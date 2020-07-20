<template>
 <div>
    <div></div>
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
       arr:[
         {GOODS_SERIAL_NUMBER:'',NAME:'',ORI_PRICE:'',PRESENT_PRICE:''}
         
       ]
     }
   },
   methods: {
     getData() {
            axios.get("/api/tableData")
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