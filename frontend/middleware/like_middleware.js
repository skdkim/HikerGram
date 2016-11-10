import { CREATE_LIKE,
         DESTROY_LIKE,
         ADD_LIKE,
         REMOVE_LIKE,
         addLike,
         removeLike} from '../actions/like_actions';
import { createLike, destroyLike, } from '../util/like_api_util';

export default store => next => action => {
  const createSuccess = like => store.dispatch(addLike(like));
  const destroySuccess = id => store.dispatch(removeLike(id));

  switch(action.type){
    case CREATE_LIKE:
      createLike(action.like, createSuccess);
      return next(action);
    case DESTROY_LIKE:
      destroyLike(action.id, destroyLike);
      return next(action);
    default:
      return next(action);
  }
};
