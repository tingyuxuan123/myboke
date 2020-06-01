<template>
<div class='classify'>
    <div class="top"><i class="iconfont icon-wenjian"></i>分类</div>
    <div class="content">
        <ul>
            <li v-for="item in classifyinfo" :key="item.classify">
               <span>{{item.classify}} </span>  <span class="nummber">{{item.number}}</span> 
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
components: {},
data() {
return {
classify:[],
classifyinfo:[],
};
},
computed: {},
watch: {},
methods: {
   getarticle(){
        this.$api.getarticle(null,null,{status:1}).then((result) => {
          //  this.articlenum=result.data.length

            result.data.map((item)=>{
                if(!this.classify.includes(item.classify)){
                    // console.log(!this.classify.includes(item.classify))
                    this.classify.push(item.classify)
                    this.classifyinfo.push({classify:item.classify,number:1})
                }else{
                    this.classifyinfo.map((zitem)=>{

                        if(zitem.classify==item.classify){
                            zitem.number+=1;
                        }
                    })
                    
                }
            }) 
   
        }).catch((err) => {
            console.log(err);
        });
    },    
},
// created() {

// },
mounted() {
    this.getarticle();
},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.classify{
    overflow: hidden;
    margin-top: 20px;
    border-radius: 8px;
    background: #fff;
    -webkit-box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
    box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    -ms-transition: all 0.3s;
    transition: all 0.3s;
    padding: 20px 24px;
    box-sizing: border-box;
      color: #4c4948;
}
.top{
       color: #4c4948;
       margin-bottom:10px;
    
    i{
        font-size: 20px;
        margin-right: 5px;
         color: #4c4948;
    }
}

.content{
    ul{
    margin:0px;
    padding:0px;
}
    ul>li{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        list-style: none;
        padding:0 10%;
        transition: all 0.3s;
        cursor: pointer;
        line-height: 2.5;

        &:hover{
            color: #fff;
           background: rgba(0,0,0,0.75);
    
             }
    }
}
</style>        