const ROOT_API = 'https://api.flickr.com/services/rest/';
const SEARCH_METHOD = '?method=flickr.photos.search';
const GET_SIZES_METHOD = '?method=flickr.photos.getSizes';
const API_KEY = '&api_key=aace3193704604d743744619cc5e2cbc';
const OPTIONS = '&format=json&nojsoncallback=1';

const TAG = '&tags=';
const PHOTO_ID = '&photo_id=';
const PER_PAGE = 10;

export const getList = async (keyword, quantity = PER_PAGE) => {
	let request = ROOT_API 
		+ SEARCH_METHOD 
		+ API_KEY
		+ OPTIONS + '&per_page=' + quantity
		+ TAG + keyword;
	
	/*await fetch(request)
		.then(res => {
			if(res.ok) {
				return res.json()
			} else {
				throw new Error('Unexpected error')
			}
		})
		.then(res => {
			return {
				ok: true,
				data: res
			}
		})
		.catch(err => {
			return {
				ok: false,
				message: err.message
			}
		})*/
	try {
		const a = await fetch(request);
		console.log(a);
	} catch(err) {
		console.log(err);
	}
}
	
export const getPhoto = async (id) => {
	let request = ROOT_API 
		+ GET_SIZES_METHOD 
		+ API_KEY
		+ OPTIONS
		+ PHOTO_ID + id;
		
	let photoPromise = await fetch(request);
	let photo = await photoPromise.json();
	
	return await photo;
}