import React, { useEffect, useState } from "react";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { userGetAll, useDeleteUser } from "../api/users";
import { FaMinus, FaPen } from "react-icons/fa";
import Headers from "../../components/Headers";
import Status from "../../components/Status";
import { getAllExercises } from "../api/exercise";

export default function data() {
  useIsLoggedIn();
  const [exercises, setExercises] = useState([]);
  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    getAllExercises().then((exe) => setExercises(exe));
  }, []);

  const onEditExercises = (exercise) => {};
  const onDeleteExercises = (exerciseId) => {
    useDeleteExercise(exerciseId).then((res) => {
      setIsStatusHidden(false);
      setStatusMessage(res.message);
      res.type.toLowerCase() === "failure"
        ? setStatusType("error")
        : setStatusType("success") && getAllExercises().then((exe) => setExercises(exe));
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
          <table className="table-auto rounded w-10/12 border mt-2 mx-auto">
            <thead>
              <tr className="bg-blue-50">
                <th className="border w-1/">Début</th>
                <th className="border w-2/6">Fin</th>
                <th className="border w-1/6">Status</th>
                <th className="border w-1/6"></th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0
                ? users.map((user) => {
                    console.log(users);
                    return (
                      <tr key={user.user_id} className="text-center border">
                        <td className="border">
                          {user.user_first_name + " " + user.user_last_name}
                        </td>
                        <td className="border">{user.user_mail_adress}</td>
                        <td className="border">{user.user_phone_number}</td>
                        <td className="border">{user.user_type}</td>
                        <td className="flex justify-around">
                          <button
                            onClick={() => onDeleteUser(user.user_id)}
                            className="w-7 h-7 rounded focus:ring-2 m-1 p-1 focus:outline-none border-none focus:ring-red-600 bg-red-500 cursor-pointer text-white grid place-items-center"
                          >
                            <FaMinus />
                          </button>
                          <button
                            onClick={() => onEditUser(user)}
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
