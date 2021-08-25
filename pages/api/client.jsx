import axios from 'axios'
import {server} from "../../constants/common"

export const addClient=(data)=>{
    const url=`${server}/clients/add`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const editClient=(data)=>{
    const url=`${server}/clients/update`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const deleteClient=(data)=>{
    const url=`${server}/clients/delete`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const getClient=()=>{
    const url=`${server}/clients/getAll`
    return new Promise((resolve,reject)=>{
        axios.post(url).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
