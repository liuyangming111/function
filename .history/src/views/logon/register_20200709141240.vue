<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="请输入用户名" prop="name">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码" prop="name">
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
        rules:{}
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