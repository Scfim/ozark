
import axios from 'axios'
import { server } from "../../constants/common"
axios.defaults.withCredentials = true;


export const addClient = (data) => {
  const url = `${server}/clients/add`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const editClient = (data) => {
  const url = `${server}/clients/update`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const deleteClient = (data) => {
  const url = `${server}/clients/delete`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const getClient = async() => {
  const url = `${server}/clients/getAll`;
  try {
    const response = await
    axios
      .post(url,{}, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
    return response.data
  } catch (error) {
    throw new Error(error)
  }
};
export const getClients = (clientName) => {
  const url = `${server}/clients/getClientLIke`;
  return new Promise((resolve, reject) => {
    axios
      .post(
        url,
        { clientName },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
