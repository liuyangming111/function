<template>
  <div>
    <div class="box">
      <input type="text">
    </div>
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
      style="width: 100%"
    >
      <el-table-column prop="NAME" label="名称" width="310" align="center"></el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="180" align="center"></el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="180" align="center"></el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价" width="180" align="center"></el-table-column>
      <el-table-column width="270" align="right">
        <template slot-scope="scope">
          <el-button type="primary" @click="clickbtn(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称:" :label-width="formLabelWidth">
          <el-input v-model="form.NAME"></el-input>
        </el-form-item>
        <el-form-item label="原价:" :label-width="formLabelWidth">
          <el-input v-model="form.ORI_PRICE"></el-input>
        </el-form-item>
        <el-form-item label="现价:" :label-width="formLabelWidth">
          <el-input v-model="form.PRESENT_PRICE"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
    <br />
    <div style="display: flex;">
      <download-excel
        class="export-excel-wrapper"
        :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
        :fields="json_fields"
        name="订单.xls"
      >
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <el-button type="primary">导出xls</el-button>
      </download-excel>
      <download-excel
        class="export-excel-wrapper"
        :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
        :fields="json_fields"
        name="订单.csv"
      >
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <el-button type="danger" style="margin-left:20px">导出csv</el-button>
      </download-excel>
    </div>
    <br />
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
      json_fields: {
        商品名称: "NAME", //常规字段
        原价: "ORI_PRICE", //支持嵌套属性
        单价: {
          field: "PRESENT_PRICE"
          //自定义回调函数
          // callback: value => {
          //   return `Landline Phone - ${value}`;
          // }
        }
      },
      tableData: [],
      pageSizes: [10, 20, 30, 40, 50, 60, 70],
      pageSize: 10,
      currentPage: 1,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {}
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
      this.pageSize = val;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    dangers() {},
    clickbtn(row) {
      // console.log(row);
      this.form = row;
      this.dialogFormVisible = true;
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
  .box{
    input{
      width: 200px;
      height: 30px;
    }
  }
</style>