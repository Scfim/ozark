import React, { useEffect, useState } from 'react'
import { Input } from '../../components/s/input'
import { Button } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiBox, BiMailSend, BiPhone, BiUser } from 'react-icons/bi'
import { addClient, editClient,deleteClient,getClient } from '../api/client'

const NewProvider = () => {

     useEffect(()=>{     
          // GetClient()
     },[])

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
          await addClient({ name: client, adress: addres, phone: phone, mailAdd: mailAdress }).then((response) => {
               console.log(response.data)
          })
     }
     const EditClient = async () => {
          await editClient({ id: clientId, name: client, adress: addres, phone: phone, mailAdd: mailAdress }).then((response) => {
               console.log(response.data)
          })
     }
     const DeleteClient = async () => {
          await deleteClient({ id: clientId }).then((response) => {
               console.log(response.data)
          })
     }
     const GetClient = async () => {
          await getClient().then((response) => {
               console.log(response.data)
          })
     }



     return (
          <div className={` flex flex-col bg-gray-4 my-10 justify-center items-center`}>
               <div className={` flex flex-col `}>
                    <div className={` flex flex-col w-full mb-8`}>
                         <label className={`text-xl font-bold`}> Ajouter un nouveau Client </label>
                         <label className={`text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un nouveau client </label>
                    </div>
                    <div className={` flex flex-col w-full`}>
                         <Input type="text" htmlFor="ClientId" name="client" label="Nom du Client" event={onSetClient} icon={<BiUser size="0.95rem" />} />
                         <Input type="numeric" htmlFor="AdressId" name="Adress" label="Adresse du fournisseur" event={onSetAdress} icon={<BiBox size="0.95rem" />} />
                         <Input type="numeric" htmlFor="PhoneId" namat="Phone" label="Téléphone" event={onSetPhone} icon={<BiPhone size="0.95rem" />} />
                         <Input type="numeric" htmlFor="mailId" name="mail" label="Adresse Email" event={onSetMailAdress} icon={<BiMailSend size="0.95rem" />} />
                         <Button text={'Enregistrer le client'} event={() => AddClient()} />
                    </div>
               </div>
          </div>
     )

}
export default NewProvider