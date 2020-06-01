<template>
<div class='userinfo'>
    <div class="top">
        <img src="../../assets/touxiang.jpg" alt="">
        <h3>听雨轩</h3>
    </div>
    <div class="ownspan">
        愿一生无忧无虑
    </div>
    <div class="center">
        <div>
            <span>文章</span>
            <span>{{articlenum}}</span>
        </div>
        <div>
             <span>分类</span>
             <span>{{classifynum}}</span>
        </div>
        <div>
             <span>标签</span>
             <span>{{spannumm}}</span>
        </div>

    </div>
    <hr style="margin:0 15px">
    <div class="link">
        <a href="https://github.com/tingyuxuan123"><i class="iconfont icon-github"></i></a>
        <a href="https://space.bilibili.com/36020856"><i class="iconfont icon-bilibili-line"></i></a>
    </div>
</div>
</template>

<script>
export default {
components: {},
data() {
return {
    articlenum:null,
    classifynum:null,
    spannumm:null
};
},
computed: {},
watch: {},
methods: {
    getarticle(){
        this.$api.getarticle(null,null,{status:1}).then((result) => {
            this.articlenum=result.data.length
        //    console.log(this.articlenum);
        }).catch((err) => {
            console.log(err);
        });
    },
    getclassify(){
        this.$api.getclassify().then((result) => {
             this.classifynum=result.data.length
        //     console.log(result);
        }).catch((err) => {
               console.log(err);
        });
    },
    getspan(){
        this.$api.getspan().then((result) => {
             this.spannumm=result.data.length
          //   console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }
},
// created() {

// },
mounted() {
    this.getarticle();
    this.getclassify();
    this.getspan();
},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.userinfo{
    // width: 25%;
    // height: 366px;
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
}

.userinfo:hover{
    box-shadow: 0 4px 8px 15px rgba(7,17,27,0.08);
}

.top{
    display: flex;
  
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-top:10px;
    }

  

}
.ownspan{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
  .center{
        display: flex;
        justify-content: space-evenly;
        
        div{
            display: flex;
            flex-direction: column;
            align-content: space-between;
            justify-content: space-evenly;
            height: 60px;
            text-align: center;
            cursor: pointer;
        }
    }

    .link{
           display: flex;
        justify-content: center;
        a{
        color: #4c4948;
        text-decoration: none;
        margin: 10px;
        i{
        font-size: 24px;
        }
        }
    }

</style>