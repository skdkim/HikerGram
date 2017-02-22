import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const LikeReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = _.merge({}, oldState);

  switch(action.type){
    case ADD_LIKE:
    case REMOVE_LIKE:
    default:
      return oldState;
  }
};
