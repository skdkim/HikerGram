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
      newState = merge({}, oldState);
      newState.likes_count++;
      newState.currentUserLikes = true;
      newState.photoLikes++;
      return newState;
    case REMOVE_LIKE:
      newState = merge({}, oldState);
      newState.likes_count--;
      newState.currentUserLikes = false;
      newState.photoLikes--;
      return newState;
    default:
      return oldState;
  }
};

export default PhotoReducer;
