<template>
  <div>
    <el-table :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)" style="width: 100%">
      <el-table-column prop="NAME" label="名称" width="280" align="center"></el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="180" align="center"></el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="180" align="center"></el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价" width="180" align="center"></el-table-column>
      <el-table-column width="300" align="right"><el-button type="primary" @click="primarys">编辑</el-button></el-table-column>
      <el-table-column><el-button type="danger" @click="dangers">删除</el-button></el-table-column>
    </el-table>
      <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tableData: [
        { NAME: "",GOODS_SERIAL_NUMBER: "",  ORI_PRICE: "", PRESENT_PRICE: "" }
      ],
      pageSizes:[10, 20, 30, 40,50,60,70],
      pageSize:10,
      currentPage:1
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          if (res.data.code === 0) {
            this.tableData = res.data.data;
          }
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
        handleSizeChange(val) {
            this.pageSize=val
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.currentPage=val
          // console.log(`当前页: ${val}`);
        },
    primarys(){
      
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>