import React, { useState } from 'react'
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiAbacus, BiAddToQueue, BiArrowFromBottom, BiBox, BiMailSend, BiNavigation, BiPhone, BiSquareRounded, BiUser } from 'react-icons/bi'
import { Dropdown } from '../../components/s/dropdown'
import Router from 'next/router'

const NewProvider = () => {

     const [provider, setProvider] = useState("");
     const onSetProvider = (e) => {
          setProvider(e.target.value);
     };
     const [addres, setAdress] = useState("");
     const onSetAdress = (e) => {
          setAdress(e.target.value);
     };
     const [phone, setPhone] = useState("");
     const onSetPhone = (e) => {
          setPhone(e.target.value);
     };
     const [mailAdress, setMailAdress] = useState("");
     const onSetMailAdress = (e) => {
          setMailAdress(e.target.value);
     };
 
     const AddProvider = async () => {
          //  await NewProduct().then((response)=>{
          //        console.log(response.data)
          //  })
          console.log(provider,addres,phone,mailAdress)
     }

     return (
          <div className={` flex flex-col bg-gray-4 my-10`}>
               <div className={` flex flex-col w-full mb-8`}>
                    <label className={`mx-16 text-xl font-bold`}> Ajouter un nouveu produit </label>
                    <label className={`mx-16 text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un nouveau produit </label>
               </div>
               {/* <div className={`flex flex-col mx-16 my-4`}>
                    <div className={`w-44`}>
                         <ButtonIcon text={'Nouvelle Catégorie'} event={()=>Router.push("/category/Category")} icon={<BiAddToQueue size="0.95rem" className={`${style.text}  mx-1 group-hover:text-white `} />} />
                    </div>                  
               </div> */}
               <div className={` flex flex-col w-full`}>
                    <Input type="text" htmlFor="ProviderId" name="Provider" label="Nom du fournisseur" event={onSetProvider} icon={<BiUser size="0.95rem" />} />
                    <Input type="numeric" htmlFor="AdressId" name="Adress" label="Adresse du fournisseur" event={onSetAdress} icon={<BiBox size="0.95rem" />} />
                    <Input type="numeric" htmlFor="PhoneId" namat="Phone" label="Téléphone" event={onSetPhone} icon={<BiPhone size="0.95rem" />} />
                    <Input type="numeric" htmlFor="mailId" name="mail" label="Adresse Email" event={onSetMailAdress} icon={<BiMailSend size="0.95rem" />} />
                    <Button text={'Enregistrer le produit'} event={() => AddProvider()} />
               </div>
          </div>
     )

}
export default NewProvider