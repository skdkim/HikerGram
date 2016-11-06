import { GET_ALL_PHOTOS } from "../actions/photo_actions";
import merge from 'lodash/merge';


const _nullPhoto = Object.freeze({
  image_url: "",
  user_id: ""
});

const PhotoReducer = (oldState = _nullPhoto, action) => {
  Object.freeze(oldState);
  let newState = merge({}, _nullPhoto);

  switch(action.type){
    case GET_ALL_PHOTOS:
    return action.photos;
    default:
      return oldState;
  }
};

export default PhotoReducer;
