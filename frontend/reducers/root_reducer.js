import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  userDetail: UserReducer
});

export default RootReducer;
