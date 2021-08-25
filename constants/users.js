import { server } from "../constants/common"

export const post_login = server+"/users/login"
export const post_signup = server+"/users/add"
export const get_all = server+"/users/getAll"
export const delete_user = server+"/users/deleteOne"
export const user_logout = server+"/users/logout"