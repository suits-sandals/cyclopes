/**
* @module Example
*/

/**
@class Initialization
@static
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { BrowserRouter } from 'react-router-dom'

import App from './containers/App.jsx';

import store from './store';


/**
@method init
*/

function init() {
	ReactDOM.render((
			<BrowserRouter>
				<App />
			</BrowserRouter>
	),  document.getElementById('root'));
}



init();
