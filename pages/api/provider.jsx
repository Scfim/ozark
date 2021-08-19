import axios from 'axios'
import {server} from "../../constants/common"

export const addProvider=(data)=>{
    const url=`${server}/providers/add`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const editProvider=()=>{
    const url=`${server}/....`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const deleteProvider=()=>{
    const url=`${server}/....`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const getProvider=()=>{
    const url=`${server}/providers/getAll`
    return new Promise((resolve,reject)=>{
        axios.post(url).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
