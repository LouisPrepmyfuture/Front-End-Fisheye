// return json
async function getData() {
	try{
		let response = await fetch('http://127.0.0.1:5500/data/photographers.json')
		if(response.ok){
			let data = await response.json()
			return data
		}else{
			console.error('Retour du serveur :', response.status)
		}
	}catch(e){
		console.log(e)
	}
} 

// return id url
getUrlId = function(){
	let baseUrl = (window.location).href
	let id = baseUrl.substring(baseUrl.lastIndexOf('=') + 1)

	return id 
}

