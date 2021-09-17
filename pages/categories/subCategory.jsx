import React, { useEffect, useState } from "react";
import { Input } from "../../components/s/input";
import { Button } from "../../components/s/button";
import style from "../../styles/App.module.css";
import { BiAlarmSnooze, BiBeer, BiMinus, BiPencil, BiTrash } from "react-icons/bi";
import { Dropdown } from "../../components/s/dropdown";
import { addSubCategory, editSubCategory, deleteSubCategory, getSubCategory } from "../api/subCategory";

import { getCategoryLike } from "../api/category";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import Headers from '../../components/Headers'
import Status from "../../components/Status";



export default function SubCategory({ state }) {
  useIsLoggedIn()

  const resetStatusIsHidden = () => setIsStatusHidden(true);
  const [statusType, setStatusType] = useState("");
  const [isStatusHidden, setIsStatusHidden] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    GetSubCategory()
  }, [])

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const onSetSubcategory = (e) => {
    setSubCategory(e.target.value);
  };
  const [typeCategory, setTypecategory] = useState("");
  const onSetTypecategoty = (e) => {
    setTypecategory(e.target.value);
  };

  const [idCategory, setIdCategory] = useState("");
  const [categoryState, setCategoryState] = useState("hidden");
  const [dataCategory, setDataCategory] = useState([]);
  const onSetCategory = (e) => {
    setCategory(e.target.value);
    if (e.target.value != "") {
      getCategoryLike({ categorieName: e.target.value }).then((res) => {
        setDataCategory(res.data)

      })

      setCategoryState("");
    } else setCategoryState("hidden");
  };
  const GetCategory = (id, category) => {
    setCategoryState("hidden");
    setCategory(category);
    setIdCategory(id);
    console.log(id);
  };

  const AddSubCategory = async () => {
    await addSubCategory({
      categorieId: idCategory,
      name: subCategory,
      type: typeCategory
    }).then((res) => {
      setIsStatusHidden(false);
      setStatusMessage(res.data.message);
      if (res.data.type.toLowerCase() === "success") setStatusType("success")
      else {

        setStatusType("error")
        setStatusMessage(res.data.message);
      }

      GetSubCategory()
    });
  };
  const EditSubCategory = async () => {
    await editSubCategory({}).then((res) => {
      console.log(res.data);

    });
  };
  const DeleteSubCategory = async (subCatery_id) => {
    await deleteSubCategory({ subCategorieId: subCatery_id }).then((res) => {
      GetSubCategory()
    });
  };


  const [dataSubCategory, SetDatatSubCategory] = useState([])
  function GetSubCategory() {
    getSubCategory().then((res) => {
      SetDatatSubCategory(res.data)
    })
  }
  return (
    <div className={`flex flex-col my-6`} >
      <Headers title="Ajouter une sous-categorie" />
      <div className={` flex flex-col w-full mx-14`}>
        <label className={` text-xl font-bold`}> Ajouter une nouvelle sous-catégorie </label>
        <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier une sous-catégorie </label>
      </div>
      <div>
        <Status type={statusType} isHidden={isStatusHidden} message={statusMessage} resetStatusIsHidden={resetStatusIsHidden} />
      </div>
      <div className=" flex mx-14 my-8" >
        <div className="flex">
          <div className="flex flex-col bg-white shadow-md rounded-md p-4  ">
            <Dropdown state={categoryState} type="text" htmlFor="categorieId" name="catergorie" label="Catégorie du produit" value={category} event={onSetCategory}>
              {
                dataCategory != undefined && dataCategory != null ? dataCategory.map((value) => {
                  return (
                    <div
                      className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`}
                      onClick={() => GetCategory(value.categorie_id, value.categorie_name)}
                    >
                      {value.categorie_name}
                    </div>
                  );
                }) : setDataCategory([])}
            </Dropdown>
            <Input type="text" htmlFor="categoryId" name="category" label="Sous catégorie" event={onSetSubcategory} icon={<BiBeer size="0.95rem" />} />
            <Input type="text" htmlFor="designationId" name="designation" label="Descption de la catégorie" event={onSetTypecategoty} icon={<BiAlarmSnooze size="0.95rem" />} />
            <Button text={"Enregistrer la sous catégorie"} event={() => AddSubCategory()} />

          </div>
        </div>


        <div className="ml-6 bg-white shadow-md rounded-md p-4 w-full ">
          <table className={`border  border-gray-200 w-full`}>
            <tbody>
              <tr className={`${style.bg}`}>
                <td className={`border border-gray-200 text-white px-2`}>Catégorie</td>
                <td className={`border border-gray-200 text-white px-2`}>Sous catégorie</td>
              </tr >
              {
                dataSubCategory != undefined && dataSubCategory != null ? dataSubCategory.map((value) => {
                  return <tr key={value.sub_categorie_id} className={`border border-gray-200 text-xs`}>
                    <td className={`border border-gray-200 text-sm px-2 `}>{value.categorie_name}</td>
                    <td className={`border border-gray-200 text-sm px-2`}>{value.sub_categorie_name}</td>
                    <td className={`border border-gray-200 text-sm px-2`}>
                      <div className={`bg-red-600 flex justify-center p-1 rounded-sm cursor-pointer w-9`} onClick={() => DeleteSubCategory(value.sub_categorie_id)} >
                        {<BiMinus size="0.95rem" className={` text-white`} />}
                      </div>
                    </td>
                    <td className={`border border-gray-200 text-sm px-2`}>
                      <div className={`bg-green-500 flex justify-center p-1 rounded-sm cursor-pointer w-9`} onClick={() => DeleteSubCategory(value.sub_categorie_id)} >
                        {<BiPencil size="0.95rem" className={` text-white`} />}
                      </div>
                    </td>


                  </tr>


                }) : SetDatatSubCategory([])

              }
            </tbody>
          </table>
        </div>
      </div>



    </div>
  );
}
