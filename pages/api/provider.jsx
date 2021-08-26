import axios from "axios";
import { server } from "../../constants/common";

export const addProvider = (data) => {
  const url = `${server}/providers/add`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const editProvider = (data) => {
  const url = `${server}/providers/update`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const deleteProvider = (data) => {
  const url = `${server}/providers/delete`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export const getProvider = (providerName) => {
  const url = `${server}/input/getProvider`;
  return new Promise((resolve, reject) => {
    axios
      .post(url, { providerName })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
