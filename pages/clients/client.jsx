import React, { useState } from 'react'
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiAbacus, BiAddToQueue, BiArrowFromBottom, BiBox, BiMailSend, BiNavigation, BiPhone, BiSquareRounded, BiUser } from 'react-icons/bi'
import { Dropdown } from '../../components/s/dropdown'
import Router from 'next/router'

const NewProvider = () => {

     const [client, setClient] = useState("");
     const onSetClient = (e) => {
          setClient(e.target.value);
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
 
     const AddClient = async () => {
          //  await NewProduct().then((response)=>{
          //        console.log(response.data)
          //  })
          console.log(client,addres,phone,mailAdress)
     }

     return (
          <div className={` flex flex-col bg-gray-4 my-10`}>
               <div className={` flex flex-col w-full mb-8`}>
                    <label className={`mx-16 text-xl font-bold`}> Ajouter un nouveau Client </label>
                    <label className={`mx-16 text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un nouveau client </label>
               </div>
               {/* <div className={`flex flex-col mx-16 my-4`}>
                    <div className={`w-44`}>
                         <ButtonIcon text={'Nouvelle Catégorie'} event={()=>Router.push("/category/Category")} icon={<BiAddToQueue size="0.95rem" className={`${style.text}  mx-1 group-hover:text-white `} />} />
                    </div>                  
               </div> */}
               <div className={` flex flex-col w-full`}>
                    <Input type="text" htmlFor="ClientId" name="client" label="Nom du Client" event={onSetClient} icon={<BiUser size="0.95rem" />} />
                    <Input type="numeric" htmlFor="AdressId" name="Adress" label="Adresse du fournisseur" event={onSetAdress} icon={<BiBox size="0.95rem" />} />
                    <Input type="numeric" htmlFor="PhoneId" namat="Phone" label="Téléphone" event={onSetPhone} icon={<BiPhone size="0.95rem" />} />
                    <Input type="numeric" htmlFor="mailId" name="mail" label="Adresse Email" event={onSetMailAdress} icon={<BiMailSend size="0.95rem" />} />
                    <Button text={'Enregistrer le client'} event={() => AddClient()} />
               </div>
          </div>
     )

}
export default NewProvider