export const add = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: amount,
    });
  };
};
export const remove = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "remove",
      payload: amount,
    });
  };
};

export const insert = (user) => {
  return (dispatch) => {
    dispatch({
      type: "insert",
      payload: user,
    });
  };
};
export const drop = (user) => {
  return (dispatch) => {
    dispatch({
      type: "drop",
      payload: user,
    });
  };
};
export const login = (condition) => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: condition,
    });
  };
};
export const logout = (condition) => {
  return (dispatch) => {
    dispatch({
      type: "logout",
      payload: condition,
    });
  };
};
