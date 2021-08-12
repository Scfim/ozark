import axios from "axios";
import { server } from "../../constants/common";
import { post_login, post_signup } from "../../constants/users";

export const useLogin = (username, password) => {
  axios
    .post(post_login, { username, password })
    .then((result) => {
      //waiting for mak
    })
    .catch((err) => reject(err));
};

export const userSignUp = async (user) => {
  try {
    const response = await axios.post(post_signup, user);
    return response;
  } catch (err) {
    throw err;
  }
};
