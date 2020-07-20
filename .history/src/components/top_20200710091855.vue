<template>
 <div>
    <div>
        <div>欢迎{{username[0].username}}来到小艾后台管理系统</div>
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
    this.username=JSON.parse(localStorage.setItem('user'))
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>