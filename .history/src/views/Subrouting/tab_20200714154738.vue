<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">
        <div v-if="arr.length>0">
          <div v-for="(item, index) in arr" :key="index" class="box">
            <div style="width:70%">{{item.name}}</div>
            <div style="width:20%">{{item.time}}</div>
            <div class="box_1" @click="unread(item, index)">标为已读</div>
          </div>
          <br>
          <el-button type="primary" @click="Read">全部标为已读</el-button>
        </div>
        <div v-else class="nodata">暂无数据</div>
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second">
        <div v-if="brr.length>0">
          <div v-for="(item, index) in brr" :key="index" class="box">
            <div style="width:70%">{{item.name}}</div>
            <div style="width:20%">{{item.time}}</div>
            <div class="box_1" @click="deletes(item, index)">删除</div>
          </div><br>
          <el-button type="danger">删除全部</el-button>
        </div>
        <div v-else class="nodata">暂无数据</div>
      </el-tab-pane>
      <el-tab-pane label="回收站" name="third">
        <div v-if="crr.length>0">
          <div v-for="(item, index) in crr" :key="index" class="box">
            <div style="width:70%">{{item.name}}</div>
            <div style="width:20%">{{item.time}}</div>
            <div class="box_2" @click="reduction(item, index)">还原</div>
          </div><br>
           <el-button type="info">清空回收站</el-button>
        </div>
        <div v-else class="nodata">暂无数据</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: "second",
      arr: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          name: "今晚12点整发大红包，先到先得",
          time: "2018-04-19 21:00:00"
        }
      ],
      brr: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        }
      ],
      crr: [
        {
          name: "[系统通知]您的优惠卷已经过期",
          time: "2018-04-19 20:00:00"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    unread(item, index) {
      this.arr.splice(index, 1);
      this.brr.push(item);
    },
    deletes(item, index) {
      this.brr.splice(index, 1);
      this.crr.push(item);
    },
    reduction(item, index) {
      this.crr.splice(index, 1);
      this.arr.push(item);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  border-bottom: 1px solid;
  div {
    height: 60px;
    line-height: 60px;
  }
  .box_1 {
    width: 80px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border: 1px solid;
    margin-top: 10px;
    cursor: pointer;
  }
  .box_2 {
    width: 80px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    margin-top: 10px;
    cursor: pointer;
    background-color: orange;
  }
}
.nodata {
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: rgb(223, 253, 253);
  text-align: center;
  padding-top: 20px;
}
</style>