export const CREATE_COMMENT = "CREATE_COMMENT";
export const DESTROY_COMMENT = "DESTROY_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const destroyComment = (id) => ({
  type: DESTROY_COMMENT,
  id
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});
