import axios from "axios";
import Router from "next/router";
import { get_all, post_login, post_signup } from "../../constants/users";
axios.defaults.withCredentials = true;
/**
 *
 * @param {string} username Username to login with
 * @param {string} password Password to login with
 * @param {string} redirect Redirection path on which user will be redirect.
 * If this is not setted it will redirect the user to the index page
 * @returns {Promise}
 */
export const useLogin = async (username, password, redirect) => {
  try {
    const result = await axios.post(post_login, { username, password });
    console.log(result);
    if (result.data.auth && result.data.user.isAuthenticated) {
      localStorage.setItem("token", result.data.token);
      const redirectPath = redirect || "/";
      Router.push(redirectPath);
    } else Router.push("/login");
  } catch (e) {
    throw e;
  }
};
export const userSignUp = async (user) => {
  try {
    const response = await axios.post(post_signup, user);
    return response.data;
  } catch (err) {
    throw err;
  }
};

/**
 * This function is use to get user asynchronously from the database
 * @returns  an array of users available in the database otherwise it will return an empty array
 */

export const userGetAll = async () => {
  try {
    const response = await axios.get(get_all);
    if (response.data.data !== undefined) return response.data.data;
    else return [];
  } catch (err) {
    throw err;
  }
};

/**
 * 
 * @param {string} userId : User id to delete in the database
 */
export const useDeleteUser = async(userId) => {
  try{
    const response = await axios.post(delete_user)
    return response.data
  }catch(err){
    throw err
  }
};
