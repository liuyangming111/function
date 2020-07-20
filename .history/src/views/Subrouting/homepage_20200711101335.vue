<template>
 <div style="background-color: rgb(240,242,245)">
    <div style="display: flex;">
      <div class="top_1">
        <div><img src="../../../img/tu1.png" alt=""></div>
        <div>
          <div>New Visits</div>
          <div>{{messages}}</div>
        </div>
      </div>
      <div class="top_1">
        <div><img src="../../../img/tu2.png" alt=""></div>
        <div>
          <div>Messages</div>
          <div></div>
        </div>
      </div>
      <div class="top_1">
        <div><img src="../../../img/tu3.png" alt=""></div>
        <div>
          <div>Purchases</div>
          <div></div>
        </div>
      </div>
      <div class="top_1">
        <div><img src="../../../img/tu4.png" alt=""></div>
        <div>
          <div>Shoppings</div>
          <div></div>
        </div>
      </div>
    </div>
   <!--<img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">-->
 </div>
</template>

<script>
import axios from "axios";
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       arr:{},
       brr:''
     }
   },
   methods: {
      getData() {
            axios.get("/api/homeData")
              .then(res => {
                if (res.data.length > 0) {
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
                if (res.data.length > 0) {
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
  }
</style>