<template>
 <div style="">
    <div>
      <el-table :data='tableData'>
        <el-table-column label="Order_No" prop="num" align="center"></el-table-column>
        <el-table-column label="Price" prop="price" align="center"></el-table-column>
        <el-table-column label="Status" align="center">
            <template slot-scope="scope">
              <el-tag type='success' v-if='scope.row.status==0'>success</el-tag>
              <el-tag type='danger' v-if='scope.row.status==1'>pending</el-tag>
            </template>
        </el-table-column>
      </el-table>
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
        //  rows:'',
          tableData: [{
            num:'',
            price:'',
            status:''
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