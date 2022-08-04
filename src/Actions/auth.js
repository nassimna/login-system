import * as api from "../api/index.js";
export const login = (user, history) => async (dispatch) => {
  try {
    const { data } = await api.login(user);
    if (data) {
      localStorage.setItem("profile", JSON.stringify(data));
    }
    dispatch({ type: "LOGIN", data });
    history.push("/home");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGIN_ERROR", error });
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    if (data) {
      history.push("/login");
    }
    dispatch({ type: "Signup", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGIN_ERROR", error });
  }
};
export const logout = (history) => async (dispatch) => {
  try {
    const { data } = await api.logout();

    localStorage.removeItem("profile");
    history.push("/login");

    dispatch({ type: "Signup", data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error });
    console.log(error);
  }
};
