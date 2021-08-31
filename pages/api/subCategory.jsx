import axios from 'axios'
import {server} from "../../constants/common"
axios.defaults.withCredentials = true;

export const addSubCategory=(data)=>{
    const url=`${server}/subCategories/add`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const editSubCategory=(data)=>{
    const url=`${server}/subCategories/add`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const deleteSubCategory=(data)=>{
    const url=`${server}/subCategories/delete`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const getSubCategory=()=>{    
    const url=`${server}/subCategories/getAll`
    return new Promise((resolve,reject)=>{
        axios.post(url).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
export const getSubCategoryLike=(data)=>{    
    const url=`${server}/marks/getSubCategory`
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>resolve(res)).catch((err)=> reject(err))
    })
}
