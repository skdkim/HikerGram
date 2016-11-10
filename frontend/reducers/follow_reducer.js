import { GET_ALL_FOLLOWS, MAKE_NEW_FOLLOW, DELETE_FOLLOW } from "../actions/follow_actions";
import merge from 'lodash/merge';


const _nullFollow = Object.freeze({
  follower_id: "",
  followee_id: ""
});

const FollowReducer = (oldState = _nullFollow, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case GET_ALL_FOLLOWS:
      return action.follows;
    case MAKE_NEW_FOLLOW:
      return _.merge(newState, action.follows);
    case DELETE_FOLLOW:
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default FollowReducer;
