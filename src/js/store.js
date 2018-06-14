import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger'; //Comment out for poduction
import thunk from 'redux-thunk';

import rootReducer from './reducers';



export default createStore(rootReducer, applyMiddleware(
	logger,
	thunk
));

/*const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let persistor = persistStore(store);

export let store = createStore(persistedReducer, applyMiddleware(
	logger,
	thunk
));*/