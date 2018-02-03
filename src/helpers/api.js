import Utils from './../helpers/utils'
var api = {
	baseAddress: "https://jsonplaceholder.typicode.com/",
	
	//Local:
	//baseAddress: "http://192.168.1.209:3000/",
	
	getAlbumsUrl() {
		return this.baseAddress + "albums" 
	},

	getPhotosUrl() {
		return this.baseAddress + "photos" 
	},
}

module.exports = api;