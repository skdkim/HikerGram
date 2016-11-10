export const requestAllFollows = (user, success) => {
  $.ajax({
    type: 'GET',
    url: `/api/users/${user.id}/follows`,
    success
  });
};

export const createFollow = (followData, success) => {
  $.ajax({
    type: 'POST',
    url: '/api/follows',
    data: {follows: followData},
    success
  });
};

export const destroyFollow = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `/api/follows/${id}`,
    success
  });
};
