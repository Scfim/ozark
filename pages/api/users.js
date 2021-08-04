import axios from "axios"
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