import React, { useEffect, useState } from "react";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { userGetAll, useDeleteUser } from "../api/users";
import { FaBan, FaMinus, FaPen } from "react-icons/fa";
import Headers from "../../components/Headers";
import Status from "../../components/Status";
import { getAllExercises } from "../api/exercise";

export default function data() {
  useIsLoggedIn();
  const [exercises, setExercises] = useState([]);
  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [exerciseEdit, setExerciseEdit] = useState({})

  useEffect(() => {
    getAllExercises().then((exe) => setExercises(exe.data));
  }, []);

  const onEditExercise = (exercise) => {

  };
  const onBanExercise = (exerciseId) => {
    useBanExercise(exerciseId).then((res) => {
      setIsStatusHidden(false);
      setStatusMessage(res.message);
      res.type.toLowerCase() === "failure"
        ? setStatusType("error")
        : setStatusType("success") &&
          getAllExercises().then((exe) => setExercises(exe));
    });
  };
  const resetStatusIsHidden = () => setIsStatusHidden(true);

  return (
    <div className=" w-full grid place-items-center">
      <Headers title="Utilisateurs disponibles | Umarps Shop manager " />
      <div className="grid w-10/12 mx-4 bg-white rounded shadow place-items-center">
        <h1 className="text-gray-700 font-semibold text-2xl">
          {" "}
          Tous les exercices disponibles ({exercises.length})
        </h1>
        <Status
          type={statusType}
          isHidden={isStatusHidden}
          message={statusMessage}
          resetStatusIsHidden={resetStatusIsHidden}
        />
        <div className="w-full mt-3">
          <table className="table-auto rounded w-10/12 border mb-3 mt-2 mx-auto">
            <thead>
              <tr className="bg-blue-50">
                <th className="border w-1/">Début</th>
                <th className="border w-2/6">Fin</th>
                <th className="border w-1/6">Status</th>
                <th className="border w-1/6"></th>
              </tr>
            </thead>
            <tbody>
              {exercises.length > 0
                ? exercises.map((exercise) => {
                    return (
                      <tr
                        key={exercise.exercise_id}
                        className={`text-center border ${
                          exercise.exercise_status === 1 &&
                          "primaryBg text-white "
                        }`}
                      >
                        <td className="border">
                          {new Date(exercise.exercise_start_date.split("T")[0]).toLocaleDateString()}
                        </td>
                        <td className="border">
                          {new Date(exercise.exercise_end_date.split("T")[0]).toLocaleDateString()}
                        </td>
                        <td className="border">
                          {exercise.exercise_status === 1 ? (
                            <div className="font-semibold ">Activé</div>
                          ) : (
                            <div>Desactivé</div>
                          )}
                        </td>
                        <td className="flex justify-around bg-white">
                          <button
                            onClick={() => onBanExercise(exercise.exercise_id)}
                            className="w-7 h-7 rounded focus:ring-2 m-1 p-1 focus:outline-none border-none focus:ring-red-600 bg-red-500 cursor-pointer text-white grid place-items-center"
                          >
                            <FaBan />
                          </button>
                          <button
                            onClick={() => onEditExercise(exercise)}
                            className="w-7 h-7 rounded focus:ring-2 m-1 p-1 focus:outline-none border-none focus:ring-green-600 bg-green-500 cursor-pointer text-white grid place-items-center"
                          >
                            <FaPen />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
