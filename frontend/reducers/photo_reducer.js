import { GET_ALL_PHOTOS } from "../actions/photo_actions";
import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';

import merge from 'lodash/merge';

const _nullPhoto = Object.freeze({
  image_url: "",
  user_id: "",
  currentUserLikes: "",
  likes_count: "",
  photoLikes: ""
});

const PhotoReducer = (oldState = _nullPhoto, action) => {
  Object.freeze(oldState);
  let newState = merge({}, _nullPhoto);

  switch(action.type){
    case GET_ALL_PHOTOS:
      return action.photos;
    case ADD_LIKE:
    // debugger
      newState = merge({}, oldState);
      newState[action.like.photo_id].photoLikes++;
      newState[action.like.photo_id].currentUserLikes = true;

      // newState.likes_count++;
      // newState.currentUserLikes = true;
      // newState.photoLikes++;
      // debugger

      return newState;
    case REMOVE_LIKE:
    // debugger

      newState = merge({}, oldState);
      newState[action.like.photo_id].photoLikes--;
      newState[action.like.photo_id].currentUserLikes = false;
      // newState.likes_count--;
      // newState.currentUserLikes = false;
      // newState.photoLikes--;
      // debugger
      return newState;
    default:
      return oldState;
  }
};

export default PhotoReducer;
