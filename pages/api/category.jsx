import axios from 'axios'
import {server} from "../../constants/common"

export const addCategory=(data)=>{
    const url=`${server}/categories/add`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const editCategory=(data)=>{
    const url=`${server}/categories/update`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const deleteCategory=(data)=>{
    const url=`${server}/categories/delete`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const getCategory=()=>{
    const url=`${server}/categories/getAll`
    return new Promise((resolve,reject)=>{
        axios.post(url).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const getCategoryLike=(data)=>{
    const url=`${server}/subCategories/getCategories`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
