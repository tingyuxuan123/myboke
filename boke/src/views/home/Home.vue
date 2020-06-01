<template>
  <div class="home">
    <tab-nav class="tabnav" ref="tabnav"></tab-nav>
    <div class="bg">
      <h2>my space</h2>
      <p ref="text">愿你出走半生，归来认是少年</p>
      <span
        ref="jiantou"
        class="iconfont icon-ai-arrow-down jiantou"
        @click="toxp()"
      ></span>
    </div>

    <div class="main" ref="main">
      <left></left>
      <right></right>
    </div>
    <!-- <canvas class="canvas"></canvas> -->
    <!-- <div class="bg01">
      
    </div>-->
  </div>
</template>

<script>
import TabNav from "../../components/tabnav/tabnav";
import left from "../../components/left/left";
import right from "../home/homechild/right/right";
import { start } from "../../util/bg";
export default {
  components: {
    TabNav,
    left,
    right
  },
  data() {
    return {
      nowscrool: 0,

    };
  },
  computed: {},
  watch: {},

  mounted() {
    this.$nextTick(() => {
      // start();
    this.typing();
    

      window.onscroll = () => {
        const scrollTop = parseInt(
          document.documentElement.scrollTop || document.body.scrollTop
        );
        if (scrollTop == 0) {
          this.$refs.tabnav.$el.style.backgroundColor =
            "rgba(255, 255, 255, 0)";
          this.$refs.tabnav.$el.style.color = "#EEE";
          this.$refs.tabnav.$el.style.boxShadow = "none";
        }
        if (
          scrollTop > 0 &&
          scrollTop < document.documentElement.clientHeight
        ) {
          this.$refs.tabnav.$el.style.backgroundColor =
            "rgba(255, 255, 255, 1)";
          this.$refs.tabnav.$el.style.color = "#3b3a3a";
          this.$refs.tabnav.$el.style.boxShadow =
            "0 5px 6px -5px rgba(133,133,133,0.6)";
        }

        if (scrollTop > document.documentElement.clientHeight) {
          this.$refs.tabnav.$el.style.backgroundColor =
            "rgba(255, 255, 255, .7)";
          this.$refs.tabnav.$el.style.color = "#3b3a3a";
          this.$refs.tabnav.$el.style.boxShadow =
            "0 5px 6px -5px rgba(133,133,133,0.6)";
        }

        if (this.nowscrool < scrollTop) {
          this.nowscrool = scrollTop;

          this.$refs.tabnav.$el.style.top = "-58px";

          console.log();
        }
        if (this.nowscrool > scrollTop) {
          this.nowscrool = scrollTop;
          this.$refs.tabnav.$el.style.top = "0px";
        }

        // console.log( scrollTop);
      };
    });


  },
  methods: {
    typing() {
      const str = "愿你出走半生，归来任是少年";
      let i = 0;

     const timer= setInterval(() => {
       if(this.$refs.text==null){
         clearInterval(timer);
       }else{


        this.$refs.text.innerText = str.slice(0, i) + "_";


        if(i>=str.length){

          clearInterval(timer);  //如果达到最大长度关闭循环


       const timer2=setInterval(()=>{

         
              i--
           this.$refs.text.innerText = str.slice(0, i) + "_";

           if(i<=0){
             clearInterval(timer2);

             return this.typing();
           // this.typing()   //一轮执行完后回调自身进行循环  死循环了不太行


           }

          },300)




            // i=0;
        }
          i++
       }


      }, 300);

      


    },
    toxp() {
      // const height= document.documentElement.clientHeight;
      const height = this.$refs.main.offsetTop; //滚动到的位置
      let nowheight = document.documentElement.scrollTop; //当前位置

      const time = setInterval(() => {
        // console.log(i)
        nowheight = nowheight + 15;
        window.scrollTo(0, nowheight);

        if (nowheight >= height) {
          clearInterval(time);
        }
      }, 10);
    }
  }
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.home {
  h2 {
    position: absolute;
    top: 150px;
    color: #fff;
    text-align: center;
    transform: translate(-50%, 0px);
    left: 50%;
  }
  p {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-50%, 0px);
    color: #fff;
    text-align: center;
  }
}

.bg {
  background-image: url("../../assets/bg01.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-position: 50% 50%;
  background-attachment: fixed;
  background-size: cover;
  font: 24px/1.5 "Microsoft YaHei";
  box-sizing: border-box;
  animation: header 1s;
  transition: all 0.6s;
  color: #000;
}
.bg01 {
  background-image: url("../../assets/yYCE.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-position: 50% 50%;
  background-attachment: fixed;
  // background-position: center center;
  background-size: cover;
  // font: 24px/1.5 "Microsoft YaHei";
  // line-height: 400px;
  // text-indent: -25em;
  box-sizing: border-box;
}
.jiantou {
  position: absolute;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
  top: 80vh;
  left: 50%;
  color: #fff;
  transition: all 0.3;
  animation: jiantou 1.5s infinite;
  z-index: 2;
  cursor: pointer;
}

@keyframes jiantou {
  0% {
    top: 90vh;
    color: aqua;
  }

  50% {
    top: calc(90vh + 20px);
  }

  100% {
    top: 0px;
    color: aqua;
    top: 90vh;
  }
}
@keyframes header {
  0% {
    opacity: 0;

    //  filter: alpha(opacity=0);
    transform: translateY(-50px);
  }

  100% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
}
@keyframes content {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.tabnav {
  position: fixed;
  top: 0px;
  z-index: 10;
  color: #fff;
  background-color: rgba(204, 204, 204, 0);
  height: 58px;
  transition: all 0.5s;
  box-shadow: none;
}

.main {
  // height: 1000px;
  background-color: #fff;
  background-attachment: fixed;
  margin: 0px 7%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  animation: content 1s;
  transition: all 0.6s;

  .canvas {
    display: block;
    position: relative;
    margin: 0px;
    padding: 0px;
    border: 0px;
    outline: 0px;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
