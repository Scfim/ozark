import React, { useEffect, useState } from 'react'
import { Input } from '../../components/s/input'
import { Button } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiBox, BiMailSend, BiMinus, BiPencil, BiPhone, BiTrash, BiUser } from 'react-icons/bi'
import { addClient, editClient, deleteClient, getClient } from '../api/client'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import Headers from '../../components/Headers'
import Status from "../../components/Status";

const NewProvider = () => {
     useIsLoggedIn()
     const resetStatusIsHidden = () => setIsStatusHidden(true);
     const [statusType, setStatusType] = useState("");
     const [isStatusHidden, setIsStatusHidden] = useState(true);
     const [statusMessage, setStatusMessage] = useState("");

     useEffect(() => {
          GetClient()
     }, [])

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
          await addClient({ name: client, adress: addres, phone: phone, mail: mailAdress }).then((res) => {
               setIsStatusHidden(false);
               setStatusMessage(res.data.message);
               if (res.data.type.toLowerCase() === "success") setStatusType("success")
               else {

                    setStatusType("error")
                    setStatusMessage(res.data.message);
               }
               GetClient()
          })
     }
     const EditClient = async () => {
          await editClient({ id: clientId, name: client, adress: addres, phone: phone, mail: mailAdress }).then((response) => {
               GetClient()
          })
     }
     const DeleteClient = async (clientId) => {
          await deleteClient({ clientId: clientId }).then((response) => {
               GetClient()
          })
     }

     const [data, setData] = useState([])
     const GetClient = () => {
          getClient().then((response) => {
               setData(response.data)
          })
     }

     return (
          <div className={`flex flex-col my-6`} >
               <Headers title="Ajouter un client" />
               <div className={` flex flex-col w-full mx-14`}>
                    <label className={` text-xl font-bold`}> Ajouter un client </label>
                    <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un client </label>
               </div>
               <div>
                    <Status type={statusType} isHidden={isStatusHidden} message={statusMessage} resetStatusIsHidden={resetStatusIsHidden} />
               </div>
               <div className=" flex mx-14 my-8" >
                    <div className="flex">
                         <div className="flex flex-col bg-white shadow-md rounded-md p-4  ">
                              <Input type="text" htmlFor="ClientId" name="client" label="Nom du Client" event={onSetClient} icon={<BiUser size="0.95rem" />} />
                              <Input type="text" htmlFor="AdressId" name="Adress" label="Adresse du client" event={onSetAdress} icon={<BiBox size="0.95rem" />} />
                              <Input type="text" htmlFor="PhoneId" namat="Phone" label="Téléphone" event={onSetPhone} icon={<BiPhone size="0.95rem" />} />
                              <Input type="mail" htmlFor="mailId" name="mail" label="Adresse Email" event={onSetMailAdress} icon={<BiMailSend size="0.95rem" />} />
                              <Button text={'Enregistrer le client'} event={() => AddClient()} />
                         </div>
                    </div>

                    <div className="ml-6 bg-white shadow-md rounded-md p-4 w-full ">
                         <table className={`border  border-gray-200 w-full`}>
                              <tbody>
                                   <tr className={`${style.bg}`}>
                                        <td className={`border border-gray-200 text-white px-2`}>Nom</td>
                                        <td className={`border border-gray-200 text-white px-2`}>Télephone</td>
                                        <td className={`border border-gray-200 text-white px-2`}>Mail</td>
                                        <td className={`border border-gray-200 text-white px-2`}>Adresse</td>
                                   </tr >
                                   {
                                        data != undefined && data != null ? data.map((value) => {
                                             return <tr className={`border border-gray-200 text-xs`}>
                                                  <td className={`border border-gray-200 text-sm px-2 `}>{value.client_name}</td>
                                                  <td className={`border border-gray-200 text-sm px-2`}>{value.client_phone_number}</td>
                                                  <td className={`border border-gray-200 text-sm px-2`}>{value.client_mail_adress}</td>
                                                  <td className={`border border-gray-200 text-sm px-2`}>{value.client_adress}</td>
                                                  <td className={`border border-gray-200 text-sm px-2`}>
                                                       <div className={`bg-red-600 flex justify-center p-1 rounded-sm cursor-pointer w-9`} onClick={() => DeleteClient(value.client_id)}>
                                                            {<BiMinus size="0.95rem" className={` text-white`} />}
                                                       </div>
                                                  </td> <td className={`border border-gray-200 text-sm px-2`}>
                                                       <div className={`bg-green-500 flex justify-center p-1 rounded-sm cursor-pointer w-9`} onClick={() => DeleteClient(value.client_id)}>
                                                            {<BiPencil size="0.95rem" className={` text-white`} />}
                                                       </div>
                                                  </td>
                                             </tr>

                                             // </div>
                                        }) : setData([])

                                   }
                              </tbody>
                         </table>
                    </div>
               </div>



          </div>
     )

}
export default NewProvider