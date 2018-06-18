import { combineReducers } from 'redux';
import * as types from '../types';


const sample = (state = null, action) => {
	switch (action.type) {
	case types.GET_RESULTS_REQUEST:
		return action.date;
	case types.GET_RESULTS_ERROR:
		return null;
	default:
		return state;
	}
};


const sampleReducer = combineReducers({
	sample,
});

export default sampleReducer;
