<template>
 <div style="background-color: rgb(240,242,245)">
    <div style="display: flex;">
      <div class="top_1">
        <div><img src="../../../img/tu1.png" alt=""></div>
        <div>
          <div style="color:#999">New Visits</div>
          <countTo :startVal='startVal' :endVal='arr.messages' :duration='3000' style="margin-left:40px"></countTo>
        </div>
      </div>
      <div class="top_1">
        <div><img src="../../../img/tu2.png" alt=""></div>
        <div>
          <div style="color:#999">Messages</div>
          <countTo :startVal='startVal' :endVal='arr.purchases' :duration='3000' style="margin-left:40px"></countTo>
        </div>
      </div>
      <div class="top_1">
        <div><img src="../../../img/tu3.png" alt=""></div>
        <div>
          <div style="color:#999">Purchases</div>
          <countTo :startVal='startVal' :endVal='arr.shopping' :duration='3000' style="margin-left:40px"></countTo>
        </div>
      </div>
      <div class="top_1">
        <div><img src="../../../img/tu4.png" alt=""></div>
        <div>
          <div style="color:#999">Shoppings</div>
         <countTo :startVal='startVal' :endVal='arr.visits' :duration='3000' style="margin-left:40px"></countTo>
        </div>
      </div>
    </div>
   <!--<img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">-->
 </div>
</template>

<script>
import countTo from 'vue-count-to';
import axios from "axios";
 export default {
   name: '',
   props: {
   },
   components: {
     countTo

   },
   data () {
     return {
       startVal: 0,
        endVal: '',
       arr:{},
       brr:''
     }
   },
   methods: {
      getData() {
            axios.get("/api/homeData")
              .then(res => {
                if (res.data.code===0) {
                  this.arr = res.data.data;
                }
                console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          },
      etData() {
            axios.get("/api/homeChat")
              .then(res => {
                if (res.data.code===0) {
                  this.brr = res.data;
                }
                console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          },    
   },
   mounted() {
     this.getData()
     this.etData()
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
    background-color: white;
    margin: 12px;
    flex-wrap: wrap;;
    width: 23%;
     box-shadow: 10px 10px 20px 10px rgba(255,255,0,0.5)
    div{
      margin: 6px;
      margin-left: 30px;
    }
  }
</style>