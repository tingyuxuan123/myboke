<template>
	<div class="article_list">
		<div class="nav">
			
		</div>
		<div class="ss">
			
		</div>
		
		<div class="operate">
			<span>
				<span class="delete">批量删除</span>
				<span class="add" @click="addarticle()">添加文章</span>
			</span>
			<span class="datanum">
				共有数据: {{allnum}} 条
			</span>
		</div>
			
		<div class="list">
			<table>
				<tr>
					<td> <input type="checkbox"> </td>
					<td>ID</td>
					<td>标签</td>
					<td>分类</td>
					<td>更新时间</td>
					<td>浏览次数</td>
					<td>发布状态</td>
					<td>操作</td>
				</tr>
				<tr v-for="item in articles">
					<td><input type="checkbox"></td>
					<td>{{item._id}}</td>
					<td>{{item.articletitle}}</td>
					<td>{{item.classify}}</td>
					<td>{{item.addtime|creatdata}}</td>
					<td>{{item.readnum}}</td>
					<td>发布</td>
					<td><span>编辑</span> | <span @click="delectclick(item._id)">删除</span></td>
				</tr>
			</table>
		</div>
		
		<div class="bottonnav">
			<div class="nav-left">
				<span>显示{{1}}到{{articlenum}} 共{{articlenum}}条</span>
			</div>
			<div class="nav-right">
				<span @click="uppage()">上一页</span>
				<span>{{pageindex}}</span>
				<span @click="nextpage()">下一页</span>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import {getarticle,deletearticle} from '../network/request.js'
	import {formatDate} from '../until/utils.js'
	export default{
		data:function(){
			return{
				articles:null,
				articlenum:null,
				pageindex:1,
				pagesize:10,
				allnum:null,
			}
		},
		mounted() {
			
				//显示全部的文章数目
				getarticle().then((res)=>{
					this.allnum=res.data.length
					
				})
			
			if(this.$route.query.page!=null){
				this.pageindex=this.$route.query.page
			getarticle(this.pageindex,this.pagesize).then((res)=>{
				console.log(res.data)
				this.articles=res.data
				this.articlenum=res.data.length
			})
				
			}else{
				getarticle(this.pageindex,this.pagesize).then((res)=>{
					console.log(res.data)
					this.articles=res.data
					this.articlenum=res.data.length
				})
			}
			
		
		},
		
		methods:{
			addarticle(){
				this.$router.push('/writearticle')
			},
			delectclick(id){
				console.log(id)
				 deletearticle(id).then((res)=>{
					 alert(res.data.msg)
					 window/location.reload()
				 })
			},
			uppage(){
				if(this.pageindex>1){
					this.pageindex--
					
					this.$router.push({
						path:'/main/article_list',
						query:{
							page:this.pageindex
						}
					})
					window.location.reload()
				}
				
			},
			nextpage(){
				if(this.pageindex<3){
					this.pageindex++
				
				this.$router.push({
					path:'/main/article_list',
					query:{
						page:this.pageindex
					}
				})
				window.location.reload()
				}
			}
			
		},
		filters:{
			  creatdata:function(value){
					value=parseInt(value)
											  if(value==10){
												  let date = new Date(value*1000);
												  return formatDate(date, 'yyyy-MM-dd')
											  }else{
												  let date = new Date(parseInt(value));
												  return formatDate(date, 'yyyy-MM-dd')
											  }
										  },
		}
	}
</script>

<style scoped="scoped">
	.article_list{
		padding: 20px;
	}
	
	.operate{
		background-color: #f5fafe;
		line-height: 40px;
		border: 1px solid #dddddd;
		margin: 20px 0px;
		padding: 5px 0px;
		box-sizing: border-box;
		position: relative;
	}
	.datanum{
		position: absolute;
		right: 10px;
	}
	
	.delete{
		display: inline-block;
		line-height: 40px;
		color: #fff;
    background-color: #dd514c;
    border-color: #dd514c;
		font-weight: 400;
		padding: 0px 20px;
		box-sizing: border-box;
		border-radius: 5px;
		margin: 0px 5px;
	}
	.add{
		display: inline-block;
		line-height: 40px;
		color: #fff;
	   background-color: #5a98de;
	   border-color: #5a98de;
		 font-weight: 400;
		 padding: 0px 20px;
		 box-sizing: border-box;
		 	border-radius: 5px;
	}
	.operate span span:hover{
		cursor: pointer;
	}
	
	
	table{
		 border-collapse:collapse;
		 width: 100%;
	}
	table tr:nth-child(1){
		background-color: #f5fafe;
		line-height: 37px;
	}
	table tr{
		display: flex;
	}
	
	 table td{
	
		border: 1px solid #dddddd;
		line-height: 37px;
		text-align: center;
		font-size: 14px;
	}
	
	table td:nth-child(1){
		width: 40px;
	}
	table td:nth-child(2){
		width: 200px;
	}
	table td:nth-child(3){
		width: 300px;
	}
	table td:nth-child(4){
		width: 100px;
	}
	table td:nth-child(5){
		width: 100px;
	}
	table td:nth-child(6){
		width: 100px;
	}
	table td:nth-child(7){
		width: 100px;
	}
	table td:nth-child(8){
		width: 140px;
	}
	
	.bottonnav{
		display: flex;
		justify-content: space-between;
		line-height: 40px;
		margin-top: 20px;
	}
	.nav-left{
		display: inline-block;
	}
	.nav-right{
		display: inline-block;
	}
	.nav-right span{
		padding: 8px;
		border: 1px #dddddd solid;
	}
	.nav-right span:nth-child(1){
		margin-right: 10px;
	}
	.nav-right span:nth-child(3){
		margin-left: 10px;
	}
	.nav-right span:nth-child(2){
		background-color: #56ACA3;
	}
	
	
</style>
