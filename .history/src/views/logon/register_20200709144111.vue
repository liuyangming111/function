<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="请输入用户名" prop="arr">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码" prop="brr">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="register">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        ruleForm:{
            username:'',
            password:''
        },
        rules:{
          // arr:[
          //    {required:true, message:'用户名不能为空', trigger:'blur'}
             
          //  ],
          //  brr:[
          //    {required:true, message:'密码不能为空', trigger:'blur'},
          //    {min:6, max:11, message:'密码需在6-11之间', trigger:'blur'}
          //  ]
        }
    };
  },
  methods: {
      register(){
          this.$refs.ruleForm.validate(valid =>{
              if(valid){
                  axios.post('/api/user/register',{
                      username:this.ruleForm.username,
                      password:this.ruleForm.password
                  }).then(res => {
                      if(res.data.code ===200){
                          this.$message.success(res.data.message)
                      }else{
                          this.$message.error(res.data.message)
                      }
                      console.log(res.data)
                  }).catch(err => {
                      console.log(err)
                  })
              }else{
                  this.$message.error('表单填写有误')
              }
          })
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>