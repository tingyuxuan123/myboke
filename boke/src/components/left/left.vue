<template> 
<div class='left'>  
    <user-info></user-info>
    <classify></classify>
</div>
</template>

<script>
import UserInfo from '../user/userinfo'
import classify from '../classify/classify'
export default {
components: {
    UserInfo,
    classify
},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
// created() {

// },
// mounted() {  //加载

// },
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.left{
    width: 25%;
    
}
</style>