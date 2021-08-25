import React, { useEffect, useState } from "react";
import {
  BiBeer,
  BiTrophy,
  BiAbacus,
  BiAlarmExclamation,
  BiTrash,
  BiPencil,
} from "react-icons/bi";
import { Input } from "../../components/s/input";
import { Button} from "../../components/s/button";
import style from "../../styles/App.module.css";
import { addCategory, getCategory,deleteCategory,updateCategory } from "../api/category";


const Category = ({ state }) => {
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
  async function GetCategory() {
    await getCategory().then((res) => {
      console.log(res);
      setDataCategory(res.data.data);
    });
  }
  const resetStatusIsHidden = () => setIsStatusHidden(true);
  const [stateCategory, setStatecategory] = useState("");
  const [stateSubCategory, setSubStatecategory] = useState("hidden");
  const [title, setTitle] = useState("Sous Catégorie");
  const ChangeState = () => {
    if (stateCategory == "") {
      setStatecategory("hidden");
      setSubStatecategory("");
      setTitle(" Catégorie");
    } else {
      setStatecategory("");
      setSubStatecategory("hidden");
      setTitle("Sous Catégorie");
    }
  };
  const AddCategory = async () => {
    await addCategory({
      name: category,
      type: typeCategory,
    }).then((res) => {     
        GetCategory();       
    });
  }
  const DeleteCategory = async (category_id) => {
    await deleteCategory({
      categorieid:category_id,
    }).then((res) => {     
        GetCategory();       
        console.log(res)
    });
  }
  return (
    <div className={`flex flex-col my-6`} >
      <div className={` flex flex-col w-full mx-14`}>
        <label className={` text-xl font-bold`}> Ajouter une nouvelle catégorie </label>
        <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier une catégorie </label>
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
                          {
                            <BiTrash
                              size="0.95rem"
                              className={`cursor-pointer hover:text-gray-900`}
                              onClick={() =>DeleteCategory(value.categorie_id)}
                            />
                          }
                        </td>
                        <td className={`border border-gray-200 text-sm px-2`}>
                          {
                            <BiPencil
                              size="0.95rem"
                              className={`cursor-pointer hover:text-gray-900`}
                              
                            />
                          }
                        </td>
                      </tr>
                    );
                  })
                  : null}
              </table>
            </div>

      </div>


    </div>
  );
};

export default Category;
