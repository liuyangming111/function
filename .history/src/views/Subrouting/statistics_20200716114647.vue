<template>
  <div>
    <div class="title">
      <div class="top_1">
        <div>
          <div>今日发布</div>
          <div style="margin">?</div>
        </div>
        <div><i class="el-icon-check"></i></div>
      </div>
      <div class="top_2">
        <div>
          <div>原创文章</div>
          <div>?</div>
        </div>
        <div><i class="el-icon-tickets"></i></div>
      </div>
      <div class="top_3">
        <div>
          <div>新留言</div>
          <div>0</div>
        </div>
        <div><i class="el-icon-bell"></i></div>
      </div>
      <div class="top_4">
        <div>
          <div>新消息</div>
          <div>0</div>
        </div>
        <div><i class="el-icon-phone-outline"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr:[]
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          if (res.data.code === 200) {
            this.arr = res.data.data;
          }
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.title{
  display: flex;
  height: 60px;
  color: white;
}
.title>div{
  width: 25%;
}
.title>div>div{
  margin: 10px 10px 10px 80px;
}
.top_1{
  background-color: rgb(176, 12, 209);
  display: flex;
}
.top_2{
  background-color: cornflowerblue;
  display: flex;
}
.top_3{
  background-color: rgb(237, 100, 100);
  display: flex;
}
.top_4{
  background-color: rgb(166, 237, 100);
  display: flex;
}
i{
  margin-top: 20px;
}

</style>