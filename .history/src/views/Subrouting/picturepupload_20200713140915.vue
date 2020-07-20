<template>
 <div>
    <h2>支持拖拽</h2>
    <div class="box">Element UI自带上传组件</div>
    <el-upload
      class="upload-demo"
      drag
      action="/api/upload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
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
  .box{
    width: 90%;
    border: 1px solid #999;
    background-color: #999;
    padding: 20px;
    margin: 20px 0;
  }
</style>