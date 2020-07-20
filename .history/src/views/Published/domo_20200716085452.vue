<template>
  <div>
    <div class="title">
      <el-button type="danger" @click="returns">返回发布</el-button>
      <el-button type="primary">确认修改</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    returns(){
        
    }
  },
  mounted() {},
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