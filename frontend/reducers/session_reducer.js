import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: [],
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let newState = merge({}, _nullUser);
  
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case LOGOUT:
      return newState;
    case RECEIVE_ERRORS:
      newState.currentUser = null;
      newState.errors = action.errors;
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
