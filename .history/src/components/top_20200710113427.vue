<template>
 <div v-if="username">
    <div class="top_1">
        <div>欢迎{{username.username}}来到小艾后台管理系统</div>
        <div> 
            <div v-if="hour>=6 && hour<12">早上好</div>
            <div v-else-if="hour>=12 && hour<14">中午好</div>
            <div v-else-if="hour>=14 && hour<18">下午好</div>
            <div v-else-if="hour>=18 && hour<24">晚上好</div>
            <div v-else-if="hour>=0 && hour<6">该睡觉了</div>
            ，亲爱的{{username.username}}，上次登录的时间：{{username.date}}
        </div>
    </div>
 </div>
</template>

<script>
import dayjs from "dayjs"
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
    // d.getHours()
    let hour=dayjs().hour()
    console.log(hour)
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