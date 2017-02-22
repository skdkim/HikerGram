import { RECEIVE_USER_DETAIL } from '../actions/user_actions';
import { GET_ALL_FOLLOWS, MAKE_NEW_FOLLOW, DELETE_FOLLOW } from "../actions/follow_actions";
import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';


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
  let newState = merge({}, oldState);
  let thePhoto;
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
      newState = merge({}, oldState);
      thePhoto = newState.photos.filter((photo)=>photo.id === action.like.photo_id)[0]

      return newState;
    case REMOVE_LIKE:
      newState = merge({}, oldState);
      thePhoto = newState.photos.filter((photo)=>photo.id === action.like.photo_id)[0]

      return newState;
    default:
      return oldState;
  }
};

export default UserReducer;
