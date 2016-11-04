export const FETCH_USER_DETAIL = "FETCH_USER_DETAIL";
export const RECEIVE_USER_DETAIL = "RECEIVE_USER_DETAIL";


export const fetchUserDetail = (id) => ({
  type: FETCH_USER_DETAIL,
  id
});

export const receiveUserDetail = (user) => ({
  type: RECEIVE_USER_DETAIL,
  user
});
