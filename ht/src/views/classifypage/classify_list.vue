<template>
<div class='classify_list'>
           <el-table
    :data="tableData"
   
    border
    style="width: 100%;  ">
    <el-table-column
      prop="_id"
      label="ID"
      width="250">
    </el-table-column>
    <el-table-column
      prop="classify"
      label="分类"
      width="180">
    </el-table-column>
    
    <el-table-column
    
      label="操作">
     <template slot-scope="scope">
       <el-button type="warning" @click="_updateclassify(scope.row._id)" size="mini">修改</el-button>
      <el-button type="danger" @click="_deleteclassify(scope.row._id)" size="mini">删除</el-button>
     </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import {getclassify,updateclassify,deleteclassify} from "../../network/request"
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
  getclassify(){

    getclassify().then((result) => {
      console.log(result.data)
      this.tableData=result.data
    }).catch((err) => {
  
} );
},
  _updateclassify(id){
   
     this.$prompt('请输入新的分类', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern:  /\S/,
          inputErrorMessage: '输入不能为空'
        }).then(({ value }) => {
          //修改分类
       
          updateclassify(id,value).then((result) => {
                this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.getclassify();
          }).catch((err) => {
            
          });


        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });       
        });
  },
  _deleteclassify(id){

     this.$confirm('此操作将永久删除该分类为, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

             deleteclassify(id).then((result) => {
   //   alert(result.data.msg)
         this.$message({message:"删除成功", type: 'success'});
         this.getclassify()
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
this.getclassify();
}
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.classify_list{
  height: 100%;
  width: 612px;
  margin: 0px 50%;
  transform: translate(-50%);

}
</style>