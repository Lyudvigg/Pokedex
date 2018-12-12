import {SPINNER} from '../actions/actionTypes';

const initialState = {
  spinner: true
};

let spinner = (state = initialState, action) => {
  switch(action.type) {
    case SPINNER:
      return {
        ...state,
        spinner: action.spinner
      }
    default:
      return state
  }
};

export default spinner;