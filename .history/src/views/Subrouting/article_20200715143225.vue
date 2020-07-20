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
      label-width="85px"
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
          <el-input v-model="ruleForm.author" style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="category">
          <el-select v-model="ruleForm.category" placeholder="请选择" style="width:150px">
            <el-option label="Vue" value="vue"></el-option>
            <el-option label="React" value="React"></el-option>
            <el-option label="Node.js" value="Nodejs"></el-option>
            <el-option label="性能优化" value="performance"></el-option>
            <el-option label="JavaScript" value="JavaScript"></el-option>
            <el-option label="小程序" value="Applets"></el-option>
            <el-option label="工具类" value="tool"></el-option>
            <el-option label="其他" value="other"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="来源" prop="source">
          <el-select v-model="ruleForm.source" placeholder="请选择" style="width:150px">
            <el-option label="原创" value="original"></el-option>
            <el-option label="转载" value="reprint"></el-option>
            <el-option label="与他人合作" value="cooperation"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性" prop="star">
          <el-select v-model="ruleForm.star" placeholder="请选择" style="width:150px">
            <el-option label="1" value="One"></el-option>
            <el-option label="2" value="Two"></el-option>
            <el-option label="3" value="Three"></el-option>
            <el-option label="4" value="Four"></el-option>
            <el-option label="5" value="Five"></el-option>
          </el-select>
        </el-form-item>
        <div style="display: flex;">
          <span class="time">发布时间</span>
          <el-date-picker v-model="ruleForm.values" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
      </div>
    </el-form>
    <div>
      <mavon-editor ref="editor" v-model="doc"></mavon-editor>
    </div>
    <div class="buttons">
      <el-button type="primary" @click="release">发布</el-button>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import axios from "axios";
export default {
  name: "Create",
  props: {},
  components: { mavonEditor },
  data() {
    return {
      doc: "",
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        values: ""
      },
      rules: {
        title: [
          { required: true, message: "文章标题不能为空", trigger: "blur" }
        ],
        abstract: [
          { required: true, message: "文章摘要不能为空", trigger: "blur" }
        ],
        author: [{ required: true, message: "作者不能为空", trigger: "blur" }],
        category: [{ required: true, message: "请选择类目", trigger: "blur" }],
        source: [{ required: true, message: "请选择来源", trigger: "blur" }],
        star: [{ required: true, message: "请选择重要性", trigger: "blur" }]
      }
    };
  },
  methods: {
    release(){
      this.$refs.ruleForm.validate(valid =>{
        if(valid)
      })
    }
  },
  mounted() {
    
  },
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
.time {
  margin: 8px 10px 0 30px;
}
.buttons {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
</style>