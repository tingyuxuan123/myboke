	import axios from 'axios'
	const url01= 'http://192.169.33.45:8085';
	const url02='http://192.168.3.9';
	
		const instance=axios.create({
		    baseURL: url02,
				timeout:5000
		})
		
		export default instance    