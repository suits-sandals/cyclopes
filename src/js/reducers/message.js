import * as types from '../types';

export default function message(state = {
	message: '',
	type: 'SUCCESS'
}, action = {}) {
	switch (action.type) {
	case types.GET_RESULTS_SUCCESS:
		return {...state, message: action.message, type: 'SUCCESS'};
	case types.GET_RESULTS_ERROR:
		return {...state, message: action.message, type: 'ERROR'};
	case types.GET_RESULTS_REQUEST:
		return {...state, message: action.message, type: 'WAITING'};
	case types.DISMISS_MESSAGE:
		return {...state, message: '', type: 'SUCCESS'};
	default:
		return state;
	}
}
