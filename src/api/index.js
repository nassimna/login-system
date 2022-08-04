import axios from "axios";
const url = "http://51.38.36.98:8020/";
//MODEL API
export const login = (user, history) => axios.post(`${url}login/`, user);
export const signup = (userData) => axios.post(`${url}signup/`, userData);
export const logout = (refreshToken) =>
  axios.get(`${url}logout/`, refreshToken);
