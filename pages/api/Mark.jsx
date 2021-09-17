import axios from 'axios'
import { server } from "../../constants/common"
axios.defaults.withCredentials = true;

export const addMark = (data) => {
    const url = `${server}/marks/add`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const editMark = () => {
    const url = `${server}/marks/update`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const deleteMark = (data) => {
    const url = `${server}/marks/delete`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const getMark = async() => {
    const url = `${server}/marks/getAll`
    try {
        const response = await axios.post(url,{},{
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        throw new Error(error)
    }
    
}
export const getAllLike = async (data) => {
    const url = `${server}/products/getMarks`
    try {
        const response = await axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
        return response.data

    } catch (error) {
        throw new Error(error)
    }
}
