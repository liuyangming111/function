<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="80" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" width="230" align="center"></el-table-column>
      <el-table-column prop="author" label="作者" width="120" align="center"></el-table-column>
      <el-table-column prop="category" label="类目" width="120" align="center"></el-table-column>
      <el-table-column prop="source" label="来源" width="120" align="center"></el-table-column>
      <el-table-column prop="star" label="重要性" width="150" align="center"></el-table-column>
      <el-table-column prop="date" label="发布时间" width="200" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="250" align="center">
        <template>
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
            <el-button type="success" size="mini">查看</el-button>
        </template>
      </el-table-column>
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
      tableData: []
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          if (res.data.code === 200) {
            this.tableData = res.data.data;
          }
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    etData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          if (res.data.code === 200) {
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
    this.etData
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>