export const requestAllFollows = (success) => {
  $.ajax({
    type: 'GET',
    url: '/api/follows',
    success
  });
};
