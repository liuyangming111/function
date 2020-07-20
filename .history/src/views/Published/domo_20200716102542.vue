<template>
  <div>
    <div class="title">
      <el-button type="danger" @click="returns">返回发布</el-button>
      <el-button type="primary" @click="release">确认修改</el-button>
    </div>
    <br />
    <el-form
      :model="obj"
      :rules="rules"
      ref="ruleForm"
      label-width="85px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="obj.title"></el-input>
      </el-form-item>
      <el-form-item label="文章摘要" prop="abstract">
        <el-input v-model="obj.abstract"></el-input>
      </el-form-item>
      <div style="display: flex;">
        <el-form-item label="作者" prop="author">
          <el-input v-model="obj.author" style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="category">
          <el-select v-model="obj.category" placeholder="请选择" style="width:150px">
            <el-option label="vue" value="vue"></el-option>
            <el-option label="React" value="React"></el-option>
            <el-option label="Node.js" value="Node.js"></el-option>
            <el-option label="性能优化" value="性能优化"></el-option>
            <el-option label="JavaScript" value="JavaScript"></el-option>
            <el-option label="小程序" value="小程序"></el-option>
            <el-option label="工具类" value="工具类"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="来源" prop="source">
          <el-select v-model="obj.source" placeholder="请选择" style="width:150px">
            <el-option label="原创" value="原创"></el-option>
            <el-option label="转载" value="转载"></el-option>
            <el-option label="与他人合作" value="与他人合作"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性" prop="star">
          <el-select v-model="obj.star" placeholder="请选择" style="width:150px">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
        <div style="display: flex;">
          <span class="time">发布时间</span>
          <el-date-picker v-model="obj.date" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
      </div>
      <div>
        <mavon-editor ref="editor" v-model="obj.text"></mavon-editor>
      </div>
    </el-form>
    <div class="buttons">
      <el-button type="primary" @click="release">确认修改</el-button>
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
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        date: "",
        text: ""
      },
      rules: {},
      id: "",
      obj: {}
    };
  },
  methods: {
    returns() {
      this.$router.push("/published");
    },
    getData() {
      axios
        .post("/api/article/article", {
          _id: this.id
        })
        .then(res => {
          this.obj = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    release() {
        axios.post("/api/article/article")
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
  display: flex;
  justify-content: space-around;
}
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