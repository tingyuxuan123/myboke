<template>
  <div class="tabnav" ref="tabnav">
    <span class="title">my space</span>
    <ul>
      <li><span class="iconfont icon-sousuo"></span> 搜索</li>
      <li><span class="iconfont icon-ai-article"></span>首页</li>
      <li><span class="iconfont icon-wenjian"></span>文章</li>
      <li><span class="iconfont icon-shouye"></span>分类</li>
      <li><span class="iconfont icon-tags"></span>标签</li>
      <li><span class="iconfont icon-fuzhilianjiemian"></span>链接</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      nowscrool: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  props: {},
  mounted() {
    this.$nextTick(() => {
      // start();
      //   this.typing();
      window.onscroll = () => {
        const scrollTop = parseInt(
          document.documentElement.scrollTop || document.body.scrollTop
        );
        if (scrollTop == 0) {
          this.$refs.tabnav.style.backgroundColor = "rgba(255, 255, 255, 0)";
          this.$refs.tabnav.style.color = "#EEE";
          this.$refs.tabnav.style.boxShadow = "none";
        }
        if (
          scrollTop > 0 &&
          scrollTop < document.documentElement.clientHeight
        ) {
          this.$refs.tabnav.style.backgroundColor = "rgba(255, 255, 255, 1)";
          this.$refs.tabnav.style.color = "#3b3a3a";
          this.$refs.tabnav.style.boxShadow =
            "0 5px 6px -5px rgba(133,133,133,0.6)";
        }

        if (scrollTop > document.documentElement.clientHeight) {
          this.$refs.tabnav.style.backgroundColor = "rgba(255, 255, 255, .7)";
          this.$refs.tabnav.style.color = "#3b3a3a";
          this.$refs.tabnav.style.boxShadow =
            "0 5px 6px -5px rgba(133,133,133,0.6)";
        }

        if (this.nowscrool < scrollTop) {
          this.nowscrool = scrollTop;

          this.$refs.tabnav.style.top = "-58px";

          console.log();
        }
        if (this.nowscrool > scrollTop) {
          this.nowscrool = scrollTop;
          this.$refs.tabnav.style.top = "0px";
        }

        // console.log( scrollTop);
      };
    });
  },
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类

.tabnav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 10;
  color: #fff;
  background-color: rgba(204, 204, 204, 0);
  height: 58px;
  transition: all 0.5s;
  box-shadow: none;
}

.title {
  width: 150px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
    width: 100px;
    cursor: pointer;
    text-align: center;
    transition: all 0.5s;
    span {
      margin-right: 5px;
    }

    // &:hover{
    //   //  margin-bottom:10px ;
    //     border-bottom: 3px solid green;
    //     padding-bottom:3px ;
    // }
  }
}
</style>
