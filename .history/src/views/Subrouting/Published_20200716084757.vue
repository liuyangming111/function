<template>
  <div>
    <el-table :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)" border style="width: 100%">
      <el-table-column type="index" label="#" width="80" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" width="230" align="center"></el-table-column>
      <el-table-column prop="author" label="作者" width="120" align="center"></el-table-column>
      <el-table-column prop="category" label="类目" width="120" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.category==='vue'">
            <el-tag type="success">vue</el-tag>
          </div>
          <div v-if="scope.row.category==='React'">
            <el-tag>React</el-tag>
          </div>
          <div v-if="scope.row.category==='Node.js'">
            <el-tag type="info">Node.js</el-tag>
          </div>
          <div v-if="scope.row.category==='性能优化'">
            <el-tag type="warning">性能优化</el-tag>
          </div>
          <div v-if="scope.row.category==='JavaScript'">
            <el-tag type="danger">JavaScript</el-tag>
          </div>
          <div v-if="scope.row.category==='小程序'">
            <el-tag type="info">小程序</el-tag>
          </div>
          <div v-if="scope.row.category==='工具类'">
            <el-tag type="danger">工具类</el-tag>
          </div>
          <div v-if="scope.row.category==='其他'">
            <el-tag type="warning">其他</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="source" label="来源" width="120" align="center"></el-table-column>
      <el-table-column prop="star" label="重要性" width="150" align="center">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.star" disabled text-color="#ff9900"></el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发布时间" width="200" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="250" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="edit">编辑</el-button>
          <el-button type="danger" size="mini" @click="getData(scope.$index, scope.row)">删除</el-button>
          <el-button type="success" size="mini" @click="see(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>
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
      pageSizes: [5, 10, 15],
      pageSize: 5,
      currentPage: 1,
      id:''
    };
  },
  methods: {
    getData1() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          if (res.data.code === 200) {
            console.log(res);
            this.tableData = res.data.data;
            this.tableData.map(item => {
              item.date = dayjs(item.date).format("YYYY年MM月DD日 HH:mm:ss");
              item.star=Number(item.star);
            });
          }
          
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData(index, row) {
      axios
        .post("/api/article/delete", {
          _id: row._id
        })
        .then(res => {
          this.tableData.splice((this.currentPage-1)*this.pageSize+index, 1);
        })
        .catch(err => {
          console.log(err);
        });
    },
     handleSizeChange(val) {
      this.pageSize = val;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
    },
    see(row){
      this.$router.push({
        path:'/dome',
        query:{
          id:row._id
        }
      })
    },
    edit(row){
      this.$router.push({})
    }
  },
  mounted() {
    
    this.getData1();
   
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>