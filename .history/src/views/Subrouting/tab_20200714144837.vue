<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">
      
        <div v-for="(item, index) in arr" :key="index" class="box">
          <div style="width:70%">{{item.name}}</div>
          <div style="width:20%">{{item.time}}</div>
          <div class="box_1">标为已读</div>
        </div>

      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="回收站" name="third">角色管理</el-tab-pane>
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
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
  .box{
    display: flex;
    border-bottom: 1px solid;
    div{
      height: 60px;
      line-height: 60px;
    }
    .box_1{
      width: 80px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      border: 1px solid;
    }
  }
</style>