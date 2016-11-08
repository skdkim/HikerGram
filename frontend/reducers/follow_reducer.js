import { GET_ALL_FOLLOWS } from "../actions/follow_actions";
import merge from 'lodash/merge';


const _nullFollow = Object.freeze({
  follower_id: "",
  followee_id: ""
});

const FollowReducer = (oldState = _nullFollow, action) => {
  Object.freeze(oldState);
  let newState = merge({}, _nullFollow);

  switch(action.type){
    case GET_ALL_FOLLOWS:
    return action.follows;
    default:
      return oldState;
  }
};

export default FollowReducer;
