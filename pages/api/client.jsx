import axios from 'axios'
import {server} from "../../constants/common"

export const addClient=(data)=>{
    const url=`${server}/clients/add`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const editClient=()=>{
    const url=`${server}/....`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const deleteClient=()=>{
    const url=`${server}/....`
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
