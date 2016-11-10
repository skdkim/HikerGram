export const REQUEST_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const GET_ALL_FOLLOWS = "GET_ALL_FOLLOWS";
export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DESTROY_FOLLOW = "DESTROY_FOLLOW";
export const MAKE_NEW_FOLLOW = "MAKE_NEW_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";

export const requestAllFollows = () => ({
  type: REQUEST_ALL_FOLLOWS,
});

export const getAllFollows = (follows) => ({
  type: GET_ALL_FOLLOWS,
  follows
});

export const createFollow = (follows) => ({
  type: CREATE_FOLLOW,
  follows
});

export const destroyFollow = (id) => ({
  type: DESTROY_FOLLOW,
  id
});

export const makeNewFollow = (follows) => ({
  type: MAKE_NEW_FOLLOW,
  follows
});

export const deleteFollow = (id) => ({
  type: DELETE_FOLLOW,
  id
});
