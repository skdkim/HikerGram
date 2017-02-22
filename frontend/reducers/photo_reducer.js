import { GET_ALL_PHOTOS } from "../actions/photo_actions";
import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';


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
  let newState;

  switch(action.type){
    case GET_ALL_PHOTOS:
      return action.photos;
    case ADD_LIKE:
      newState = merge({}, oldState);
      newState[action.like.photo_id].photoLikes++;
      newState[action.like.photo_id].currentUserLikes = true;

      return newState;
    case REMOVE_LIKE:
      newState = merge({}, oldState);
      newState[action.like.photo_id].photoLikes--;
      newState[action.like.photo_id].currentUserLikes = false;

      return newState;
    case ADD_COMMENT:
      newState = merge({}, oldState);
      newState[action.comment.photo_id].comments[action.comment.comment_id] = action.comment;
      newState[action.comment.photo_id].comments[action.comment.comment_id].currentUsersComment = true;

      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.comment.photo_id].comments[action.comment.comment_id];

      return newState;
    default:
      return oldState;
  }
};

export default PhotoReducer;
