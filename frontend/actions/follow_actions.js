export const REQUEST_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const GET_ALL_FOLLOWS = "GET_ALL_FOLLOWS";

export const requestAllFollows = () => ({
  type: REQUEST_ALL_FOLLOWS,
});

export const getAllFollows = (follows) => ({
  type: GET_ALL_FOLLOWS,
  follows
});
