import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import PhotoReducer from './photo_reducer';
import FollowReducer from './follow_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  userDetail: UserReducer,
  photos: PhotoReducer,
  follows: FollowReducer
});

export default RootReducer;
