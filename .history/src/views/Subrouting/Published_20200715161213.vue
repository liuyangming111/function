<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="title" label="标题" width="150"></el-table-column>
      <el-table-column prop="author" label="作者" width="120"></el-table-column>
      <el-table-column prop="category" label="类目" width="120"></el-table-column>
      <el-table-column prop="source" label="来源" width="120"></el-table-column>
      <el-table-column prop="star" label="重要性" width="300"></el-table-column>
      <el-table-column prop="date" label="发布时间" width="120"></el-table-column>
      
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
      tableData: [{
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        date: "",
        text:""
      }]
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
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
    handleClick(row) {
      console.log(row);
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