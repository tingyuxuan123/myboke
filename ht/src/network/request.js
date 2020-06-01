import instance from './axios.js'

	function getarticle(pageindex,pagesize){
		return instance({
			url:'/api/getarticle',
			method:'post',
			data:{
				pageindex,
				pagesize
			}
			
		})
	}
	
	function upimg(formdata){
		return instance({
			url:'/api/upload',
			method:'post',
			
		// headers:{'Content-Type':'multipart/form-data'},
			data:formdata
	,
			
		})
	}
	
	 function addarticle(articletitle,classify,articlecontent,articlecontenthtml,imgurl,span,status){  //添加文章
		return instance({
			url:'/api/addarticle',
			method:'post',
			data:{
				articletitle,
				classify,
				articlecontent,
				articlecontenthtml,
				imgurl,
				span,
				status
			}
		})
	}
	
	function deletearticle(_id){
		return instance({
			url:'/api/deletearticle',
			method:'post',
			data:{
				_id
			}
		}) 
			
		
	}

	function updatearticle(_id,status){
		return instance({
			url:'/api/updatearticle',
			method:'post',
			data:{
				_id,
				status
			}
		}) 
			
		
	}


	function getclassify(){
		return instance({
			url:'/api/getclassify',
			method:'post',
			
		}) 
			
	}
	
	function addclassify(classify){ //添加分类
		return instance({
			url:'/api/addclassify',
			method:'post',
			data:{
				classify
			}
		}) 
			
	}
	
	function updateclassify(_id,classify){//修改分类
		return instance({
			url:'/api/updateclassify',
			method:'post',
			data:{
				_id,
				classify
			}
		}) 
			
	}
	
	function deleteclassify(_id){//删除分类
		return instance({
			url:'/api/deleteclassify',
			method:'post',
			data:{
				_id
			}
		}) 
			
	}

	function getspan(){
		return instance({
			url:'/api/getspan',
			method:'post',
			
		});
			
	}
	
	function addspan(span){ //添加分类
		return instance({
			url:'/api/addspan',
			method:'post',
			data:{
				span
			}
		}) ;
			
	}
	
	function updatespan(_id,span){//修改分类
		return instance({
			url:'/api/updatespan',
			method:'post',
			data:{
				_id,
				span
			}
		}) ;
			
	}
	
	function deletespan(_id){//删除分类
		return instance({
			url:'/api/deletespan',
			method:'post',
			data:{
				_id
			}
		}) ;
			
	}
	
	
	export {upimg,
			addarticle,
			getarticle,
			updatearticle,
			deletearticle,
			getclassify,
			addclassify,
			updateclassify,
			deleteclassify,
			getspan,
			addspan,
			updatespan,
			deletespan
		}