import { combineReducers } from "redux";
import { REQUEST_STARTED, REQUEST_SUCESSFUL } from "../actions";

const INITIAL_STATE = {
  loading: false,
  personagem: [{
    name: '',
    gender: '',
    culture: '',
    born: '',
  }]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_STARTED: 
    return {
      ...state,
      loading:true,
      
    }
    case REQUEST_SUCESSFUL:
      return {
        ...state,
        loading: false,
        personagem: {...action.payload[0]}
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ reducer });
export default rootReducer;