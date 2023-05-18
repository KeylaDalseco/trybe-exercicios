import { combineReducers } from "redux";
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCESSFUL } from "../actions/actions";

const INITIAL_STATE = {
  loading: true,
  image: '',
  error: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_STARTED:
      return {
        loading: true,
        image: '',
        error: ''
      };
    case REQUEST_SUCESSFUL:
      return {
        loading: false,
        image: action.payload,
        error: ''
    };
      case REQUEST_FAILED:
      return {
        loading: false,
        image: '',
        error: action.payload
      };
    default: 
    
    return state
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;