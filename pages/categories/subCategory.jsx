import React, { useEffect, useState } from "react";
import { Input } from "../../components/s/input";
import { Button } from "../../components/s/button";
import style from "../../styles/App.module.css";
import { BiAlarmSnooze, BiBeer, BiPencil, BiTrash } from "react-icons/bi";
import { Dropdown } from "../../components/s/dropdown";
import { addSubCategory, editSubCategory, deleteSubCategory, getSubCategory } from "../api/subCategory";
import { getCategory } from "../api/category";

export default function SubCategory({ state }) {

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
      await getCategory().then((res) => {
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
    console.log(id, category);
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
    await editSubCategory().then((res) => {
      console.log(res.data);
      // console.log(idCategory,subCategory,typeCategory)
    });
  };
  const DeleteSubCategory = async () => {
    await getSubCategory().then((res) => {
      console.log(res.data.data);
      // console.log(idCategory,subCategory,typeCategory)
    });
  };


  const [dataSubCategory, SetDatatSubCategory] = useState([])
  async function GetSubCategory() {
    await getSubCategory().then((res) => {
      SetDatatSubCategory(res.data.data)
    })
  }
  return (
    <div id="categorie" className={`w-full flex justify-center `}>
      <div className={`flex flex-col  `}>
        <label htmlFor="" className={`text-xl font-bold my-1`}>
          Ajouter une nouvelle sous catégorie
        </label>
        <label htmlFor="" className={`text-sm mt-1 mb-5 ${style.text} `}>
          Assurez vous de mieux complèter les champs ci-bas
        </label>
        <Dropdown state={categoryState} type="text" htmlFor="categorieId" name="catergorie" label="Catégorie du produit" value={category} event={onSetCategory}>
          {
          dataCategory!=undefined && dataCategory!=null? dataCategory.map((value) => {
            return (
              <div
                className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`}
                onClick={() => GetCategory(value.categorie_id, value.categorie_name)}
              >
                {value.categorie_name}
              </div>
            );
          }):setDataCategory([])}
        </Dropdown>
        <Input
          type="text"
          htmlFor="categoryId"
          name="category"
          label="Sous catégorie"
          event={onSetSubcategory}
          icon={<BiBeer size="0.95rem" />}
        />
        <Input
          type="text"
          htmlFor="designationId"
          name="designation"
          label="Type de la catégorie"
          event={onSetTypecategoty}
          icon={<BiAlarmSnooze size="0.95rem" />}
        />
        <Button
          text={"Enregistrer la sous catégorie"}
          event={() => AddSubCategory()}
        />
      </div>
      <div className='mt-9'>
        <div className={`flex flex-row mx-16`}>
          <table className={`border border-gray-200 w-96`}>
            <tr className={`${style.bg}`}>
              <td className={`border border-gray-200 text-white px-2`}>CATEGORIE</td>
              <td className={`border border-gray-200 text-white px-2`}>SOUS CATEGORIE</td>
            </tr >
            {
              dataSubCategory != undefined  && dataSubCategory!=null? dataSubCategory.map((value) => {
                return <tr className={`border border-gray-200 text-xs`}>
                  <td className={`border border-gray-200 text-sm px-2 `}>{value.sub_categorie_name}</td>
                  <td className={`border border-gray-200 text-sm px-2`}>{value.sub_categorie_type}</td>
                  <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                  <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                </tr>

                // </div>
              }) : SetDatatSubCategory([])

            }
          </table>
        </div>
      </div>


    </div>
  );
}
