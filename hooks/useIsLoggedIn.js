import { useState, useEffect } from 'react'
import { server } from '../constants/common';
import axios from 'axios';

axios.defaults.withCredentials = true

export default function useIsLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(async () => {
        const authenticated = await axios
          .get(`${server}/users/login`)
          .then((res) => {
            return res.data.authenticated;
          })
          .catch((err) => console.log(err));
        const auth = await axios
          .get(`${server}/users/auth`, {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log(res);
            return res.data.auth;
          })
          .catch((err) => console.log(err));
          setIsLoggedIn(authenticated && auth)
          
      }, [isLoggedIn]);

      return isLoggedIn
}
