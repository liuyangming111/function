<template>
  <div>
    <div class="title">
      <div c>
        <div>
          <div>今日发布</div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div style="display: flex;">
        <div>
          <div>原创文章</div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div style="display: flex;">
        <div>
          <div>新留言</div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div style="display: flex;">
        <div>
          <div>新消息</div>
          <div></div>
        </div>
        <div></div>
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
.title>div{
  
}
</style>