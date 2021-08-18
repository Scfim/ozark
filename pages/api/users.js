import axios from "axios";
import { server } from "../../constants/common";
import { post_login, post_signup } from "../../constants/users";

export const useLogin = async(username, password) => {
 try{
  const result =  await axios
  .post(post_login, { username, password })
  return result
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
