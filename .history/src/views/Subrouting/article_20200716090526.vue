<template>
  <div>
    <div class="top_1">
      <el-button type="danger" @click="see">查看</el-button>
      <el-button type="primary" @click="release">发布</el-button>
    </div>
    <br />
    
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
        date: "",
        text:""
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
    release() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/article/create", {
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              date: this.ruleForm.date,
              text: this.ruleForm.text
            })
            .then(res => {
              if (res.data.code === 200) {
                // console.log(res.data);
                this.$message.success("发表成功");
                this.$router.push("/published");
              } else {
                this.$message.error("表单输入有误");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("表单输入有误");
        }
      });
    },
    see(){
      this.$router.push('published')
    }
  },
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
.time {
  margin: 8px 10px 0 30px;
}
.buttons {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
</style>