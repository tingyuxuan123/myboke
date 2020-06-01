<template>
<div class='link_list'>
        <el-table
    :data="tableData"
    height="100%"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="博客名称"
      width="180">
    </el-table-column>
        <el-table-column
      prop="date"
      label="博客地址"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>

</div>
</template>

<script>
export default {
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
created() {

},
mounted() {

},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>