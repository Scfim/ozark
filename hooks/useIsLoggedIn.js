import { useEffect } from "react";
import { server } from "../constants/common";
import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";
import { data } from "autoprefixer";

axios.defaults.withCredentials = true;

/**
 * @function useIsLoggedIn as a @hook helps to directly check user authorization and authentication
 * then redirect to some page passed as paramter otherwise it will redirect to /login
 * @param {string} successRedirectPath , path on witch redirect after login successfully
 */
export default function useIsLoggedIn(successRedirectPath) {
  const router = useRouter();
  useEffect(() => {
    const checkLogin = async (canCheck = true) => {
      if (canCheck) {
        const authenticated = await axios.get(`${server}/users/login`);
        const authorized = await axios.get(`${server}/users/auth`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        if (authenticated.data.authenticated && authorized.data.auth) {
          if (successRedirectPath === "" || successRedirectPath === undefined) {
            Router.push(router.pathname);
          } else {
            /**
             * Regex to check the path will be added soon
             */
            Router.push(successRedirectPath);
          }
        } else {
          Router.push("/login");
        }
      }
    };
    checkLogin();
    return () => checkLogin(false);
  }, []);
}
