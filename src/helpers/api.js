import Utils from './../helpers/utils'
var api = {
	baseAddress: "https://jsonplaceholder.typicode.com/",
	
	//There is not direct way to obtain the photos of more than one album in only one request.
	getAlbumsUrl() {
		return this.baseAddress + "albums/?id=1&id=2&id=3&id=4&id=5&id=6&id=7&id=8&id=9&id=10" 
	},

	getPhotosUrl() {
		return this.baseAddress + "photos/?albumId=1&albumId=2&albumId=3&albumId=4&albumId=5&albumId=6&albumId=7&albumId=8&albumId=9&albumId=10" 
	},
}

module.exports = api;