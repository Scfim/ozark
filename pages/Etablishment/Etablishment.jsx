import React, { useState,useEffect } from 'react'
import { Input } from '../../components/s/input'
import { Button } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiGlobe, BiHome, BiMailSend, BiPhone, BiRepost, BiWorld } from 'react-icons/bi'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import {getEtablishment,addEtablishement} from "../api/etablishment";

const NewProduct = () => {
     
     useIsLoggedIn()
     useEffect(() => {
          GetEtablishment();         
     },[])

     const [shop, setShop] = useState("");
     const onSetShop = (e) => {
          setShop(e.target.value);
     };
    
     const [phone, setPhone] = useState("");
     const onSetPhone = (e) => {
          setPhone(e.target.value);
     };
     const [siteWeb, setSiteWeb] = useState("");
     const onSetSiteWeb = (e) => {
          setSiteWeb(e.target.value);
     };
     const [bp, setBp] = useState("");
     const onSetBp = (e) => {
          setBp(e.target.value);
     };
     const [addressMail, setAddressMail] = useState("");
     const onsetAddressMail = (e) => {
          setAddressMail(e.target.value);
     };
     const [addressShop, setAddressShop] = useState("");
     const onSetAddressShop = (e) => {
          setAddressShop(e.target.value);
     };
  
     const GetEtablishment=()=>{
          getEtablishment().then((response)=>{             
               setAddressShop(response[0].etablishment_adress)
               console.log(response[0])
               setShop(response[0].etablishement_name)              
               setBp(response[0].etablishement_bp)
               setAddressMail(response[0].etablishement_mail)
               setPhone(response[0].etablishement_phone_number)
               setSiteWeb(response[0].etablishement_web_site)
              
          })
     }

     const UpdateShop = async () => {

               await addEtablishement({ 
                    name: shop,
                    mail:addressMail,
                    phone:phone,
                    webSite: siteWeb,
                    logo: 'logo',
                    bp:bp,
                    adress:addressShop
               }).then((res) => {
                    console.log(res)
                    // setIsStatusHidden(false);
                    // setStatusMessage(res.data.message);
                    // if (res.data.type.toLowerCase() === "success") setStatusType("success")
                    // else {
     
                    //      setStatusType("error")
                    //      setStatusMessage(res.data.message);
                    // }
                    GetEtablishment()
               })
     }

     return (
          <div className={`flex h-1/2 justify-center items-center `}>
               <div className={` bg-white mt-52 px-5 shadow-lg rounded-lg`}>
               <div className={`flex `}>
                    <div className={` flex flex-col bg-gray-4 my- m-3`}>
                         <div className={` flex flex-col w-full mb-5`}>
                              <label className={`text-xl font-bold`}> Paramètrer votre Magasin </label>
                              <label className={`text-sm font-normal ${style.text}`}> Complèter les champs ci-bas! </label>
                         </div>

                         <div className={` flex flex-col w-full`}>
                              <Input type="text" htmlFor="designationId" name="designation" label="Nom du magasin" value={shop} event={onSetShop} icon={<BiHome size="0.95rem" />} />
                              <Input type="numeric" htmlFor="mailId" name="mail" label="Adresse mail" value={addressMail} event={onsetAddressMail} icon={<BiMailSend size="0.95rem" />} />
                              {/* <Input type="numeric" htmlFor="phoneId" namat="phone" label="Numéro de télephone" value={addressMail} event={onsetAddressMail} icon={<BiM size="0.95rem" />} /> */}
                              <Input type="numeric" htmlFor="phoneId" namat="phone" label="Numéro de télephone" value={phone} event={onSetPhone} icon={<BiPhone size="0.95rem" />} />
                              <Input type="numeric" htmlFor="phoneId" name="phone" label="Site web" value={siteWeb} event={onSetSiteWeb} icon={<BiGlobe size="0.95rem" />} />
                              <Input type="text" htmlFor="bpId" name="bp" label="Boîte postale"value={bp}  event={onSetBp} icon={<BiRepost size="0.95rem" />} />
                              <Input type="text" htmlFor="adressId" name="adress" label="Adresse du magasin" value={addressShop} event={onSetAddressShop} icon={<BiWorld size="0.95rem" />} />
                              <Button text={'Valider les informations'} event={() => UpdateShop()} />
                         </div>

                    </div>
                
               </div>
               </div>
          </div>

     )

}
export default NewProduct