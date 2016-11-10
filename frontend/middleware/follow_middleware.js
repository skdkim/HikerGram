import { REQUEST_ALL_FOLLOWS,
         getAllFollows,
         CREATE_FOLLOW,
         makeNewFollow,
         DESTROY_FOLLOW,
         deleteFollow} from '../actions/follow_actions';
import { requestAllFollows,
         createFollow,
         destroyFollow } from '../util/follow_api_util';

export default store => next => action => {
  const successCallback = photos => store.dispatch(getAllFollows(photos));
  const makeNewFollowSuccess = (data) => store.dispatch(makeNewFollow(data));
  const deleteFollowSuccess  = (id) => store.dispatch(deleteFollow(id));

  switch(action.type) {
    case REQUEST_ALL_FOLLOWS:
      requestAllFollows(successCallback);
      return next(action);
    case CREATE_FOLLOW:
      createFollow(action.follows, makeNewFollowSuccess);
      return next(action);
    case DESTROY_FOLLOW:
      destroyFollow(action.id, deleteFollowSuccess);
      return next(action);
    default:
      return next(action);
  }
};
