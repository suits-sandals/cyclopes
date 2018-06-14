import { combineReducers } from 'redux';
import * as types from '../types';


const sampleReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_RESULTS_REQUEST:
      return action.date;
    case types.GET_RESULTS_ERROR:
      return null;
    default:
      return state;
  }
};


const resultsReducer = combineReducers({
  sampleReducer
});

export default sampleReducer;
