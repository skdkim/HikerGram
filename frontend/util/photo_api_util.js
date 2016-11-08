export const requestAllPhotos = (success, pageType) => {
  $.ajax({
    type: 'GET',
    url: '/api/photos',
    data: pageType,
    success
  });
};
