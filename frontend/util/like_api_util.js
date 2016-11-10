export const createLike = (likes, success) => {
  $.ajax({
    type: 'POST',
    url: '/api/likes',
    data: {likes},
    success
  });
};

export const destroyLike = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `/api/likes/${id}`,
    success
  });
};
