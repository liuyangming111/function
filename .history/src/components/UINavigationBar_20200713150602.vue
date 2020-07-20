<template>
 <div>
   <div> 
      <el-menu>
     <el-menu-item index="1" @click="homepage">
        <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="Published">
        <i class="el-icon-document"></i>
        <span slot="title">已发表</span>
      </el-menu-item>
      <el-menu-item index="3" @click="statistics">
        <i class="el-icon-menu"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item index="4" @click="article">
        <i class="el-icon-check"></i>
        <span slot="title">发表文章</span>
      </el-menu-item>
       <el-menu-item index="5" @click="tab">
        <i class="el-icon-paperclip"></i>
        <span slot="title">标签页</span>
      </el-menu-item>
       <el-menu-item index="6" @click="exportr">
        <i class="el-icon-caret-top"></i>
        <span slot="title">导出Excel</span>
      </el-menu-item>
      <el-menu-item index="3" @click="statistics">
        <i class="el-icon-menu"></i>
        <span slot="title">fen</span>
      </el-menu-item>
       <el-menu-item index="7" @click="picturepupload">
        <i class="el-icon-sell"></i>
        <span slot="title">图片上传</span>
      </el-menu-item>
       <el-menu-item index="8" @click="signout">
        <i class="el-icon-setting"></i>
        <span slot="title">退出系统</span>
      </el-menu-item>
    </el-menu>
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

     }
   },
   methods: {
       homepage(){
           this.$router.push('/')
       },
       Published(){
           this.$router.push('/Published')
       },
       statistics(){
           this.$router.push('/statistics')
       },
       article(){
           this.$router.push('/article')
       },
       tab(){
           this.$router.push('/tab')
       },
       exportr(){
           this.$router.push('/export')
       },
       picturepupload(){
           this.$router.push('/picturepupload')
       },
       signout(){
           this.$router.push('/signout')
       },
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

</style>