import React from 'react'

export default function useIsLoggedIn() {
    useEffect(async () => {
        const authenticated = await axios
          .get(`${server}/user/login`)
          .then((res) => {
            return res.data.authenticated;
          })
          .catch((err) => console.log(err));
        const auth = await axios
          .get(`${server}/user/auth`, {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log(res);
            return res.data.auth;
          })
          .catch((err) => console.log(err));
          if (authenticated && auth) {
              Router.push("/");
          } else Router.push("/user/login");
      }, []);
}
