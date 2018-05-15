import { combineReducers } from 'redux';
import actionsReducer from './actionsReducer';

const rootReducer = combineReducers({
	actions: actionsReducer
});

export default rootReducer;