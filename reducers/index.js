import {DATA_LOADED} from '../constants/actionTypes';
const initialState = {
  contacts: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
      return Object.assign({}, state, {
        contacts: action.payload,
      });
      break;
    default:
      return state;
  }
}

export default rootReducer;
