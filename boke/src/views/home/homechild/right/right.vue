<template>
  <div class="right">
    <div
      v-for="(item, index) in articledata"
      :key="item._id"
      class="article"
      :style="{ flexDirection: index % 2 != 0 ? 'row-reverse' : 'row' }"
    >
      <div class="articleimg">
        <img :src="item.imgurl" alt="" srcset="" />
      </div>
      <div class="articleinfo">
        <div class="info">
          <div class="title" @click="toarticle(item._id)">
            {{ item.articletitle }}
          </div>
          <div class="classify">
            <span
              ><i class="iconfont icon-calendar" style="fontSize:18px"></i>
              {{ item.addtime | creatdata }}</span
            >
            |
            <span
              ><i
                class="iconfont icon-leibieguanli_icox"
                style="fontSize:16px"
              ></i>
              {{ item.classify}}</span
            >
            >
            <span
              ><i
                class="iconfont icon-xinicon_huabanfuben"
                style="fontSize:14px"
              ></i>
              {{ item.span }}</span
            >
          </div>
          <div class="content">
            {{ item.articlecontenthtml  | textfilter  }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "../../../../util/utils";
import textfilter from "../../../../util/textfilter";
export default {
  name: "",
  props: [""],
  data() {
    return {
      articledata: null,
    };
  },

  components: {},

  computed: {},

  // beforeMount() {},

  mounted() {
    this.getarticle(); //获与文章
  },
  filters: {
    creatdata: function(value) {
      //时间戳转换
      if (value.lenght == 10) {
        const date = new Date(value * 1000);

        return formatDate(date, "yyyy-MM-dd");
      } else {
        const date = new Date(parseInt(value));
        return formatDate(date, "yyyy-MM-dd");
      }
    },
    textfilter:function(value){
       //   value=value+""
       if(value!=null){
        var a=  value.replace(/<[^>]+>/g,"");
        return a
       }
     
    }
      },
  methods: {
    getarticle() {
      this.$api
        .getarticle(null, null, { status: 1 })
        .then((result) => {
          this.articledata = result.data;
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toarticle(id) {
      this.$router.push({
        name: "article",
        query: { id },
      });
    },
  },

  watch: {},
};
</script>
<style lang="less" scoped>
.right {
  width: 73%;
}
.article {
  overflow: hidden;
  margin-top: 20px;
  border-radius: 8px;
  background: #fff;
  -webkit-box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06);
  box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06);
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
  display: flex;
  height: 280px;

  &:hover {
    box-shadow: 0 4px 8px 15px rgba(7, 17, 27, 0.08);
    //   transform: translate(0,-5px);

    img {
      transform: scale(1.2, 1.2);
    }
  }

  .articleimg {
    flex: 10;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.6s;
    }
  }
  .title {
    color: #2e2e2e;
    font-size: 24px;
    margin-bottom: 10px;
    line-height: 1.4;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .title:hover {
    color: #49b1f5;
  }
  .articleinfo {
    flex: 12;
    overflow: hidden;
    box-sizing: border-box;
    .info {
      padding: 10%;

      //   margin: 10%;

      box-sizing: border-box;
    }
  }
  .classify {
    font-size: 14px;
    color: #858585;
  }
  .content {
    margin-top: 10px;
    height: 100px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
}
</style>
