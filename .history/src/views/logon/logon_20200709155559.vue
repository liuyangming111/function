<template>
 <div>
    <div style="width:500px; border:1px solid #999; margin:150px auto">
    <div style="margin:10px 0 20px 150px; width:250px">欢迎来到小艾后台管理系统</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="forms">
      <el-form-item label="请输入用户名" prop="usernamess">
        <el-input v-model="ruleForm.usernamess"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码" prop="passwordss">
        <el-input v-model="ruleForm.passwordss"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">点击注册</el-button>
        <el-button type="primary" @click="logon">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       ruleForm:{
            usernamess:'',
            passwordss:''
        },
        rules:{
          usernamess:[
             {required:true, message:'用户名不能为空', trigger:'blur'}
           ],
          passwordss:[
             {required:true, message:'密码不能为空', trigger:'blur'},
             {min:6, max:11, message:'密码需在6-11之间', trigger:'blur'}
           ]
        }
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.forms {
  margin: 30px auto;
  width: 400px;
}
</style>