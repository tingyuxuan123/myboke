<template>
<div class='util'>
      <el-button type="primary" plain>打赏</el-button>
      <el-button type="success" plain>点赞</el-button>
      <el-button type="warning" plain>分享</el-button>

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
.util{
    display: flex;
    justify-content: center;
    
    button{
        width: 132px;
        height: 42px;
        margin: 0px 10px;
    }
    
}

</style>