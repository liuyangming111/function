<template>
 <div v-if="username">
    <div class="top_1">
        <div>欢迎{{username.username}}来到小艾后台管理系统</div>
        <div style="display: flex;"> 
            <div v-if="hour>=6 && hour<12">早上好</div>
            <div v-if="hour>=12 && hour<14">中午好</div>
            <div v-if="hour>=14 && hour<18">下午好</div>
            <div v-if="hour>=18 && hour<24">晚上好</div>
            <div v-if="hour>=0 && hour<6">该睡觉了</div>
            <div>，亲爱的{{username.username}}，上次登录的时间：{{this.time1}}</div>
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
         username:{},
         hour:null,
         time1:null 
                                                                                                                                                                                                                                                                                                                                                                                                                      
     }
   },
   methods: {
       
   },
   mounted() {
    this.username=JSON.parse(localStorage.getItem('user'))
    console.log(this.username)
    this.hour=dayjs().hour()
    console.log(this.hour)
    let time =this.username.date
    let time1=dayjs(time).format('YYYY年MM月DD日 hh:mm:ss')
    console.log(time1)
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