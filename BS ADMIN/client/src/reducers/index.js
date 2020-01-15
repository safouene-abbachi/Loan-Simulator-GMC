import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import clientReducer from './clientReducer'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  client: clientReducer
});
