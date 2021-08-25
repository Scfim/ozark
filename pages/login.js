import React, { useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { FaCheckCircle, FaLock, FaUser } from "react-icons/fa";
import Headers from "../components/Headers";
import HeadSection from "../components/HeadSection";
import TextBox from "../components/TextBox";
import useForm from "../hooks/useForm";
import Button from "../components/Button";
import { useLogin } from "./api/users";
import useIsLoggedIn from "../hooks/useIsLoggedIn";

export default function login() {
  useIsLoggedIn("/")
  const [{ username, password }, handleChange] = useForm({
    username: "",
    password: "",
  });
  const onHandleLoginUser = (event) => {
    event.preventDefault();
    useLogin(username, password);
  };
  return (
    <>
      <Headers title="Umarps Shop Manager | Connexion" />
      <div className="grid h-screen place-items-center w-full mx-auto md:w-9/12">
        <div className="md:border-2 md:border-gray-100 rounded w-11/12 py-4 md:w-8/12 grid place-items-center">
          <HeadSection
            leader="Bienvenu(e) sur Umarps Shop Manager"
            follower="Utilisez vos identifiants pour vous connecter"
            icon={<BiUser size="5rem" />}
          />
          <form className="w-9/12 mt-5 flex flex-col justify-center">
            <TextBox
              event={handleChange}
              placeholder="Utilisateur"
              value={username}
              name="username"
              icon={<FaUser />}
            />
            <TextBox
              event={handleChange}
              placeholder="Mot de passe"
              value={password}
              name="password"
              icon={<FaLock />}
              type="password"
            />
            <Button event={onHandleLoginUser} design="mt-3">
              <FaCheckCircle className="mt-1" />
              <span className="ml-1">Connexion</span>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
