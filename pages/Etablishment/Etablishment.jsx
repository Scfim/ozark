import React, { useState } from 'react'
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiAbacus, BiAddToQueue, BiArrowFromBottom, BiGlobe, BiHome, BiMailSend, BiNavigation, BiPhone, BiRepost, BiSquareRounded, BiWorld } from 'react-icons/bi'
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
          console.log(id, category)
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
     }; const GetMark = (id, mark) => {
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
         <div className={`flex h-1/2 `}>
              <div className={` flex flex-col bg-gray-4 my-6 m-3`}>
               <div className={` flex flex-col w-full mb-5`}>
                    <label className={`mx-16 text-xl font-bold`}> Paramètrer votre Magasin </label>
                    <label className={`mx-16 text-sm font-normal ${style.text}`}> Complèter les champs ci-bas! </label>
               </div>
              
               <div className={` flex flex-col w-full`}>
                    <Input type="text" htmlFor="designationId" name="designation" label="Nom du magasin" event={onDesignation} icon={<BiHome size="0.95rem" />} />
                    <Input type="numeric" htmlFor="dosageId" name="dosage" label="Adresse mail" event={onDosage} icon={<BiMailSend size="0.95rem" />} />
                    <Input type="numeric" htmlFor="formatId" namat="format" label="Numéro de télephone" event={onFormat} icon={<BiPhone size="0.95rem" />} />
                    <Input type="numeric" htmlFor="formeId" name="forme" label="Site web" event={onForme} icon={<BiGlobe size="0.95rem" />} />
                    <Input type="text" htmlFor="saId" name="sa" label="Boîte postale" event={onAlerteStock} icon={<BiRepost size="0.95rem" />} />
                    <Input type="text" htmlFor="saId" name="sa" label="Adresse du magasin" event={onAlerteStock} icon={<BiWorld size="0.95rem" />} />
                    <Button text={'Valider les informations'} event={() => AddProduct()} />
               </div>
              
          </div>
              <div className={`w-full px-10 flex justify-center items-end `}>
                    <img src="/src/shop.jpg" alt="" style={{width:"80% ",height:"80%"}}  />
              </div>
         </div>
         
     )

}
export default NewProduct