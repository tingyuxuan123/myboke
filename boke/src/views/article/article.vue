<template>
  <div class="article">
    <div class="left" ref="left">
      <div class="toc" ref="toc">
        <h2>目录</h2>
        <div class="toc-content"></div>
      </div>
      <div class="article-tiantou" ref="tiantou">
        <i class="iconfont icon-jiantou-copy-copy" @click="jiantouclick()"></i>
      </div>
    </div>

    <div class="right">
      <tab-nav class="tabnav" ref="tabnav"></tab-nav>
      <div class="top" ref="top">
        <div class="article-info">
          <div class="article-info-title">
            {{title}}
          </div>
        </div>
      </div>
      <div class="main">
        <div class="content" id="content">
          <textarea style="display:none;" v-model="content"></textarea>
        </div>
        <util/>


      </div>
    </div>
  </div>
</template>
<script src="../../../public/lib/editor.md/lib/marked.min.js"></script>
<script>
import $ from "jquery";

//import uuid from 'uuid/v4'
import { defaultConfig } from "./config";
import TabNav from "../../components/tabnav/tabnav";
import util from "./articlechild/util"
export default {
  name: "",
  props: {
    /**
     * editormd挂载元素的id
     */
    editorId: {
      type: String,
      default: "content",
    },
    /**
     * editormd的选项对象
     */
    options: {
      type: Object,
    },
    initData: {
      type: String,
    },
    /*
     * 编辑器配置
     */
    config: {
      type: String,
    },
    /*
     *  内容改变时回调，返回（html, markdown, text
     */
    onchange: {
      type: Function,
    },
    data: function() {
      return {
        //最终生成的编辑器
        editor: null,
        timer: null,
        doc: {},
        jsLoadOver: false,
      };
    },
  },
  data() {
    return {
      title:null,
      content: null,
      tocswitch: false,
    };
  },

  components: {
    TabNav,
    util
  },

  computed: {},

  // beforeMount() {},

  mounted() {
    const vm = this;
    const docId = this.$router.currentRoute.name;
    //加载editormd
    this.requireEditor(function() {
      // vm.editor = editormd(vm.editorId, defaultConfig)

      //   vm.editor = editormd(vm.editorId, defaultConfig);
      // console.log(editormd.markdownToHTML())
      vm.editor = editormd.markdownToHTML(vm.editorId, {
        htmlDecode: "style,script,iframe",
        tocm: true, // Using [TOCM]
        tocContainer: ".toc-content",
        emoji: true,
        taskList: true,
        tex: true, // 默认不解析
        tocStartLevel: 1,
        tocTitle: "目录",
      });
    });

    this.getarticle();
    // this.jiantouclick();

    //this.editor.markdownToHTML("content");
  },

  methods: {
    getarticle() {
      console.log(this.$route.query);
      this.$api
        .getarticle(null, null, { _id: this.$route.query.id })
        .then((result) => {
          this.$refs.top.style.background =
            "url(" + result.data[0].imgurl + ")";

          this.content = result.data[0].articlecontent;
            this.title = result.data[0].articletitle
             console.log(result.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getConfig: function() {
      return { ...defaultConfig, ...this.config };
    },
    /**
     * 异步加载editormd
     * callback 成功后的回调函数
     */
    requireEditor(callback) {
      let vm = this;
      //设置全局变量，因为editormd依赖jquery
      window.$ = window.jQuery = $;
      //异步加载并执行

      $.getScript("/lib/editor.md/editormd.min.js", function(script) {
        $.getScript("/lib/editor.md/lib/marked.min.js", function(script) {
          $.getScript("/lib/editor.md/lib/prettify.min.js", function(script) {
            callback();
          });
        });
      });

      //加载css
      $("head").append(
        $('<link rel="stylesheet" type="text/css" />').attr(
          "href",
          "/lib/editor.md/css/editormd.min.css"
        )
      );
    },
    jiantouclick() {
      if (this.tocswitch) {
        this.$refs.left.style.width = "0px";
        this.$refs.toc.style.opacity = "0";
        this.$refs.tabnav.$el.style.width = "100%";
        this.$refs.tiantou.style.transform = "rotate(90deg)";
        this.$refs.tiantou.style.color = "#000";
        this.tocswitch = false;
      } else {
        this.$refs.left.style.width = "250px";
        this.$refs.toc.style.opacity = "1";
        this.$refs.tabnav.$el.style.width = "calc(100% - 250px)";
        this.$refs.tiantou.style.transform = "rotate(-90deg)";
        this.$refs.tiantou.style.color = "#000";
        this.tocswitch = true;
      }
    },
  },

  watch: {},
};
</script>
<style lang="less" scoped>
.markdown-toc-list {
  list-style: decimal !important;
}
ul {
  list-style: decimal !important;
  li {
    line-height: 2;
  }
}

.article {
  display: flex;

  .left {
    width: 0;
    background: #f6f8fa;
    box-shadow: -0.25rem 0 0.25rem rgba(232, 237, 250, 0.6) inset;
    opacity: 0.9;
    transition: all 0.6s;

    .toc {
      position: fixed;
      top: 0px;
      bottom: 0px;
      left: 0px;
      width: 250px;
      opacity: 0;
      transition: all 0.4s;
      .toc-content {
        padding-right: 20px;

   
      }
    }
    h2 {
      text-align: center;
    }
  }
  .right {
    flex: 1;
  }
  .article-tiantou {
    position: fixed;
    left: 15px;
    bottom: 15px;
    font-size: 24px;
    transition: all 0.6s;
    transform: rotate(90deg);
    i {
      font-size: 24px;
      color: rgb(153, 169, 191);
      cursor: pointer;
    }
  }
}

.top {
  width: 100% !important;
  position: relative;
  margin-bottom: 1rem;
  height: 380px;
  background-color: rgba(0, 0, 0, 0.75);
  background-attachment: local;
  background-position: center !important;
  background-size: cover !important;
  animation: header 1s;



}
.article-info{
  position: absolute;
  bottom: 130px;
  left: 100px;

  .article-info-title{
    font-size: 30px;
    color: #eee;
  }

}

.main {
  margin: 0px 40px;
}
.content {
  margin: 40px auto;
  padding: 50px;
  box-sizing: border-box;
  //   max-width: 1000px;
  background: #fff;
  box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06);
  animation: content 1s;
  transition: all 0.3s;
}
.tabnav {
  // width: calc(100% - 250px);
  width: 100%;
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
    0%{
      opacity: 0;
      transform: translateY(50px);
    }
    100%{
      opacity: 1;
       transform: translateY(0px);
    }
}


@media screen and (max-width: 1024px) {
  .content {
    margin: 0 15px;
    width: auto;
  }
  .main {
    margin: 0px 15px;
  }
}
</style>
