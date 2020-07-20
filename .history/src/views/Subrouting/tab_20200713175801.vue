<template>
 <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="未读消息" name="first">用户管理</el-tab-pane>
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
       arr:[{
         name:'[系统通知]该系列'
       }]
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