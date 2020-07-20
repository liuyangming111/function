<template>
 <div>
    <div class="box">
        <div><ve-radar :data="chartData"></ve-radar></div>
        <div><ve-pie :data="chartDatas"></ve-pie></div>
        <div><ve-histogram :data="chartDatass"></ve-histogram></div>
    </div>
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
          chartData: {
          columns: ['name',],
          rows: [
           
          ]
        },
        // chartDatas: {
        //   columns: ['日期', '访问用户'],
        //   rows: [
            
        //   ]
        // },
        // chartDatass: {
        //   columns: ['日期', '访问用户', '下单用户', '下单率'],
        //   rows: [
          
        //   ]
        // }
     }
   },
   methods: {
    //    getData() {
    //         axios.get("/api/ringChat")
    //           .then(res => {
    //             if (res.data.code===0) {
    //               this.chartDatas.rows = res.data.data;
    //             }
    //             console.log(res.data.data);
    //           })
    //           .catch(err => {
    //             console.log(err);
    //           });
    //       },
         etData() {
            axios.get("/api/radarChat")
              .then(res => {
                if (res.data.code===0) {
                  this.chartData.rows = res.data.data;
                }
                console.log(res.data.data);
              })
              .catch(err => {
                console.log(err);
              });
          },
        //   tData() {
        //     axios.get("/api/homeData")
        //       .then(res => {
        //         if (res.data.code===0) {
        //           this.chartDatass.rows= res.data.data;
        //         }
        //         console.log(res.data.data);
        //       })
        //       .catch(err => {
        //         console.log(err);
        //       });
        //   }
   },
   mounted() {
    //    this.getData()
       this.etData()
    //    this.tData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
.box div{
    width: 30%;
}
.box{
    display: flex;
    justify-content: space-between;
}
</style>