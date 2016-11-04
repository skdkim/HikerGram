import { RECEIVE_USER_DETAIL } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  user_id: "",
  username: "",
  image_url: "",
  photos: []
});

const UserReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = merge({}, _nullUser);
  switch(action.type){
    case RECEIVE_USER_DETAIL:
      newState = action.user;
      return newState;
    default:
      return oldState;
  }
};

export default UserReducer;
