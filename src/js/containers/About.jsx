/**
*
* @module Example
* @submodule Container-About
*/

import React, { Component } from 'react';
import {Helmet} from "react-helmet";

/**
@class About
@static
*/

class About extends Component {

	/**
	@method render
	*/

	render() {
		return (
			<div>
				<Helmet>
	                <title>About - Cyclopes</title>
	            </Helmet>
				<div>Cyclopes is a quick start kit for React with Redux.</div>
			</div>
		);	
	}
}

export default About;
