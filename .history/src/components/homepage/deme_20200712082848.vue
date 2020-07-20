<template>
 <div>
    <el-table :data='tableData'>
      <el-table-column label="Order_No"></el-table-column>
      <el-table-column label="Price"></el-table-column>
      <el-table-column label=""></el-table-column>
    </el-table>
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
        //  rows:'',
          tableData: [{
          date: '',
          name: '',
          address: '',
          tag: ''
          }]
     }
   },
   methods: {
       getData() {
            axios.get("/api/orderData")
              .then(res => {
                if (res.data.code===0) {
                  this.tableData= res.data.data;
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