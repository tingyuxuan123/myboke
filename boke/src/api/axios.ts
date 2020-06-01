import Axios from 'axios'
import {getarticle,getclassify,getspan} from './request'

const url01= 'http://192.169.33.45:8085';
const url02='http://192.168.3.9';


const instance=Axios.create({
    baseURL: url02,
    timeout: 5000

})

const api={
    getarticle,
    getclassify,
    getspan
}


export {
    instance,
    api
}