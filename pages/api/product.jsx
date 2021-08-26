import axios from "axios";
import { server } from "../../constants/common";

export const addProduct = (data) => {
  const url = `${server}/products/add`;
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
export const editProduct = (data) => {
  const url = `${server}/products/update`;
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
export const deleteProduct = (data) => {
  const url = `${server}/products/delete`;
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
export const getProduct = (productName) => {
  const url = `${server}/products/getProductLike`;
  return new Promise((resolve, reject) => {
    axios
      .post(
        url,
        { productName },
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
