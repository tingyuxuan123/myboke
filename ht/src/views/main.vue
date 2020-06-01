<template>
	<div class="main">
		<div class="mainleft">
			<mainnav></mainnav>
		</div>
		
		<div class="mainrigth">
	
			<router-view/>
			
		</div>
		
		
		
		 
	</div>
</template>

<script>
	import mainnav from '@/components/nav.vue'
	
	export default{
		data:function(){
			return{
				
			}
		},
		components:{
			mainnav,
	
		}
	}
</script>

<style scoped="scoped">
	@import url("../assets/css/base.css");
	@import url("../assets/css/normalize.css");
	
	.main{
		display: flex;
	}
	
	.mainleft{
		width: 250px;
	}
	.mainrigth{
		flex: 8;
	}
	
	
	
</style>
