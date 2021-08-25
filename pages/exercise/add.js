import React from "react";
import { BiCalendar } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import Headers from "../../components/Headers";
import HeadSection from "../../components/HeadSection";
import Datalist from "../../components/Datalist";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { useAddExercise } from "../api/exercise";
import DateInput from "../../components/DateInput";
import Status from "../../components/Status";
import { useState } from "react";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

export default function add() {
  useIsLoggedIn()
  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [{ startDate, endDate }, handleChange] = useForm({
    startDate: "",
    endDate: "",
  });
  const resetStatusIsHidden = () => setIsStatusHidden(true);
  const onHandleAddExercise = (event) => {
    event.preventDefault();
    useAddExercise(startDate, endDate).then((res) => {
      setIsStatusHidden(false);
      setStatusMessage(res.message || "Enregistrement reussi !");
      res.type.toLowerCase() === "failure"
        ? setStatusType("error")
        : setStatusType("success");
    });
  };
  return (
    <>
      <Headers title="Nouvel exercice | Umarps Shop Manager" />
      <div className="grid h-screen place-items-center w-full mx-auto md:w-9/12">
        <div className="shadow bg-white rounded w-11/12 py-4 md:w-8/12 grid place-items-center">
          <Status
            type={statusType}
            isHidden={isStatusHidden}
            message={statusMessage}
            resetStatusIsHidden={resetStatusIsHidden}
          />
          <HeadSection
            leader="Nouvel exercice"
            follower="Ajouter un exercice "
            showUploadPhoto={false}
            icon=""
          />
          <form className="w-9/12 mt-5 flex flex-col justify-center">
            <div className="md:flex justify-between ">
              <DateInput
                style="ml-1"
                style="mr-1"
                event={handleChange}
                placeholder="Année de début"
                value={startDate}
                name="startDate"
              />
              <DateInput
                style="ml-1"
                event={handleChange}
                placeholder="Année de  fin"
                value={endDate}
                name="endDate"
              />
            </div>
            <div className="flex justify-between ">
              <p className="mt-5 text-lg">Annuler</p>
              <Button event={onHandleAddExercise} design="mt-3">
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
