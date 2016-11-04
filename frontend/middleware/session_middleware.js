import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';
import { hashHistory } from 'react-router';

import { login, signup, logout } from '../util/session_api_util';

export default (store) => next => action => {
  const successCallback = user => store.dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => store.dispatch(receiveErrors(xhr.responseJSON));
  const logoutSuccess = () => hashHistory.replace("/auth");


  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(logoutSuccess);
      next(action);
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
