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
    <h2>支持裁剪</h2>
    <div class="box">vue-image-crop-upload</div>
    <div id="app">
      <button class="btn" @click="toggleShow">设置头像</button>
     <my-upload  
      @crop-success="cropSuccess" 
      @crop-upload-success="cropUploadSuccess"
     @crop-upload-fail="cropUploadFail"
      v-model="show" 
     :width="200" 
    :height="200" 
    img-format="png" 
    :size="size"
    langType='zh'
     :noRotate='false'
     field="Avatar1"
     url="https://httpbin.org/post"></my-upload>
     <img :src="imgDataUrl">
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
    border: 1px solid #eee;
    background-color: #eee;
    padding: 20px;
    margin: 10px 0;
  }
</style>