export const signup = (user, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/user',
    data: user,
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/session',
    data: user,
    success,
    error
  });
};

export const logout = success => {
  $.ajax({
    type: 'DELETE',
    url: 'api/session',
    success,
    error: () => {
      console.log("You are not Logged in.");
    }
  });
};
