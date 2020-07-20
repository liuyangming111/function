<template>
  <div>
    <el-container>
      <el-header style="background-color: salmon;"><top></top></el-header>
      <el-container>
        <el-aside width="200px" style="background-color: seagreen;">Aside</el-aside>
        <el-main style="background-color: skyblue; height:500px">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import top from "../components/top";
export default {
  name: "",
  props: {},
  components: {
    top
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>