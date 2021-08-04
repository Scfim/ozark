import React from "react";
import { BiCalendar } from "react-icons/bi";
import {
  FaCheckCircle,
} from "react-icons/fa";
import Headers from "../../components/Headers";
import HeadSection from "../../components/HeadSection";
import Datalist from "../../components/Datalist";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { useAddExercise } from "../api/exercise";

export default function add() {
  const [
    { startYear, endYear},
    handleChange,
  ] = useForm({
    startYear: "",
    endYear: "",
  });
  const onHandleAddExercise = (event) => {
    event.preventDefault();
    useAddExercise(startYear, endYear).then((res) => console.log(res));
  };
  return (
    <>
      <Headers title="Umarps Shop Manager | Nouvel exercice" />
      <div className="grid h-screen place-items-center w-full mx-auto md:w-9/12">
        <div className="md:border-2 md:border-gray-100 rounded w-11/12 py-4 md:w-8/12 grid place-items-center">
          <HeadSection
            leader="Umarps Shop Manager"
            follower="Ajouter un exercice "
            showUploadPhoto={false}
            icon=""
          />
          <form className="w-9/12 mt-5 flex flex-col justify-center">
            <div className="md:flex justify-between ">
              <Datalist
              style="mr-1"
                event={handleChange}
                placeholder="Année de début"
                value={startYear}
                name="startYear"
                icon={<BiCalendar />}
                options={[
                  { key: "Administrateur", value: "Super user" },
                  { key: "Vendeur", value: "user" },
                ]}
              />
              <Datalist
              style="ml-1"
                event={handleChange}
                placeholder="Année de  fin"
                value={endYear}
                name="endYear"
                icon={<BiCalendar />}
                options={[
                  { key: "Administrateur", value: "Super user" },
                  { key: "Vendeur", value: "user" },
                ]}
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
