<template>
 <div v-if="username">
    <div class="top_1">
        <div>欢迎{{username.username}}来到小艾后台管理系统</div>
        <div style="display: flex;"> 
            <div>早上好</div>
            <div>中午好</div>
            <div>下午好</div>
            <div>晚上好</div>
            <div>该睡觉了</div>
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
    let now=Date.now()
    let time=now - dayjs(username.date).valueOf()
    console.log(time)
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