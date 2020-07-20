<template>
  <div>
    <el-container>
      <el-header style="background-color: rgb(46,94,133);"><top></top></el-header>
      <el-container>
        <el-aside width="200px" style="background-color: seagreen;"><UINavigationBar></UINavigationBar></el-aside>
        <el-main style="background-color: skyblue"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import top from "../components/top";
import UINavigationBar from "../components/UINavigationBar"
export default {
  name: "",
  props: {},
  components: {
    top,
    UINavigationBar
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