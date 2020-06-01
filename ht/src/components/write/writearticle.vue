<template>
  <div>
    <div class="top">
      <el-input v-model="title" placeholder="标题" class="title" clearable></el-input>

<div class="top-left">
 <el-select v-model="classify" placeholder="分类">
    <el-option
      v-for="item in optionlist"
      :key="item.classify"
      :label="item.classify"
      :value="item.classify">
    </el-option>
  </el-select>
   <el-select v-model="span" placeholder="标签">
    <el-option
      v-for="item in spanlist"
      :key="item.span"
      :label="item.span"
      :value="item.span">
    </el-option>
  </el-select>

   

<el-button @click="addarticle(1)">发布文章</el-button>
<el-button @click="addarticle(0)">保存文章</el-button>

    </div>


    </div>

       <div class="top-two">



     <el-upload
  class="upload-demo"
  action="http://192.168.3.9/api/upload"
  ref="upload"
  :auto-upload="false"
  :http-request="upload"
  :limit="1"
  list-type="picture">
  <el-button style="margin-right: 10px;" slot="trigger" size="small" type="primary">设置封面</el-button>
 <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
</el-upload>
   </div>



    <div class="editormd"
         :id="editorId">
      <textarea class="editormd-markdown-textarea"
                name="$id-markdown-doc"></textarea>

      <!-- html textarea 需要开启配置项 saveHTMLToTextarea == true -->
      <textarea class="editormd-html-textarea"
                name="$id-html-code"></textarea>
    </div>
   
  </div>
</template>
<script>
import $ from 'jquery'
import uuid from 'uuid/v4'
import { defaultConfig } from './config'
import axios from 'axios'
import {addnode,upimg,addarticle,getclassify,getspan} from '../../network/request'
export default {
  name: 'MarkdownEditor',
  props: {
    /**
     * editormd挂载元素的id
     */
    editorId: {
      type: String,
      default: uuid()
    },
    /**
     * editormd的选项对象
     */
    options: {
      type: Object
    },
    initData: {
      'type': String
    },
    /*
     * 编辑器配置
     */
    config: {
      type: String
    },
    /*
     *  内容改变时回调，返回（html, markdown, text
     */
    onchange: {
      type: Function
    },
    data: function () {
      return {
        //最终生成的编辑器
        editor: null,
        timer: null,
        doc: {},
        jsLoadOver: false
      }
    }
  },
  data(){
    return{

      title:'', //标题的值
      classify:'',//分类
      span:'',//标签的值
      imgurl:'',//封面图片地址

      optionlist:null,
      spanlist:null
    }
  },
  mounted () {
    let vm = this
    let docId = this.$router.currentRoute.name
    //加载editormd
    this.requireEditor(function () {
      vm.editor = editormd(vm.editorId, defaultConfig)
    })

    this.getspan();
    this.getclassify();


  },
  methods: {
    getConfig: function () {
      return { ...defaultConfig, ...this.config }
    },
    /**
     * 异步加载editormd
     * callback 成功后的回调函数
     */
    requireEditor (callback) {
      let vm = this
      //设置全局变量，因为editormd依赖jquery
      window.$ = window.jQuery = $
      //异步加载并执行
      $.getScript('/lib/editor.md/editormd.min.js', function (script) {
        callback()
      })
      //加载css
      $('head').append(
        $('<link rel="stylesheet" type="text/css" />').attr(
          'href',
          '/lib/editor.md/css/editormd.min.css'
        )
      )
    },
    addarticle(status) {  //发布文章
      let vm = this
      let html = this.editor.getPreviewedHTML()
      let markdown = this.editor.getMarkdown()
    
      let gethtml = this.editor.getHTML()

  

      console.log(markdown) //获取配置

    

  console.log(this.imgurl)

    if(this.imgurl!=''){
    addarticle(this.title,this.classify,markdown,html,this.imgurl,this.span,status).then((result) => {
      // alert(result.data.msg)
        this.$message({message:result.data.msg, type: 'success'});
      this.$router.replace('/layout/write_list')
        console.log(result)
    }).catch((err) => {
      
    });
    }else{
   
        this.$message({message:"请选择封面", type: 'warning'});
    }
      // console.log('%c this is a message', 'color:#0f0;', '获取 Markdown 源码:', markdown)
      // console.log('%c this is a message', 'color:#0f0;', '获取 Textarea 保存的 HTML 源码:', gethtml)
      // console.log('%c this is a message', 'color:#0f0;', '获取预览窗口里的 HTML，在开启 watch 且没有开启 saveHTMLToTextarea 时使用:', html)
    },
    upload(f){
          let formData = new FormData()
      formData.append('img', f.file)
  
        upimg(formData).then((result) => {
          this.imgurl=result.data.url
          if(this.imgurl!=''){
             this.$message({message:"图片上传成功", type: 'success'});
          }
          console.log(this.imgurl)
        }).catch((err) => {
          
        });
    },
    submitUpload(){

     this.$refs.upload.submit();

    },
    getspan(){  //获取标签

     getspan().then((result) => {
      console.log(result.data)
      this.spanlist=result.data
      }).catch((err) => {
  
      } );
    },
    getclassify(){  //获取分类

       getclassify().then((result) => {
         console.log(result.data)
         this.optionlist=result.data
       }).catch((err) => {
  
       } );
    },
  
   
  }
}
</script>
<style  scoped>

  .send{
      width: 100px;
      height: 40px;
      float: right;
      margin-right: 80px;
  }

  .title{
    width: 50%;
  }

  .top{
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;

  }
  .top-left{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    
  }
      .upload-demo{
  
      display: flex;
      height: 100px;
      align-items: center;
      justify-content: space-between;
    
    }
  
  .editormd{
    margin-top: 10px;
  
  }

</style>>
