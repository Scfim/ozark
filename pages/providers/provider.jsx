import React, { useState } from 'react'
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiBox, BiMailSend, BiPhone, BiUser } from 'react-icons/bi'
import { addProvider, editProvider,deleteProvider,getProvider } from '../api/provider'



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
     const [dataProvider, setDataProvider] = useState([]);     
     

     const AddProvider = async () => {
          await addProvider({ name: provider, adress: addres, phone: phone, mailAdd: mailAdress }).then((response) => {
               console.log(response.data)
          })
     }
     const EditProvider = async () => {
          await editProvider({ id: ProviderId, name: provider, adress: addres, phone: phone, mailAdd: mailAdress }).then((response) => {
               console.log(response.data)
          })
     }
     const DeleteProvider = async () => {
          await deleteProvider({ id: ProviderId }).then((response) => {
               console.log(response.data)
          })
     }
     const GetProvider = async () => {
          await getProvider().then((response) => {
               console.log(response.data)
          })
     }


     return (
          <div className={` flex flex-col bg-gray-4 my-10 justify-center items-center`}>
               <div className={` flex flex-col w-auto`}>
                    <div className={` flex flex-col w-full mb-8`}>
                         <label className={` text-xl font-bold`}> Ajouter un nouveau fournisseur </label>
                         <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un nouveau founisseur </label>
                    </div>                    
                    <div className={` flex flex-col w-full`}>
                         <Input type="text" htmlFor="ProviderId" name="Provider" label="Nom du fournisseur" event={onSetProvider} icon={<BiUser size="0.95rem" />} />
                         <Input type="numeric" htmlFor="AdressId" name="Adress" label="Adresse du fournisseur" event={onSetAdress} icon={<BiBox size="0.95rem" />} />
                         <Input type="numeric" htmlFor="PhoneId" namat="Phone" label="Téléphone" event={onSetPhone} icon={<BiPhone size="0.95rem" />} />
                         <Input type="numeric" htmlFor="mailId" name="mail" label="Adresse Email" event={onSetMailAdress} icon={<BiMailSend size="0.95rem" />} />
                         <Button text={'Enregistrer le founisseur'} event={() => AddProvider()} />
                    </div>
               </div>
          </div>
     )

}
export default NewProvider