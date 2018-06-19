import request from 'axios';
import * as types from '../types';
var converter = require('json-2-csv');
var FileSaver = require('file-saver');



/*
 Sample Action - Action Creators
*/

export function sampleActionRequest() {
  return {
	type: types.SAMPLE_ACTION_REQUEST,
	message: "Sample Action Requested"
  };
}

export function sampleActionSuccess(data) {
  return {
	type: types.SAMPLE_ACTION_SUCCESS,
	data,
	message: "Sample Action Successfull"
  };
}

export function sampleActionError() {
  return {
	type: types.SAMPLE_ACTION_ERROR,
	message: "Sample Action Failed"
  };
}




/*
 Sample Action
*/


export function sampleAction(data) {
  return (dispatch, getState) => {

	dispatch(sampleActionRequest());


	var authOptions = {
	  method: 'POST',
	  url: '/some/endpoint',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  data
	};


	return request(authOptions).then(response => {
	  dispatch(sampleActionSuccess(response.data));
	}).catch(err => {
	  dispatch(sampleActionError());
	});


  }
}
