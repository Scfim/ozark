import axios from "axios";
import Router from "next/router";
import {
  get_all,
  post_login,
  post_signup,
  delete_user,
  user_logout
} from "../../constants/users";
axios.defaults.withCredentials = true;
/**
 *
 * @param {string} username Username to login with
 * @param {string} password Password to login with
 * @param {string} redirect Redirection path on which user will be redirect
 *
 * If this is not setted it will redirect the user to the index page
 * @returns Normally no need to return something but as a it a promise it will return a promise
 */
export const useLogin = async (username, password, redirect) => {
  try {
    const result = await axios.post(post_login, { username, password });
    if (result.data.auth && result.data.user.isAuthenticated) {
      localStorage.setItem("token", result.data.token);
      const redirectPath = redirect || "/";
      Router.push(redirectPath);
    } else Router.push("/login");
  } catch (e) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
    throw e;
  }
};
/**
 * Signup a new user, this function can only be run by a SuperUser
 * @param {object} user User object from the signup user form
 * @returns object response data as a promise
 */
export const userSignUp = async (user) => {
  try {
    const response = await axios.post(post_signup, user);
    return response.data;
  } catch (err) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
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
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
    throw err;
  }
};

/**
 * As you can guess by reading the name of this function, it just tells the REST API to delete the user
 * of the Id taken as its paramter
 * @param {string} userId : User id to delete in the database
 * @returns an response object into a promise
 */
export const useDeleteUser = async (userId) => {
  try {
    const response = await axios.post(delete_user, {userId});
    return response.data;
  } catch (err) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
    throw err;
  }
};

/**
 * Destroy session, delete cookie in the navigator and delete token in the navigator
 */
export const useUserLogout = async () => {
  try {
    const response = await axios.post(user_logout);
  } catch (err) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
    throw err;
  }
};
