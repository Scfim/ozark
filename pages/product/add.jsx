import React, { useEffect, useState } from 'react'
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiAbacus, BiAddToQueue, BiArrowFromBottom, BiNavigation, BiPencil, BiSquareRounded, BiTrash } from 'react-icons/bi'
import { Dropdown } from '../../components/s/dropdown'
import Router from 'next/router'
import { getMark, getAllLike } from '../api/Mark'
import { getSubCategory } from '../api/subCategory'
import { addProduct, getProduct } from '../api/product'


const NewProduct = () => {

     useEffect(() => {
          GetProduct()
     }, [])
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
     const onCategorisation = async (e) => {
          setCategorie(e.target.value);
          if (e.target.value != "") {
               await getSubCategory().then((response) => {
                    setDataCategorie(response.data.data)
                    setCategoryState("")
               })

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
     const onSetMark = async (e) => {
          setMark(e.target.value);
          console.log(e.target.value)
          if (e.target.value != "") {
               await getAllLike({ name: e.target.value }).then((response) => {
                    console.log(response.data.data)
                    setDataMarque(response.data.data)
                    setMarkState("")
               })
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
          await addProduct({ subCategorieId: idCategorie, markId: Idmark, name: designation, dosage: dosage, forme: forme, format: format, alertStock: alertStock }).then((response) => {
               GetProduct()
               // console.log(response)
          })

     }

     const [data, setData] = useState([])
     const GetProduct = async () => {
          await getProduct().then((response) => {
               setData(response.data.data)
               console.log(response.data.data)
          })

     }

     return (
          <div className={` flex flex-col bg-gray-4 my-6 justify-center items-center`}>
               <div className={` flex flex-col bg-gray-4 my-6 w-auto `}>
                    <div className={` flex flex-col w-full`}>
                         <label className={` text-xl font-bold`}> Ajouter un nouveu produit </label>
                         <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un nouveau produit </label>
                    </div>

                    <div className={`flex`}>
                         <div className={` flex flex-col w-full mt-4`}>
                              <Input type="text" htmlFor="designationId" name="designation" label="Désignation" event={onDesignation} icon={<BiNavigation size="0.95rem" />} />
                              <Input type="text" htmlFor="saId" name="sa" label="Stock d'alèrte" event={onAlerteStock} icon={<BiAddToQueue size="0.95rem" />} />
                              {/* <Button text={'Enregistrer le produit'} event={() => AddProduct()} /> */}
                         {/* </div>
                         <div className={` flex flex-col w-full mt-4`}> */}
                              <Dropdown state={categoryState} type="text" htmlFor="categorieId" name="catergorie" label="Catégorie du produit" value={categorie} event={onCategorisation}>
                                   {dataCategorie.map((value) => {
                                        return <div key={value.sub_categorie_id} className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetCategory(value.sub_categorie_id, value.sub_categorie_name)}>{value.sub_categorie_name}</div>
                                   })}
                              </Dropdown>
                              <Dropdown state={markState} type="text" htmlFor="markId" name="mark" label="Marque du produit" value={mark} event={onSetMark}>
                                   {dataMarque.map((value) => {
                                        return <div key={value.mark_id} className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetMark(value.mark_id, value.mark_name)}>{value.mark_name}</div>
                                   })}
                              </Dropdown>
                              <Button text={'Enregistrer le produit'} event={() => AddProduct()} />
                         </div>
                    </div>
                    <div className={`mt-4`}>
                    <table className={` w-auto`}>
                         <tr className={`${style.bg}`}>
                              <td className={`border border-gray-200 text-white px-2`}>Catégorie</td>
                              <td className={`border border-gray-200 text-white px-2`}>Marques</td>
                              <td className={`border border-gray-200 text-white px-2`}>Désignation</td>
                              <td className={`border border-gray-200 text-white px-2`}>Stock Alerte</td>
                              {/* <td className={`border border-gray-200 text-white px-2`}>Adresse</td> */}
                         </tr >
                         {
                              data.map((value) => {
                                   return <tr className={`border border-gray-200 text-xs`}>
                                        <td className={`border border-gray-200 text-sm px-2 `}>{value.sub_categorie_name}</td>
                                        <td className={`border border-gray-200 text-sm px-2 `}>{value.mark_name}</td>
                                        <td className={`border border-gray-200 text-sm px-2`}>{value.product_name}</td>
                                        <td className={`border border-gray-200 text-sm px-2`}>{value.product_alert_stock}</td>
                                        <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                        <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                   </tr>

                                   // </div>
                              })

                         }
                    </table>
               </div>
               </div>             
          </div>
     )

}
export default NewProduct