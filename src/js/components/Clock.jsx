/**
*
* @module Example
* @submodule Component-Clock
*/


import React, { Component } from 'react';

/**
@class Clock
@static
*/

class Clock extends Component {

	/**
	@method render
	*/

	render() {
		let time = new Date().toLocaleTimeString();
		return <span>{ time }</span>;
	}
}

export default Clock;