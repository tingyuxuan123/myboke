<template>
<div class='tag_list'>
         <el-table
    :data="tableData"
   
    border
    style="width: 100%">
    <el-table-column
      prop="_id"
      label="ID"
      width="250">
    </el-table-column>
    <el-table-column
      prop="span"
      label="标签"
      width="180">
    </el-table-column>
    
    <el-table-column
      label="操作">

     <template slot-scope="scope">
       <el-button type="warning" @click="_updatespan(scope.row._id)" size="mini">修改</el-button>
      <el-button type="danger" @click="_deletespan(scope.row._id)" size="mini">删除</el-button>
     </template>

    </el-table-column>
  </el-table>

</div>
</template>

<script>
import {getspan,updatespan,deletespan} from '../../network/request'
export default {
components: {},
data() {
return {
tableData:null
};
},
computed: {},
watch: {},
methods: {
    getspan(){

    getspan().then((result) => {
      console.log(result.data)
      this.tableData=result.data
    }).catch((err) => {
  
} );
},
      _updatespan(id){
   
     this.$prompt('请输入新的分类', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern:  /\S/,
          inputErrorMessage: '输入不能为空'
        }).then(({ value }) => {
          //修改分类
       
          updatespan(id,value).then((result) => {
                this.$message({
            type: 'success',
            message: '修改成功'
          });
         this.getspan()
          }).catch((err) => {
            
          });


        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });       
        });
  },
  _deletespan(id){

     this.$confirm('此操作将永久删除该分类为, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

            deletespan(id).then((result) => {
   //   alert(result.data.msg)
         this.$message({message:"删除成功", type: 'success'});
         this.getspan()
    }).catch((err) => {
      
    });
        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

  }

},
created() {

},
mounted() {
  this.getspan()
},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.tag_list{
    height: 100%;
  width: 612px;
  margin: 0px 50%;
  transform: translate(-50%);

}
</style>