export const createComment = (comments, success) => {
  $.ajax({
    type: 'POST',
    url: '/api/comments',
    data: {comments},
    success
  });
};

export const destroyComment = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `/api/comments/${id}`,
    success
  });
};
