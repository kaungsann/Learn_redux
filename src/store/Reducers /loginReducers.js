const loginReducers = (state = false, action) => {
  switch (action.type) {
    case "login":
      return (state = action.payload);
    case "logout":
      return (state = action.payload);
    default:
      return state;
  }
};
export default loginReducers;
