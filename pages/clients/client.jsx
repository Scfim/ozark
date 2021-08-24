import React, { useEffect, useState } from 'react'
import { Input } from '../../components/s/input'
import { Button } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiBox, BiMailSend, BiPencil, BiPhone, BiTrash, BiUser } from 'react-icons/bi'
import { addClient, editClient,deleteClient,getClient } from '../api/client'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'

const NewProvider = () => {
useIsLoggedIn()
     useEffect(()=>{     
          GetClient()
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
          await addClient({ name: client, adress: addres, phone: phone, mail: mailAdress }).then((response) => {
               // console.log(response.data)
               GetClient()
          })
     }
     const EditClient = async () => {
          await editClient({ id: clientId, name: client, adress: addres, phone: phone, mail: mailAdress }).then((response) => {
               console.log(response.data)
          })
     }
     const DeleteClient = async () => {
          await deleteClient({ id: clientId }).then((response) => {
               console.log(response.data)
          })
     }

     const [data, setData]=useState([])
     const GetClient = async () => {
          await getClient().then((response) => {
               setData(response.data.data)              
          })
     }



     return (
          <div className={` flex  my-10 justify-center`}>
               <div className={` flex flex-col `}>
                    <div className={` flex flex-col w-full mb-8`}>
                         <label className={`text-xl font-bold`}> Ajouter un nouveau Client </label>
                         <label className={`text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un nouveau client </label>
                    </div>
                    <div className={` flex flex-col w-full`}>
                         <Input type="text" htmlFor="ClientId" name="client" label="Nom du Client" event={onSetClient} icon={<BiUser size="0.95rem" />} />
                         <Input type="text" htmlFor="AdressId" name="Adress" label="Adresse du client" event={onSetAdress} icon={<BiBox size="0.95rem" />} />
                         <Input type="text" htmlFor="PhoneId" namat="Phone" label="Téléphone" event={onSetPhone} icon={<BiPhone size="0.95rem" />} />
                         <Input type="mail" htmlFor="mailId" name="mail" label="Adresse Email" event={onSetMailAdress} icon={<BiMailSend size="0.95rem" />} />
                         <Button text={'Enregistrer le client'} event={() => AddClient()} />
                    </div>
               </div>
               <div className={`mt-24`}>
               <table className={`border border-gray-200 w-96`}>
                              <tr className={`${style.bg}`}>
                                   <td className={`border border-gray-200 text-white px-2`}>Nom</td>
                                   <td className={`border border-gray-200 text-white px-2`}>Télephone</td>
                                   <td className={`border border-gray-200 text-white px-2`}>Mail</td>
                                   <td className={`border border-gray-200 text-white px-2`}>Adresse</td>
                              </tr >
                              {
                                 data!=undefined && data!=null?data.map((value) => {
                                        return <tr  className={`border border-gray-200 text-xs`}>
                                             <td className={`border border-gray-200 text-sm px-2 `}>{value.client_name}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{value.client_phone_number}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{value.client_mail_adress}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{value.client_adress}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                        </tr>

                                        // </div>
                                   }):setData([])

                              }
                         </table>
               </div>
          </div>
     )

}
export default NewProvider