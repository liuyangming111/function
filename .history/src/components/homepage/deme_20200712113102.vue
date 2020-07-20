<template>
 <div class="box">
    <div class="box_1">
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
    <div class="box_2">
      <div>
        <div></div>
        <div>To</div>
      </div>
    
    </div>
    <div class="box_3"><img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">
        <div v-for="(item, index) in arr" :key="index">
        <div>{{item.name}}</div>
         <el-progress :percentage="item.progress*100" v-if='item.progress<1'></el-progress>
         <el-progress :percentage="item.progress*100" v-if='item.progress==1' status="success"></el-progress>
        </div>
    </div>
 </div>
</template>

<script>
import axios from "axios";
 export default {
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
          arr:[],
          brr:''
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
                // console.log(res.data.data);
              })
              .catch(err => {
                console.log(err);
              });
          },
        tData() {
            axios.get("/api/todoList")
              .then(res => {
                if (res.data.code===0) {
                  this.brr= res.data.data;
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
       this.tData()
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
    justify-content: space-between;
  }
  .box_1{
    width: 50%;
    margin-left: 10px;
  }
  .box_2{
    width: 300px;
    background-color: white;
    margin: 0 20px;
  }
  .box_3{
    background-color: white;
  }
  .box_3 img{
    width: 250px;
    margin: 10px;
  }
  .box_3 div{
    margin: 10px;
  }
</style>