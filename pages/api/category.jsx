import axios from 'axios'
import { server } from "../../constants/common"
axios.defaults.withCredentials = true;

export const addCategory = (data) => {
    const url = `${server}/categories/add`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const editCategory = (data) => {
    const url = `${server}/categories/update`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const deleteCategory = (data) => {
    const url = `${server}/categories/delete`
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}
export const getCategory = async () => {
    const url = `${server}/categories/getAll`
    try {
        const response = await
            axios.post(url,{}, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            })
        return response.data

    } catch (error) {
        throw new Error(error)
    }
}
export const getCategoryLike = async (data) => {
    const url = `${server}/subCategories/getCategories`
    try {
        const response = await
            axios.post(url, data, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            })
        return response.data
    } catch (error) {
        throw new Error(error)
    }

}
