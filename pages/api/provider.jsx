import axios from "axios";
import { server } from "../../constants/common";

axios.defaults.withCredentials = true;


export const addProvider = (data) => {
  const url = `${server}/providers/add`;
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
export const editProvider = (data) => {
  const url = `${server}/providers/update`;
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
export const deleteProvider = (data) => {
  const url = `${server}/providers/delete`;
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
export const getProvider = async(providerName) => {
  const url = `${server}/providers/getProviderLike`;
  try {
    const response = await
    axios
      .post(
        url,
        { providerName },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      
      return response.data
  } catch (error) {
    throw new Error(error)
  }
};
export const getProviders = async() => {
  const url = `${server}/providers/getAll`;
  try {
    const response = await
    axios
      .post(
        url,
        {},
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      
      return response.data
  } catch (error) {
    throw new Error(error)
  }
};

