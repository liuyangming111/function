<template>
  <div>
    <div class="title">
      <el-button type="danger" @click="returns">返回发布</el-button>
      <el-button type="primary">确认修改</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    returns(){
        this.$router.push('/published')
    },
    getData(){
       axios.post('/api/article/update',{
         _id: this.id
       }).then(res=>{
         console.log(res.data.data)
         this.obj=res.data
       }).catch(err=>{
         console.log(err)
       })
     },
  },
  mounted() {
      this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title{
    display: flex;
    justify-content: space-around;
}
</style>