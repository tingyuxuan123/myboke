<template>
<div class='write_list'>
   <el-table
    :data="tableData"
   
    border
    style="width: 100%">
    <el-table-column
      prop="_id"
      label="ID"
      width="230">
    </el-table-column>
    <el-table-column
      prop="articletitle"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="addtime"
      width="150"
      label="日期">
    </el-table-column>
    <el-table-column
      prop="readnum"
      width="80"
      label="浏览量">
    </el-table-column>
    <el-table-column
      prop="likenum"
      width="80"
      label="点赞量">
    </el-table-column>
    <el-table-column
      prop="classify"
      width="120"
      label="分类">
    </el-table-column>
    <el-table-column
      prop="status"
      label="操作">
    <template slot-scope="scope">
      <el-button v-if="scope.row.status==1" type="primary" size="mini" @click="down(scope.row._id)">下架</el-button>
      <el-button v-else type="primary" size="mini" @click="send(scope.row._id)" >发布</el-button>
        <el-button type="warning" size="mini" @click="updata(scope.row._id)">修改</el-button>
      <el-button type="danger" size="mini" @click="deleteboke(scope.row._id)">删除</el-button>
    </template>
     
    
    </el-table-column>
  </el-table>
  <el-pagination

  style="text-align: center; margin-top:20px"
   background
   :page-size="8"
   layout="prev, pager, next,jumper"
   @current-change="pagechange"
   :total="total">
</el-pagination>
</div>
</template>

<script>
import {getarticle,updatearticle,deletearticle} from '../../network/request'
export default {
components: {},
data() {
return {
    tableData:[], // 博客数据
    total:null,     //获取数据的总数目
    currentPage:1 //设置当前页面
};
},
computed: {},
watch: {},
methods: {
  getarticle(){  ///获取全部文章
    getarticle().then((result) => {
 //     this.tableData=result.data;
      this.total=result.data.length;  //获取文章总长度
  //  console.log(this.total);  

  //    console.log(result)
    }).catch((err) => {
      
    });
  },
    getcurrentpagearticle(){  ///获取当前页面文章
    getarticle(this.currentPage,8).then((result) => {
      this.tableData=result.data;
    //  this.total=this.tableData.length;
  //  console.log();  

   //   console.log(result)
    }).catch((err) => {
      
    });
  },
  updata(data){  //修改
    
  },
  down(id){
    
    updatearticle(id,0).then((result) => {
     // alert(result.data.msg)
       this.$message({message:result.data.msg, type: 'success'});
     this.getcurrentpagearticle()
    }).catch((err) => {
      
    });
  },
  send(id){
   updatearticle(id,1).then((result) => {
     //  alert(result.data.msg)
         this.$message({message:result.data.msg, type: 'success'});
       this.getcurrentpagearticle()
    }).catch((err) => {
      
    });
  },
  deleteboke(data){

     this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

             deletearticle(data).then((result) => {
   //   alert(result.data.msg)
         this.$message({message:result.data.msg, type: 'success'});
         this.getarticle();
      this.getcurrentpagearticle()
    }).catch((err) => {
      
    });
        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

 
  },
  pagechange(val){
    this.currentPage=val
    this.getcurrentpagearticle()
   
  }
  
},
created() {

},
mounted() {
this.getarticle();
this.getcurrentpagearticle();
},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.write_list{
    height: 100%;
}
</style>