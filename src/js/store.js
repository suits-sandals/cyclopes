import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'; //Comment out for poduction
import rootReducer from './reducers';
import thunk from 'redux-thunk';


export default createStore(rootReducer, applyMiddleware(
	logger,
	thunk
));