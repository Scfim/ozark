
import axios from 'axios'
import { server } from "../../constants/common"
axios.defaults.withCredentials = true;

export const getEtablishment = () => {
    const url = `${server}/etablishement/get`;
    return new Promise((resolve, reject) => {
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
        .then((res) => resolve(res.data.data))
        .catch((err) => reject(err));
    });
  };
  

  export const addEtablishement = (data) => {
    const url = `${server}/etablishement/add`;
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