import React, { useEffect, useState } from "react";
import { Input } from "../../components/s/input";
import { Button } from "../../components/s/button";
import style from "../../styles/App.module.css";
import { BiAlarmSnooze, BiBeer, BiPencil, BiTrash } from "react-icons/bi";
import { Dropdown } from "../../components/s/dropdown";
import { addSubCategory, editSubCategory, deleteSubCategory, getSubCategory } from "../api/subCategory";
<<<<<<< HEAD
import { getCategory, getCategoryLike } from "../api/category";
=======
import { getCategory } from "../api/category";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
>>>>>>> 469c81906d6dda5be10ce94cf6f5bf3db8193b29

export default function SubCategory({ state }) {
useIsLoggedIn()
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
  const onSetCategory = async (e) => {
    setCategory(e.target.value);
    if (e.target.value != "") {
      await getCategoryLike({ categorieName: e.target.value }).then((res) => {
        setDataCategory(res.data.data)
        console.log(res.data.data)
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
      console.log(res);
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
  async function GetSubCategory() {
    await getSubCategory().then((res) => {
      SetDatatSubCategory(res.data.data)
      console.log(res.data.data)
    })
  }
  return (
    <div className={`flex flex-col my-6`} >

      <div className={` flex flex-col w-full mx-14`}>
        <label className={` text-xl font-bold`}> Ajouter une nouvelle sous-catégorie </label>
        <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier une sous-catégorie </label>
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
            <tr className={`${style.bg}`}>
              <td className={`border border-gray-200 text-white px-2`}>Catégorie</td>
              <td className={`border border-gray-200 text-white px-2`}>Sous catégorie</td>
            </tr >
            {
              dataSubCategory != undefined && dataSubCategory != null ? dataSubCategory.map((value) => {
                return <tr key={value.sub_categorie_id} className={`border border-gray-200 text-xs`}>
                  <td className={`border border-gray-200 text-sm px-2 `}>{value.categorie_name}</td>
                  <td className={`border border-gray-200 text-sm px-2`}>{value.sub_categorie_name}</td>
                  <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-gray-900`} onClick={() => DeleteSubCategory(value.sub_categorie_id)} />}</td>
                  <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                </tr>


              }) : SetDatatSubCategory([])

            }
          </table>
        </div>
      </div>



    </div>
  );
}
