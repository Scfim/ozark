import axios from "axios"
<<<<<<< HEAD
=======
import {server} from "../../constants/common"
>>>>>>> 6b022236e440ed7b9e5c6ae7d83c35ea92df14a5
import { post_login, post_signup } from "../../constants/users"

export const useLogin = (username, password) =>{
    return new Promise((resolve, reject)=>{
        axios.post(post_login,{username,password}).then(result=>{
            //waiting for mak
            
        }).catch(err => reject(err))
    })
}

export const userSignUp = (user) =>{
    return new Promise((resolve, reject)=>{
        axios.post(post_signup,user).then(result=>{
            //waiting for mak
            
        }).catch(err => reject(err))
    })
}