var api = {
	baseAddress: "https://jsonplaceholder.typicode.com/",
	
	//Local:
	//baseAddress: "http://192.168.1.209:3000/",
	
	getAlbumListlUrl:  function(){
		return this.baseAddress + "albums/" 
	},
}

module.exports = api;