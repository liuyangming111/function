<template>
 <div v-if="username.length>0">
    <div>
        <div>欢迎来到小艾后台管理系统</div>
        <div></div>
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
         username:[]
     }
   },
   methods: {
       
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