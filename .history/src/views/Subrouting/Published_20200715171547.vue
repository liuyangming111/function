<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="#" width="80" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" width="230" align="center"></el-table-column>
      <el-table-column prop="author" label="作者" width="120" align="center"></el-table-column>
      <el-table-column prop="category" label="类目" width="120" align="center"></el-table-column>
      <el-table-column prop="source" label="来源" width="120" align="center"></el-table-column>
      
      <el-table-column prop="star" label="重要性" width="150" align="center"></el-table-column>
      <el-table-column prop="date" label="发布时间" width="200" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="250" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini">编辑</el-button>
          <el-button type="danger" size="mini" @click="etData(scope.$index, scope.row)">删除</el-button>
          <el-button type="success" size="mini">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
  </div>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      value: 3.7
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          if (res.data.code === 200) {
            this.tableData = res.data.data;
            this.tableData.map(item => {
              item.date = dayjs(item.date).format("YYYY年MM月DD日 HH:mm:ss");
            });
          }
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    etData(index, row) {
      axios
        .post("/api/article/delete", {
          _id: row._id
        })
        .then(res => {
          this.tableData.splice(index, 1);
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