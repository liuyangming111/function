<template>
 <div v-if="username">
    <div>
        <div>欢迎{{username.username}}来到小艾后台管理系统</div>
        <div>亲爱的{{username.username}} 上次登录的时间：{{username.date}}</div>
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
         username:{}
     }
   },
   methods: {
       let d
   },
   mounted() {
    this.username=JSON.parse(localStorage.getItem('user'))
    console.log(this.username)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>