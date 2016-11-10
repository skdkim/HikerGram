import { RECEIVE_USER_DETAIL } from '../actions/user_actions';
import { GET_ALL_FOLLOWS, MAKE_NEW_FOLLOW, DELETE_FOLLOW } from "../actions/follow_actions";

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  user_id: "",
  username: "",
  image_url: "",
  photos: [],
  currentUserFollows: "",
  followee_count: "",
  follower_count: ""
});

const UserReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = merge({}, _nullUser);

  switch(action.type){
    case RECEIVE_USER_DETAIL:
      newState = action.user;
      return newState;
    case MAKE_NEW_FOLLOW:
      newState = merge({}, oldState);
      newState.currentUserFollows = true;
      newState.follower_count++;
      return newState;
    case DELETE_FOLLOW:
      newState = merge({}, oldState);
      newState.currentUserFollows = false;
      newState.follower_count--;
      return newState;
    default:
      return oldState;
  }
};

export default UserReducer;
