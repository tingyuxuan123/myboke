<template>
<div class='addtag'>
 
    <el-input
  placeholder="请输入标签"
  v-model="input"
  clearable>
</el-input>

   <el-button type="primary" style="transform: translate(-50%, 150%); margin-left: 50%;" plain @click="addbtn()">添加标签</el-button> 

</div>
</template>

<script>
import {addspan} from '../../network/request'
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
        addspan(this.input).then((result) => {
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

</style>