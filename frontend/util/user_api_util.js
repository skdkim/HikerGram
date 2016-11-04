export const showUser = (id, success) => {
  $.ajax({
    type: 'GET',
    url: `/api/users/${id}`,
    success,
  });
};
