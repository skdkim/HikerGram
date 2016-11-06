import { REQUEST_ALL_PHOTOS, getAllPhotos } from '../actions/photo_actions';
import { requestAllPhotos } from '../util/photo_api_util';

export default store => next => action => {
  const successCallback = photos => store.dispatch(getAllPhotos(photos));

  switch(action.type) {
    case REQUEST_ALL_PHOTOS:
      requestAllPhotos(successCallback);
      return next(action);
    default:
      return next(action);
  }
};
