import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import PhotoReducer from './photo_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  userDetail: UserReducer,
  photos: PhotoReducer
});

export default RootReducer;
