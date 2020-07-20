<template>
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
       this.chartSettings = {
        metrics: ['访问用户', '下单用户'],
        dimension: ['日期']
      }
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>