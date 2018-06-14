/**
* @module Example
*/

/**
@class Initialization
@static
*/

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './containers/App.jsx';


/**
@method init
*/

function init() {
	let App = require('./containers/App.jsx').default;
	ReactDOM.render(<App />,  document.getElementById('root'));
}



init();
