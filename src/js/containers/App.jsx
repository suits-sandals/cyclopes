/**
*
* @module Example
* @submodule Container-App
*/

import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';

import Container from './Container.jsx';
import About from './About.jsx';

/**
@class App
@static
*/

const App = () => {

	/**
	@method return
	*/

	return (
		<div className="app_inside">
			<nav>
				<Link to="/home">Home</Link>
				<Link to="/about">About</Link>
			</nav>
			<main>
				<Redirect from="/" to="/home" />
				<Route path="/home" component={Container}/>
				<Route path="/about" component={About}/>
			</main>
		</div>
	);
};

export default App;
