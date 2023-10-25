import axios from "axios";

const API_URL = "/api/user/";

const sign_in = async (data) => {
  const response = await axios.post(API_URL + "register", data);
  console.log(response);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const log_in = async (data) => {
  const response = await axios.post(API_URL + "login", data);

  return response.data;
};

export const HandleApi = {
  sign_in,
  log_in,
};
