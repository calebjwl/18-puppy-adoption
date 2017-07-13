import { combineReducers } from 'redux';
import puppyReducer from './reducer/puppies';

export default combineReducers({
  puppies: puppyReducer
});
