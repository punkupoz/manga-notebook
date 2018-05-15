import {
	FLICKR_PHOTO_LIST_FETCH,
	FLICKR_PHOTO_LIST_FETCH_SUCCESS,
	FLICKR_PHOTO_LIST_FETCH_FAIL,
	FLICKR_PHOTO_FETCH_SUCCESS
} from './types';
import { getList, getPhoto } from '../services/FlickrServices';

export function searchImage(keyword, quantity) {
	return async (dispatch) => {
		dispatch({
			type: FLICKR_PHOTO_LIST_FETCH
		});
		
		let listResonpse = await getList(keyword, quantity);
		console.log(listResonpse);
		if(listResonpse.ok) {
			dispatch({
				type: FLICKR_PHOTO_LIST_FETCH_SUCCESS,
				payload: listResonpse.data.photos
			})
		} else {
			dispatch({
				type: FLICKR_PHOTO_LIST_FETCH_FAIL
			})
		}
		
		
		let photoList = [];
		for(let i = 0; i < listResonpse.photos.photo.length; i++) {
			photoList.push(await getPhoto(listResonpse.photos.photo[i].id));
			dispatch({
				type: FLICKR_PHOTO_FETCH_SUCCESS,
				payload: photoList
			})
		}
	}
}