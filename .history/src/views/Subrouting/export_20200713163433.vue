<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="NAME" label="名称" width="250" align="center"></el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="180" align="center"></el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="180"></el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价"></el-table-column>
    </el-table>
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
      ]
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