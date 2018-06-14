/**
*
* @module Example
* @submodule Container-App
*/

import React from 'react';
import Container from './Container.jsx';

/**
@class App
@static
*/

const App = () => {

	/**
	@method return
	*/

	return (
		<div class="app_inside">
			<Container />
		</div>
	);
};

export default App;
