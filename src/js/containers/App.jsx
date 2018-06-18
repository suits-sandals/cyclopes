/**
*
* @module Example
* @submodule Container-App
*/

import React from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom';

import Container from './Container.jsx';
import About from './About.jsx';
import ErrorPage from './ErrorPage.jsx';

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
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>
			<main>
				<Switch>
					<Route exact path="/" component={Container}/>
					<Route path="/about" component={About}/>
					<Route path="*" component={ErrorPage}/>
				</Switch>
			</main>
		</div>
	);
};

export default App;
