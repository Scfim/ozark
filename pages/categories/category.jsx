import React, { useEffect, useState } from "react";
import Headers from '../../components/Headers'
import {
  BiBeer,
  BiTrophy,
  BiTrash,
  BiPencil,
  BiMinus,
} from "react-icons/bi";
import { Input } from "../../components/s/input";
import { Button } from "../../components/s/button";
import style from "../../styles/App.module.css";

import { addCategory, getCategory, deleteCategory, updateCategory } from "../api/category";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import Status from "../../components/Status";

const Category = ({ state }) => {
  useIsLoggedIn()
  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    GetCategory();
  }, []);

  const [category, setCategory] = useState("");
  const onSetcategory = (e) => {
    setCategory(e.target.value);
  };
  const [typeCategory, setTypecategory] = useState("");
  const onSetTypecategoty = (e) => {
    setTypecategory(e.target.value);
  };

  const [dataCategory, setDataCategory] = useState([]);
  function GetCategory() {
    getCategory().then((res) => {
      console.log(res);
      setDataCategory(res.data);
    });
  }
  const resetStatusIsHidden = () => setIsStatusHidden(true);


  const AddCategory = async () => {
    await addCategory({
      name: category,
      type: typeCategory,
    }).then((res) => {

      setIsStatusHidden(false);
      setStatusMessage(res.message);
      setStatusMessage(res.data.message);
      if (res.data.type.toLowerCase() === "success") setStatusType("success")
      else {

        setStatusType("error")
        setStatusMessage(res.data.message);
      }
      GetCategory()

    });
  }
  const DeleteCategory = async (category_id) => {
    await deleteCategory({
      categorieid: category_id,
    }).then((res) => {
      GetCategory();
      console.log(res)
    });
  }
  return (
    <div className={`flex flex-col my-6`} >
      <Headers title="Ajouter une catégorie" />
      <div className={` flex flex-col w-full mx-14`}>
        <label className={` text-xl font-bold`}> Ajouter une nouvelle catégorie </label>
        <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier une catégorie </label>
      </div>
      <div>
        <Status type={statusType} isHidden={isStatusHidden} message={statusMessage} resetStatusIsHidden={resetStatusIsHidden} />
      </div>
      <div className=" flex mx-14 my-8" >
        <div className="flex">
          <div className="flex flex-col bg-white shadow-md rounded-md p-4  ">
            <Input type="text" htmlFor="categoryId" name="category" label="Catégorie" event={onSetcategory} icon={<BiBeer size="0.95rem" />} />
            <Input type="text" hmlFor="designationId" name="designation" label="Description de la catégorie" event={onSetTypecategoty} icon={<BiTrophy size="0.95rem" />} />
            <Button text={"Enregistrer la catégorie"} event={() => AddCategory()} />
          </div>
        </div>

        <div className="ml-6 bg-white shadow-md rounded-md p-4 w-full ">
          <table className={`border  border-gray-200 w-full`}>
            <tbody>
              <tr className={`${style.bg}`}>
                <td className={`border border-gray-200 text-white px-2`}>
                  Categorie
                  </td>
              </tr>
              {dataCategory != undefined || dataCategory != null
                ? dataCategory.map((value) => {
                  return (
                    <tr key={value.categorie_id} className={`border border-gray-200 text-xs`}>
                      <td
                        className={`border border-gray-200 text-sm px-2 `}
                      >
                        {value.categorie_name}
                      </td>
                      
                      <td className={`border border-gray-200 text-sm px-2`}>
                        <div className={`bg-red-600 flex justify-center p-1 rounded-sm cursor-pointer w-9`} onClick={() => DeleteCategory(value.categorie_id)} >
                          {<BiMinus size="0.95rem" className={` text-white`} />}
                        </div>
                      </td>
                      <td className={`border border-gray-200 text-sm px-2`}>
                        <div className={`bg-green-500 flex justify-center p-1 rounded-sm cursor-pointer w-9`} onClick={() => DeleteCategory(value.categorie_id)} >
                          {<BiPencil size="0.95rem" className={` text-white`} />}
                        </div>
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
};

export default Category;
