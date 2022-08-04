const authReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return [...state, action.payload];
    case "SIGNUP":
      return [...state, action.payload];
    case "LOGOUT":
      localStorage.clear();
      return [...state, action.payload];
    case "LOGIN_ERROR":
      return [...state, action.error];
    default:
      return state;
  }
};
export default authReducer;
