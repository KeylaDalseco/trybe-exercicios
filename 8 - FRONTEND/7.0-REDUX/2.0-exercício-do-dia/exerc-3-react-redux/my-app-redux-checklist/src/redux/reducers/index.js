import { combineReducers } from "redux";
import { ADD_EMAIL } from "../actions/actions";


const INITIAL_STATE = { email: ''}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_EMAIL: 
    return {
      ...state,
      email: action.email,
    }
    default: 
    return state;
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;