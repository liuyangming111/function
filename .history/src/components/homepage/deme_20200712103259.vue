<template>
 <div class="box">
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
    <div></div>
    <div><img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">
        <div>{{arr[0]}}</div>
        <el-progress :percentage="50"></el-progress>
        <div></div>
        <el-progress :percentage="100" :format="format"></el-progress>
        <div></div>
        <el-progress :percentage="100" status="success"></el-progress>
        <div></div>
        <el-progress :percentage="50"></el-progress>
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
          tableData: [{
            num:'',
            price:'',
            status:''
          }],
          arr:[

          ]
     }
   },
   methods: {
       getData() {
            axios.get("/api/orderData")
              .then(res => {
                if (res.data.code===0) {
                  this.tableData= res.data.data;
                }
                // console.log(res.data.data);
              })
              .catch(err => {
                console.log(err);
              });
          },
       etData() {
            axios.get("/api/progress ")
              .then(res => {
                if (res.data.code===0) {
                  this.arr= res.data.data;
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
       this.etData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
  .box{
    display: flex;
  }
</style>