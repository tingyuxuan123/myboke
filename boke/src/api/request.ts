import {instance} from './axios'

function getarticle(pageindex:number,pagesize:number,data:JSON){
    return instance({
        url:'/api/getarticle',
        method:'post',//get   
        data: {
            pageindex,
            pagesize,
            data
        },
        

    
    });
}

function getclassify(){
    return instance({
        url:'/api/getclassify',
        method:'post'
    });
        
}

function getspan(){
    return instance({
        url:'/api/getspan',
        method:'post'
    }); 
}


export {
    getarticle,
    getclassify,
    getspan
}