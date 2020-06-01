<template>
	<div class="nav">
		<h2>后台管理</h2>
		<div class="head">
			
			
		</div>
		
	
			<ul class="content">
				<li ref='nav' v-for="(item,index) in nav" @click="navclick(index)" :key="item.fast">{{item.fast}} 
					<ul ref='childnav'>
						<li v-for="child in item.child" :key="child">{{child}}</li>
					</ul>
				</li>
			</ul>
			
	
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				nav:[
					{fast:'用户管理',
					child:[
						
					]
					},
					{
						fast:'分类管理',
						child:[
							'分类列表',
							'添加分类',
									]
					},
					{
						fast:'文章管理',
						child:[
							'文章管理',
							'添加内容'
						]
					},
					
				]
			}
		},
		methods:{
			navclick(index){
			this.long=this.$refs.childnav[index].children.length
				 this.$refs.childnav[index].style.height=this.long*50+'px'
				 
				
				
				
			},
		}
		
	}
</script>

<style scoped="scoped">
		.nav{
			width: 100%;
			height: 100vh;
			background-color:#282d2f;
		}
		
		h2{
			background-color: #282d2f;
			color: #FFFFDD;
			line-height: 50px;
		}
		.head{
			background-color: #1f2224;
			height: 200px;
		}
		.content{
			height: calc(100vh - 50px - 200px);
		}
		
	
	.content li{
		line-height: 50px;
		padding-left: 20px;
		box-sizing: border-box;
	}
	
	.content li:hover{
		background-color: #666666;
		color: #FFFFFF;
	}
	.content li ul{
		background-color:#282d2f;
		color: rgb(102,102,102);
			box-sizing: border-box;
		margin-left: -20px;
	}
	.content li ul li{
		padding-left: 40px;
	}
		
	.content li ul{
			height: 0px;
			overflow: hidden;
			transform: all 0.5s;
	} 
		
		
</style>
