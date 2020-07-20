<template>
 <div v-if="username">
    <div class="top_1">
        <div>欢迎{{username.username}}来到小艾后台管理系统</div>
        <div> 
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            ，亲爱的{{username.username}}，上次登录的时间：{{username.date}}
        </div>
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
       
   },
   mounted() {
    this.username=JSON.parse(localStorage.getItem('user'))
    console.log(this.username)
    let tim=Date.now()
    let hour = Math.ceil((tim - item.time) / 1000 / 60 / 60)
    console.log(hor)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.top_1{
    display: flex;
    justify-content: space-between;
    color: white;
    line-height: 60px;
}
</style>