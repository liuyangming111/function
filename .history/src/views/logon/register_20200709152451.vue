<template>
  <div style="width:500px; border:1px solid #999; margin:150px auto">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="forms"
    >
      <el-form-item label="请输入用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="register">立即注册</el-button>
        <el-button type="primary" @click="logon">返回登录</el-button>
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
          username:[
             {required:true, message:'用户名不能为空', trigger:'blur'}
           ],
          password:[
             {required:true, message:'密码不能为空', trigger:'blur'},
             {min:6, max:11, message:'密码需在6-11之间', trigger:'blur'}
           ]
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
      },
      logon(){
        this.$router.push('/logon')
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped>
  .forms{
    margin: 30px auto;
    width: 400px;
  }
</style>