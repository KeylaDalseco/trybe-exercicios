import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import counterReducer from '../reducers/counterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ counterReducer })

const store = createStore(rootReducer, composeWithDevTools());



export default store