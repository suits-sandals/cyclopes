/**
* @module Example
*/

/**
@class Initialization
@static
*/

import React from 'react';
import ReactDOM from 'react-dom';

const app = document.getElementsByClassName('app')[0];


/**
@method init
*/

function init() {
	let App = require('./containers/App.jsx').default;
	ReactDOM.render(<App />,  document.getElementById('root'));
}

init();
