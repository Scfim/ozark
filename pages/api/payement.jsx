import axios from 'axios'
import { server } from "../../constants/common"

export const addPayement = (data) => {
  const url = `${server}/payments/add`
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((res) => resolve(res)).catch((err) => reject(err))
  })
}
export const editPayement = () => {
  const url = `${server}/....`
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((res) => resolve(res)).catch((err) => reject(err))
  })
}
export const deletePayement = () => {
  const url = `${server}/....`
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((res) => resolve(res)).catch((err) => reject(err))
  })
}
export const getPayement = () => {
  const url = `${server}/....`
  return new Promise((resolve, reject) => {
    axios.post(url, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((res) => resolve(res)).catch((err) => reject(err))
  })
}

export const getBooking = async (data) => {
  const url = `${server}/bookings/getBookingLike`
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
