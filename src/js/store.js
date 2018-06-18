import { applyMiddleware, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger'; //Comment out for poduction
import thunk from 'redux-thunk';

import rootReducer from './reducers';


const persistConfig = {
	key: 'root',
	storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(
	logger,
	thunk,
));

export default store;