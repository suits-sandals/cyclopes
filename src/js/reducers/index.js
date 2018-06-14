import { combineReducers } from 'redux';
import sample from './sample';
import message from './message';


// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
	sample,
	message
});

export default rootReducer;
