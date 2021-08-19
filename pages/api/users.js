import axios from "axios";
import Router from "next/router"
import { post_login, post_signup } from "../../constants/users";
axios.defaults.withCredentials = true

export const useLogin = async(username, password, redirect) => {
 try{
  const result =  await axios
  .post(post_login, { username, password })
  console.log(result)
    if (result.data.auth && result.data.user.isAuthenticated) {
      localStorage.setItem("token", result.data.token);
      const redirectPath = redirect || "/"
      Router.push(redirectPath);
    } else Router.push("/login");
 }catch(e){
   throw e
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
