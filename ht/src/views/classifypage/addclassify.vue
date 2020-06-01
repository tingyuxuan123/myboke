<template>
<div class='addclassify'>
    <el-input
  placeholder="输入分类"
  v-model="input"
  clearable>
</el-input>

   <el-button type="primary" class="btn"  plain @click="addbtn()">添加分类</el-button> 

</div>
</template>

<script>
import {addclassify} from "../../network/request"
export default {
components: {},
data() {
return {
input:''
};
},
computed: {},
watch: {},
methods: {
    addbtn(){
        addclassify(this.input).then((result) => {
         
          this.$message({message:result.data.msg, type: 'success'});
        }).catch((err) => {
            
        });
    }
},
created() {

},
mounted() {

},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.addclassify{
  // height: 500px;
 
}
.btn{
  margin-top: 50px;
    margin-left: 50%;
    transform: translate(-50%, 10px);
}
</style>