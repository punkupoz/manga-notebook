import {
	SIMPLE_CLICK,
	PAGE_LOADING, PAGE_LOADED,
	SIMPLE_REQUEST,	SIMPLE_REQUEST_SUCCESS,	SIMPLE_REQUEST_FAIL
} from './types';

export const simpleLoadAction = () => {
	return dispatch => {
		dispatch({ type: PAGE_LOADING })
		
		setTimeout((dispatch) => {
			dispatch({ type: PAGE_LOADED })
		}, 1500, dispatch)
	}
}

export const simpleClickAction = () => {
	return dispatch => {
		dispatch({ type: SIMPLE_CLICK })
	}
}

export const simpleRequestAction = () => {
	return async dispatch => {
		const onSuccess = (success) => {
			dispatch({ type: SIMPLE_REQUEST_SUCCESS, payload: success });
			return success;
		}
		const onError = (error) => {
			dispatch({ type: SIMPLE_REQUEST_FAIL, payload: error });
			return error;
		}
		
		dispatch({type: SIMPLE_REQUEST})
		
		try {
			const promise = await fetch('https://reqres.in/api/users');
			const success = await promise.json();
			return onSuccess(success);
		} catch(error) {
			 return onError(error);
		}
	}
}