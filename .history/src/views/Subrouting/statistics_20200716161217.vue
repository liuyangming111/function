<template>
  <div>
    <div class="title">
      <div class="top_1">
        <div>
          <div>今日发布</div>
          <div style="margin-left:25px">{{count1.length}}</div>
        </div>
        <div>
          <i class="el-icon-check"></i>
        </div>
      </div>
      <div class="top_2">
        <div>
          <div>原创文章</div>
          <div style="margin-left:25px">?</div>
        </div>
        <div>
          <i class="el-icon-tickets"></i>
        </div>
      </div>
      <div class="top_3">
        <div>
          <div>新留言</div>
          <div style="margin-left:20px">0</div>
        </div>
        <div>
          <i class="el-icon-bell"></i>
        </div>
      </div>
      <div class="top_4">
        <div>
          <div>新消息</div>
          <div style="margin-left:20px">0</div>
        </div>
        <div>
          <i class="el-icon-phone-outline"></i>
        </div>
      </div>
    </div>
    <div class="Pie_chart">
      <div>
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div>
        <ve-pie :data="chartDatas" :settings="chartSettings"></ve-pie>
      </div>
    </div>
    <div>
      <ve-waterfall :data="chartDatass"></ve-waterfall>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
import lodash from "lodash";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: ["分类", "数量"],
        rows: []
      },
      chartDatas: {
        columns: ["分类", "数量"],
        rows: []
      },
      chartDatass: {
          columns: ['时间', '数量'],
          rows: []
        },
      count1:'',
      arr:[],
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
       let a= 0
          this.count1 = dayjs().format('YYYY年MM月DD日')
          console.log("mnb"+this.count1)
          res.data.data.map((item)=>{
            item.date=dayjs(item.date).format('YYYY年MM月DD日')
            if(this.count1===)
            console.log(item.date)
            if(this.date===.itemdate){
              this.count1.push(item)
            }
          })
          console.log(this.count1)
          let category = lodash.groupBy(res.data.data, "category");
          for (let i in category) {
            let obj = {};
            obj["分类"] = i;
            obj["数量"] = category[i].length;
            this.chartData.rows.push(obj);
            // console.log(obj);
          }
          let source = lodash.groupBy(res.data.data, "source");
          for (let i in source) {
            let obj = {};
            obj["分类"] = i;
            obj["数量"] = source[i].length;
            this.chartDatas.rows.push(obj);
            // console.log(obj);
          }
            res.data.data.map(item => {
              item.date = dayjs(item.date).format("YYYY年MM月DD日");
            });
          let date = lodash.groupBy(res.data.data, "date");
          for (let i in date) {
            let obj = {};
            obj["时间"] = i;
            obj["数量"] = date[i].length;
            this.chartDatass.rows.push(obj);
            // console.log(obj);
          }
          // console.log(this.chartDatass)
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
  computed: {

  }
};
</script>

<style scoped>
.title {
  display: flex;
  height: 60px;
  color: white;
}
.title > div {
  width: 25%;
}
.title > div > div {
  margin: 10px 10px 10px 80px;
}
.top_1 {
  background-color: rgb(176, 12, 209);
  display: flex;
}
.top_2 {
  background-color: cornflowerblue;
  display: flex;
}
.top_3 {
  background-color: rgb(237, 100, 100);
  display: flex;
}
.top_4 {
  background-color: rgb(166, 237, 100);
  display: flex;
}
i {
  margin-top: 10px;
}
.Pie_chart div {
  width: 700px;
  margin: 50px 0;
}
.Pie_chart {
  display: flex;
}
</style>