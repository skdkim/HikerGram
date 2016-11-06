export const REQUEST_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const GET_ALL_PHOTOS = "GET_ALL_PHOTOS";

export const requestAllPhotos = () => ({
  type: REQUEST_ALL_PHOTOS,
});

export const getAllPhotos = (photos) => ({
  type: GET_ALL_PHOTOS,
  photos
});
