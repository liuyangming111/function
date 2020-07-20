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
      <div class="btn" @click="toggleShow">点击上传</div>
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
 import 'babel-polyfill'; // es6 shim
  import myUpload from 'vue-image-crop-upload';
  export default {
    data() {
      return {
        imgDataUrl: "",
        show: false,
        size:2.1
      }
    },
    components: {
      "my-upload": myUpload
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------',imgDataUrl, field);
        },
        //上传成功回调
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            this.imgDataUrl = jsonData.files.Avatar1;
            console.log(jsonData);
            console.log('field: ' + field);
        },
        //上传失败回调
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log('上传失败状态'+ status);
            console.log('field: ' + field);
        }
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
  .btn{
    width: 100px;
    height: 40px;
    background-color: royalblue;
    border-radius: 5px;
    color: seashell;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
</style>