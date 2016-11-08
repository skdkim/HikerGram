import { REQUEST_ALL_FOLLOWS, getAllFollows } from '../actions/follow_actions';
import { requestAllFollows } from '../util/follow_api_util';

export default store => next => action => {
  const successCallback = photos => store.dispatch(getAllFollows(photos));

  switch(action.type) {
    case REQUEST_ALL_FOLLOWS:
      requestAllFollows(successCallback);
      return next(action);
    default:
      return next(action);
  }
};
