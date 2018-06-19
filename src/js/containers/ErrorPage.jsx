/**
*
* @module Example
* @submodule Container-Error
*/

import React, { Component } from 'react';
import {Helmet} from "react-helmet";

/**
@class About
@static
*/

class ErrorPage extends Component {

	/**
	@method render
	*/

	render() {
		return (
			<div>
				<Helmet>
	                <title>404 - Cyclopes</title>
	            </Helmet>
				<h1>404</h1> 
				<p>Sorry, {window.location.href } is not a page.</p>
			</div>
		);	
	}
}

export default ErrorPage;
