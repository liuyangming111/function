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
          columns: ['name','delelopmer','marketing','ministration','sales','techology'],
          rows: []
        },
        chartDatas: {
          columns: [ 'name','data'],
          rows: []
        },
        chartDatass: {
          columns: [ 'date','expected','actual'],
          rows: []
        }
     }
   },
   methods: {
       getData() {
            axios.get("/api/ringChat")
              .then(res => {
                if (res.data.code===0) {
                  this.chartDatas.rows = res.data.data;
                }
                console.log(res.data.data);
              })
              .catch(err => {
                console.log(err);
              });
          },
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
          tData() {
            axios.get("/api/homeData")
              .then(res => {
                if (res.data.code===0) {
                  this.chartDatass.rows= res.data.data;
                }
                console.log(res.data.data);
              })
              .catch(err => {
                console.log(err);
              });
          }
   },
   mounted() {
       this.getData()
       this.etData()
       this.tData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
.box div{
    flex: 1;
}
.box{
    display: flex;
    justify-content: space-between;
}
</style>