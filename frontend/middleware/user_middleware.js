import { receiveUserDetail,
         FETCH_USER_DETAIL
       } from '../actions/user_actions';

import { showUser } from '../util/user_api_util';

export default (store) => next => action => {
  const successCallback = user => (
    store.dispatch(receiveUserDetail(user))
  );
  // const errorCallback = xhr => store.dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_USER_DETAIL:
      showUser(action.id, successCallback);
      return next(action);
    default:
      return next(action);
  }
};
