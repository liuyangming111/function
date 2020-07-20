<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="NAME" label="名称" width="250" align="center"></el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="180" align="center"></el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="180" align="center"></el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价" align="center"></el-table-column>
      
    </el-table>
      <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
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
      pageSizes:[10, 20, 30, 40],
      currentPage4: 4
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
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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