export const requestAllFollows = (user, success) => {
  $.ajax({
    type: 'GET',
    url: `/api/users/${user.id}/follows`,
    success
  });
};
