<template>
  <div>
    <div class="top_1">
      <el-button type="danger">查看</el-button>
      <el-button type="primary">发布</el-button>
    </div>
    <br />
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章摘要" prop="abstract">
        <el-input v-model="ruleForm.abstract"></el-input>
      </el-form-item>
      <div style="display: flex;">
        <el-form-item label="作者" prop="author">
          <el-input v-model="ruleForm.author" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="Vue" value=""></el-option>
            <el-option label="React" value=""></el-option>
            <el-option label="Node.js" value=""></el-option>
            <el-option label="性能优化" value=""></el-option>
            <el-option label="JavaScript" value=""></el-option>
            <el-option label="小程序" value=""></el-option>
            <el-option label="工具类" value=""></el-option>
            <el-option label="其他" value=""></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        title: "",
        abstract: ""
      },
      rules: {
        title: [
          { required: true, message: "文章标题不能为空", trigger: "blur" }
        ],
        abstract: [
          { required: true, message: "文章摘要不能为空", trigger: "blur" }
        ],
        author: [{ required: true, message: "作者不能为空", trigger: "blur" }],
        region: [
            { required: true, message: '请选择类目', trigger: 'change' }
          ],
      }
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top_1 {
  width: 98%;
  background-color: paleturquoise;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>