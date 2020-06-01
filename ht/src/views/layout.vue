<template>
<div class='layout'>
    <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '5']" router :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-edit"></i>博文管理</template>
        <el-menu-item index="write_list" >博文列表</el-menu-item>
        <el-menu-item index="/writearticle" >添加博文</el-menu-item>
      </el-submenu>
        <el-menu-item index="comment_list"  ><i class="el-icon-chat-dot-square" ></i>评论管理</el-menu-item>
   

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>分类管理</template>
         <el-menu-item index="classify_list" >分类列表</el-menu-item>
        <el-menu-item index="addclassify" >添加分类</el-menu-item>
      </el-submenu>

       <el-submenu index="4">
        <template slot="title"><i class="el-icon-price-tag"></i>标签管理</template>
         <el-menu-item index="tag_list" >标签列表</el-menu-item>
        <el-menu-item index="addtag" >添加标签</el-menu-item>
      </el-submenu>

         <el-submenu index="5">
        <template slot="title"><i class="el-icon-share"></i>链接管理</template>
         <el-menu-item index="link_list" >链接列表</el-menu-item>
        <el-menu-item index="addlink" >添加链接</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-aside>


  <el-container>
    <el-header style="text-align: right; font-size: 12px">


      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>听雨轩</span>
    </el-header>
    
    <el-main>
     
        <router-view/>

    </el-main>
  </el-container>
  </el-container>

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
    torouter(index){
      console.log(index)
      switch(index){
        case '1-1' :
        this.$router.push({name:'write_list'})
        break;
        case '1-2' :
        this.$router.push({name:'writearticle'})
        console.log(index)
        break;
        case '1-1' :
        this.$router.push({name:write_list})
        break;
        case '1-1' :
        this.$router.push({name:write_list})
        break;
        case '1-1' :
        this.$router.push({name:write_list})
        break;
        case '1-1' :
        this.$router.push({name:write_list})
        break;
        case '1-1' :
        this.$router.push({name:write_list})
        break;
        case '1-1' :
        this.$router.push({name:write_list})
        break;
      }

    }
},
created() {

},
mounted() {

},
}
</script>
<style  scoped>
/* //@import url(); 引入公共css类 */
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .layout{
      height: 100%;
  }

</style>