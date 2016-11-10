export const CREATE_LIKE = "CREATE_LIKE";
export const DESTROY_LIKE = "DESTROY_LIKE";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const createLike = (like) => ({
  type: CREATE_LIKE,
  like
});

export const destroyLike = (id) => ({
  type: DESTROY_LIKE,
  id
});

export const addLike = (like) => ({
  type: ADD_LIKE,
  like
});

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
});
