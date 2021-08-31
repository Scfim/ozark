"use-strict";

import React, { useEffect, useState } from "react";
import Headers from "../../components/Headers";
import { getCurrentExercise } from "../api/exercise";
import Status from "../../components/Status";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { BiTimer } from "react-icons/bi";

export default function index() {
  useIsLoggedIn();
  const [currentExercise, setCurrentExercise] = useState({});
  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const today = new Date().getTime();
      let targetDate = new Date(currentExercise.exercise_end_date).getTime();
      const dateDiff = Math.floor(targetDate - today);
      const days = dateDiff / (1000 * 60 * 60 * 24);
      const hoursActual = `0.${days.toString().split(".")[1]} `;
      const hours = Math.floor(parseFloat(hoursActual) * 24);
      const dividedHours = hoursActual * 24

      const minutesActual = `0.${dividedHours.toString().split(".")[1]} `;
      const minutes = Math.floor(parseFloat(minutesActual) * 60);
      const dividedMinutes =  minutesActual * 60

      const secondsActual = `0.${dividedMinutes.toString().split(".")[1]} `;
      const seconds = Math.floor(parseFloat(secondsActual) * 60);
      setDays(Math.floor(days));
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  });

  useEffect(() => {
    async function getExercise(canLoad = true) {
      if (canLoad) {
        const response = await getCurrentExercise();
        console.log(response);
        if (response.auth !== undefined && response.auth === false) {
          setIsStatusHidden(false);
          setStatusMessage(response.message);
          setStatusType("error");
        } else if (
          response.type !== undefined &&
          response.type.toLowerCase() === "success"
        ) {
          setCurrentExercise(response.data[0]);
        }
        return void 0;
      }
    }
    getExercise();

    return () => getExercise(false);
  }, []);
  const resetStatusIsHidden = () => setIsStatusHidden(true);
  return (
    <div className="w-full grid place-items-center">
      <Headers title="Exercice actuel | Umarps Shop manager" />
      <Status
        type={statusType}
        isHidden={isStatusHidden}
        message={statusMessage}
        resetStatusIsHidden={resetStatusIsHidden}
      />
      <h1 className="text-2xl font-bold text-gray-700 my-5">
        Tableau de bord de l'exercise actuel
      </h1>
      <div className="w-11/12 grid grid-cols-12">
        <div className="col-span-3 h-auto mr-1 bg-white rounded shadow">
          <p className="text-center primaryColor font-semibold">
            Exercice actuel
          </p>
          <div className="m-3">
            {/**
             * Will use moment Js for readable date
             */}
            <div className="my-4">
              <span className="font-semibold text-gray-700">
                Date de début &#160;
              </span>
              :{" "}
              <span className="primaryBg rounded p-1 mx-3 text-white font-semibold">
                {new Date(
                  currentExercise.exercise_start_date
                ).toLocaleDateString()}
              </span>
            </div>
            <div className="my-4">
              <span className="font-semibold text-gray-700">
                Heure de début &#160;
              </span>
              :{" "}
              <span className="primaryBg rounded p-1 mx-3 text-white font-semibold">
                {new String(currentExercise.system_time).toString()}
              </span>
            </div>

            <div className="my-4">
              <span className="font-semibold text-gray-700">
                Date de fin &#160;
              </span>
              :{" "}
              <span className="bg-yellow-500 rounded p-1 mx-3 text-white font-semibold">
                {new Date(
                  currentExercise.exercise_end_date
                ).toLocaleDateString()}
              </span>
            </div>

            <div className="my-4">
              <span className="font-semibold text-gray-700">Status &#160;</span>
              :{" "}
              <span className="bg-green-500 rounded p-1 mx-3 text-white font-semibold">
                Acitvé
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-9 h-56 ml-1 grid place-items-center bg-white rounded shadow">
          <div className="flex justify-around primaryColor items-center w-10/12">
            <BiTimer className="primaryColor" size="9rem" />
            <span className="font-semibold ml-3 text-2xl">
              Temps restant avant la fin de cet exercice !
            </span>
          </div>
          <div className="flex items-center font-semibold text-3xl">
            <div className="border rounded p-2 m-1 border-gray-400 text-gray-700">
              {days} jours
            </div>
            <div> : </div>
            <div className="border rounded p-2 m-1 border-gray-400 text-gray-700">
              {hours} heures
            </div>
            <div> : </div>
            <div className="border rounded p-2 m-1 border-gray-400 text-gray-700">
              {minutes} minutes
            </div>
            <div> : </div>
            <div className="border rounded p-2 m-1 border-gray-400 text-gray-700">
              {seconds} secondes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
