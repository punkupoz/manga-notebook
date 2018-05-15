import {
	PAGE_LOADING, PAGE_LOADED,
	SIMPLE_CLICK,
	SIMPLE_REQUEST,	SIMPLE_REQUEST_SUCCESS,	SIMPLE_REQUEST_FAIL
} from '../actions/types';

const actionsDefaultState = {
	loading: true,
	isClicked: false
}

export default function(state = actionsDefaultState, action) {
	switch(action.type) {
		case PAGE_LOADING:
			return { ...state, loading: true }
		case PAGE_LOADED:
			return { ...state, loading: false }
		case SIMPLE_CLICK:
			return { ...state, isClicked: true }
		case SIMPLE_REQUEST:
			return { ...state, fetching: true }
		case SIMPLE_REQUEST_SUCCESS:
			return { ...state, fetching: false, users: action.payload }
		case SIMPLE_REQUEST_FAIL:
			return { ...state, fetching: false, error: action.payload }
		default:
			return state;
			
	}
}