<template>
 <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="arr.length未读消息" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="已读消息" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="回收站" name="third">角色管理</el-tab-pane>
    </el-tabs>
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
       activeName: 'second',
       arr:[
         {
          name:'[系统通知]该系统将于今晚凌晨2点到5点进行升级维护',
          time:'2018-04-19 20:00:00'
         },
         {
           name:'今晚12点整发大红包，先到先得',
           time:'2018-04-19 21:00:00'
         }
       ],
       brr:[
         {
           []
         }
       ]  
     }
   },
   methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
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

</style>