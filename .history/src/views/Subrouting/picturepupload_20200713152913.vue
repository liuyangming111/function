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
 3     <button class="btn" @click="toggleShow">设置头像</button>
 4     <my-upload  
 5     @crop-success="cropSuccess" 
 6     @crop-upload-success="cropUploadSuccess"
 7     @crop-upload-fail="cropUploadFail"
 8     v-model="show" 
 9     :width="200" 
10     :height="200" 
11     img-format="png" 
12     :size="size"
13     langType='zh'
14     :noRotate='false'
15     field="file"
16     url="/api/uplaod"
withCredentials></my-upload>
17     <img :src="imgDataUrl">
18   </div>
 </div>
</template>

<script>
  import 'babel-polyfill'; // es6 shim
  import myUpload from 'vue-image-crop-upload';
 export default {
   name: '',
   props: {
   },
   components: {
      "my-upload": myUpload
   },
   data () {
     return {
       imgDataUrl: "",
        show: false,
        size:2.1
     }
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
            this.imgDataUrl = jsonData.files.file;
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
</style>