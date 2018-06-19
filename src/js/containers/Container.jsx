/**
*
* @module Example
* @submodule Container-Container
*/

import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Clock from '../components/Clock.jsx';

/**
@class Container
@static
*/

class Container extends Component {

	/**
	@method render
	*/

	render() {
		return (
			<div>
				<Helmet>
	                <title>Sample Page - Cyclopes</title>
	            </Helmet>
				<Clock />
			</div>
		);	
	}
}

export default Container;
