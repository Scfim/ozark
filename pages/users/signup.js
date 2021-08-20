import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaList,
  FaLock,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import Headers from "../../components/Headers";
import HeadSection from "../../components/HeadSection";
import TextBox from "../../components/TextBox";
import Datalist from "../../components/Datalist";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { userSignUp } from "../api/users";
import Status from "../../components/Status";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import Router from "next/router";

export default function signup() {
  const isLoggedIn = useIsLoggedIn();
  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [
    { name, lastName, type, password, confirmPassword, email, phone },
    handleChange,
  ] = useForm({
    username: "",
    password: "",
    type: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });
  const onHandleAddUser = (event) => {
    event.preventDefault();
    userSignUp({
      name,
      lastName,
      type,
      password,
      confirmPassword,
      email,
      phone,
    }).then((res) => {
      setIsStatusHidden(false);
      setStatusMessage(res.message);
      res.type.toLowerCase() === "failure"
        ? setStatusType("error")
        : setStatusType("success");
    });
  };
  const resetStatusIsHidden = () => setIsStatusHidden(true);
  const getPhoto = (image) => {
    console.log(image);
  };
  return (
    <>
      <Headers title="Umarps Shop Manager | Inscription" />
      <div className="grid h-screen place-items-center w-full mx-auto md:w-9/12">
        <div className="bg-white rounded shadow w-11/12 py-4 md:w-8/12 grid place-items-center">
          <Status
            type={statusType}
            isHidden={isStatusHidden}
            message={statusMessage}
            resetStatusIsHidden={resetStatusIsHidden}
          />
          <HeadSection
            leader="Umarps Shop Manager"
            follower="Remplissez ce formulaire ci-dessous "
            showUploadPhoto={true}
            getPhoto={getPhoto}
          />
          <form className="w-9/12 mt-5 flex flex-col justify-center">
            <div className="md:flex justify-between ">
              <TextBox
                style="md:mr-1"
                event={handleChange}
                placeholder="Nom"
                value={name}
                name="name"
                icon={<FaUser />}
              />
              <TextBox
                style="md:ml-1"
                event={handleChange}
                placeholder="Post-nom"
                value={lastName}
                name="lastName"
                icon={<FaUser />}
              />
            </div>
            <TextBox
              event={handleChange}
              placeholder="Téléphone"
              value={phone}
              name="phone"
              icon={<FaPhoneAlt />}
            />
            <TextBox
              event={handleChange}
              placeholder="E-mail"
              value={email}
              name="email"
              icon={<FaEnvelope />}
            />
            <Datalist
              event={handleChange}
              placeholder="Type"
              value={type}
              name="type"
              icon={<FaList />}
              options={[
                { key: "Administrateur", value: "Super user" },
                { key: "Vendeur", value: "user" },
                { key: "Caissier", value: "user" },
              ]}
            />
            <div className="md:flex justify-between ">
              <TextBox
                style="md:mr-1"
                event={handleChange}
                placeholder="Mot de passe"
                value={password}
                name="password"
                icon={<FaLock />}
                type="password"
              />
              <TextBox
                style="md:ml-1"
                event={handleChange}
                placeholder="Confirmer mot de passe"
                value={confirmPassword}
                name="confirmPassword"
                icon={<FaLock />}
                type="password"
              />
            </div>
            <div className="flex justify-between ">
              <p className="mt-5 text-lg">Annuler</p>
              <Button event={onHandleAddUser} design="mt-3">
                <FaCheckCircle className="mt-1" />
                <span className="ml-1">Enregistrer</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
