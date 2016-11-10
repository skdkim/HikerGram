import { RECEIVE_USER_DETAIL } from '../actions/user_actions';
import { GET_ALL_FOLLOWS, MAKE_NEW_FOLLOW, DELETE_FOLLOW } from "../actions/follow_actions";
import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';

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
  let photo;

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
    case ADD_LIKE:
    // debugger
      newState = merge({}, oldState);
      photo = newState.photos.filter((photo)=>photo.id === action.like.photo_id)[0]
      photo.likesCount++;
      photo.currentUserLikes = true;
      // newState.photoLikes++;
      // debugger
      return newState;
    case REMOVE_LIKE:
    // debugger

      newState = merge({}, oldState);
      photo = newState.photos.filter((photo)=>photo.id === action.like.photo_id)[0]
      photo.currentUserLikes = false;
      photo.likesCount--;
      // newState.photoLikes--;
      // debugger
      return newState;
    default:
      return oldState;
  }
};

export default UserReducer;
