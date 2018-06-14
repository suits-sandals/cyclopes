/**
* @module Example
*/

/**
@class Initialization
@static
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import App from './containers/App.jsx';

import store from './store';


/**
@method init
*/

function init() {
	ReactDOM.render((
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	),  document.getElementById('root'));
}



init();
