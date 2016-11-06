export const requestAllPhotos = (success) => {
  $.ajax({
    type: 'GET',
    url: '/api/photos',
    success
  });
};
