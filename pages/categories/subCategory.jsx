import React, { useState } from "react";
import { Input } from "../../components/s/input";
import { Button } from "../../components/s/button";
import style from "../../styles/App.module.css";
import { BiAlarmSnooze, BiBeer } from "react-icons/bi";
import { Dropdown } from "../../components/s/dropdown";
import {
  addSubCategory,
  editSubCategory,
  deleteSubCategory,
} from "../api/subCategory";

export default function SubCategory({ state }) {
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
      const data = { id: "12EC", category: "Garoumie" };
      setDataCategory([data]);
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
    await addSubCategory().then((res) => {
      console.log(res.data);
      // console.log(idCategory,subCategory,typeCategory)
    });
  };
  const EditSubCategory = async () => {
    await editSubCategory().then((res) => {
      console.log(res.data);
      // console.log(idCategory,subCategory,typeCategory)
    });
  };
  const DeleteSubCategory = async () => {
    await deleteSubCategory().then((res) => {
      console.log(res.data);
      // console.log(idCategory,subCategory,typeCategory)
    });
  };

  return (
    <div id="categorie" className={`w-full flex ${state}`}>
      <div className={`flex flex-col  `}>
        <label htmlFor="" className={`text-xl font-bold my-1`}>
          Ajouter une nouvelle sous catégorie
        </label>
        <label htmlFor="" className={`text-sm mt-1 mb-5 ${style.text} `}>
          Assurez vous de mieux complèter les champs ci-bas
        </label>
        <Dropdown
          state={categoryState}
          type="text"
          htmlFor="categorieId"
          name="catergorie"
          label="Catégorie du produit"
          value={category}
          event={onSetCategory}
        >
          {dataCategory.map((value) => {
            return (
              <div
                className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`}
                onClick={() => GetCategory(value.id, value.category)}
              >
                {value.category}
              </div>
            );
          })}
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
    </div>
  );
}
