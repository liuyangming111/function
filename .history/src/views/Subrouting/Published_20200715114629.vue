<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="#" width="150"></el-table-column>
      <el-table-column fixed prop="date" label="标题" width="150"></el-table-column>
      <el-table-column prop="name" label="作者" width="120"></el-table-column>
      <el-table-column prop="province" label="类目" width="120"></el-table-column>
      <el-table-column prop="city" label="来源" width="120"></el-table-column>
      <el-table-column prop="address" label="重要性" width="300"></el-table-column>
      <el-table-column prop="zip" label="发布时间" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <el-button type="text" size="small">编辑</el-button>？？
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>