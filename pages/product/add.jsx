import React, { useState } from 'react'
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiAbacus, BiAddToQueue, BiArrowFromBottom, BiNavigation, BiSquareRounded } from 'react-icons/bi'
import { Dropdown } from '../../components/s/dropdown'
import Router from 'next/router'

const NewProduct = () => {

     const [designation, setDesignation] = useState("");
     const onDesignation = (e) => {
          setDesignation(e.target.value);
     };
     const [dosage, setDosage] = useState("");
     const onDosage = (e) => {
          setDosage(e.target.value);
     };
     const [forme, setForme] = useState("");
     const onForme = (e) => {
          setForme(e.target.value);
     };
     const [format, setFormat] = useState("");
     const onFormat = (e) => {
          setFormat(e.target.value);
     };
     const [alertStock, setAlerteStock] = useState("");
     const onAlerteStock = (e) => {
          setAlerteStock(e.target.value);
     };

     const [categorie, setCategorie] = useState("");
     const [idCategorie, setIdCategorie] = useState("");
     const [dataCategorie, setDataCategorie] = useState([]);
     const onCategorisation = (e) => {
          setCategorie(e.target.value);
          if (e.target.value != "") {
               const data = { id: "12EC", category: "Garoumie" }
               setDataCategorie([data])
               setCategoryState("")
          } else setCategoryState("hidden")
     };
     const GetCategory = (id, category) => {
          setCategoryState("hidden")
          setCategorie(category)
          setIdCategorie(id)
     }
     const [mark, setMark] = useState("");
     const [Idmark, setIdMark] = useState("");
     const [dataMarque, setDataMarque] = useState([]);
     const onSetMark = (e) => {
          setMark(e.target.value);
          if (e.target.value != "") {
               const data = { id: "ODK", mark: "Melancolique" }
               setDataMarque([data])
               setMarkState("")
          } else setMarkState("hidden")
     }; 
     
     const GetMark = (id, mark) => {
          setMarkState("hidden")
          setMark(mark)
          setIdMark(id)
          console.log(id, mark)
     }

     const [categoryState, setCategoryState] = useState("hidden")
     const [categoryFomState, setCategoryFomState] = useState("hidden")
     const [markState, setMarkState] = useState("hidden")
     const AddProduct = async () => {
          //  await NewProduct().then((response)=>{
          //        console.log(response.data)
          //  })
          console.log(idCategorie, Idmark, designation, dosage, format, forme, alertStock)
     }

     return (
          <div className={` flex flex-col bg-gray-4 my-6 justify-center items-center  `}>
               <div className={` flex flex-col bg-gray-4 my-6 w-auto `}>
                    <div className={` flex flex-col w-full`}>
                         <label className={` text-xl font-bold`}> Ajouter un nouveu produit </label>
                         <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un nouveau produit </label>
                    </div>
                    <div className={`flex flex-col  my-4`}>
                         <div className={`w-44`}>
                              <ButtonIcon text={'Nouvelle Catégorie'} event={() => Router.push("/categories/category")} icon={<BiAddToQueue size="0.95rem" className={`${style.text}  mx-1 group-hover:text-white `} />} />
                         </div>
                    </div>
                    <div className={` flex flex-col w-full`}>
                         <Dropdown state={categoryState} type="text" htmlFor="categorieId" name="catergorie" label="Catégorie du produit" value={categorie} event={onCategorisation}>
                              {dataCategorie.map((value) => {
                                   return <div className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetCategory(value.id, value.category)}>{value.category}</div>
                              })}
                         </Dropdown>
                         <Dropdown state={markState} type="text" htmlFor="markId" name="mark" label="Marque du produit" value={mark} event={onSetMark}>
                              {dataMarque.map((value) => {
                                   return <div className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetMark(value.id, value.mark)}>{value.mark}</div>
                              })}
                         </Dropdown>

                         <Input type="text" htmlFor="designationId" name="designation" label="Désignation" event={onDesignation} icon={<BiNavigation size="0.95rem" />} />
                         <Input type="numeric" htmlFor="dosageId" name="dosage" label="Dosage" event={onDosage} icon={<BiSquareRounded size="0.95rem" />} />
                         <Input type="numeric" htmlFor="formatId" namat="format" label="Format du produit" event={onFormat} icon={<BiArrowFromBottom size="0.95rem" />} />
                         <Input type="numeric" htmlFor="formeId" name="forme" label="Forme du produit" event={onForme} icon={<BiAbacus size="0.95rem" />} />
                         <Input type="text" htmlFor="saId" name="sa" label="Stock d'alèrte" event={onAlerteStock} icon={<BiAddToQueue size="0.95rem" />} />
                         <Button text={'Enregistrer le produit'} event={() => AddProduct()} />
                    </div>
               </div>
          </div>
     )

}
export default NewProduct