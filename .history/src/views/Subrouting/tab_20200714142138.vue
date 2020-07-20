<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="first">
      
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column prop="NAME" label="名称" width="310" align="center"></el-table-column>
          <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="180" align="center"></el-table-column>
          <el-table-column prop="ORI_PRICE" label="原价" width="180></el-table-column>
          <el-table-column prop="PRESENT_PRICE" label="现价" width="180" ></el-table-column>
          <el-table-column width="270" align="right">
            <template slot-scope="scope">
              <el-button type="primary" @click="clickbtn(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, arr)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

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
      tableData: "",
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
</style>