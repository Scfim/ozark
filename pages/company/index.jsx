import React, { useState } from 'react'
import { Input } from '../../components/s/input'
import { Button } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiGlobe, BiHome, BiMailSend, BiPhone, BiRepost, BiWorld } from 'react-icons/bi'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'


const NewProduct = () => {
     useIsLoggedIn()

     const [shop, setShop] = useState("");
     const onSetShop = (e) => {
          setShop(e.target.value);
     };
     const [mailAddress, setMailAddress] = useState("");
     const onSetAddressMail = (e) => {
          setMailAddress(e.target.value);
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
     const [addressShop, setAddressShop] = useState("");
     const onSetAddressShop = (e) => {
          setAddressShop(e.target.value);
     };

     const UpdateShop = async () => {
          //    await NewProduct().then((response)=>{
          //            console.log(response.data)
          //    })
          console.log(shop, mailAddress, phone, siteWeb, bp, addressShop)
     }

     return (
          <div className={`flex h-1/2 justify-center items-center `}>
               <div className={`flex `}>
                    <div className={` flex flex-col bg-gray-4 my-6 m-3`}>
                         <div className={` flex flex-col w-full mb-5`}>
                              <label className={`text-xl font-bold`}> Paramètrer votre Magasin </label>
                              <label className={`text-sm font-normal ${style.text}`}> Complèter les champs ci-bas! </label>
                         </div>

                         <div className={` flex flex-col w-full`}>
                              <Input type="text" htmlFor="designationId" name="designation" label="Nom du magasin" event={onSetShop} icon={<BiHome size="0.95rem" />} />
                              <Input type="numeric" htmlFor="mailId" name="mail" label="Adresse mail" event={onSetAddressMail} icon={<BiMailSend size="0.95rem" />} />
                              <Input type="numeric" htmlFor="phoneId" namat="phone" label="Numéro de télephone" event={onSetPhone} icon={<BiPhone size="0.95rem" />} />
                              <Input type="numeric" htmlFor="phoneId" name="phone" label="Site web" event={onSetSiteWeb} icon={<BiGlobe size="0.95rem" />} />
                              <Input type="text" htmlFor="bpId" name="bp" label="Boîte postale" event={onSetBp} icon={<BiRepost size="0.95rem" />} />
                              <Input type="text" htmlFor="adressId" name="adress" label="Adresse du magasin" event={onSetAddressShop} icon={<BiWorld size="0.95rem" />} />
                              <Button text={'Valider les informations'} event={() => UpdateShop()} />
                         </div>

                    </div>
                    {/* <div className={`w-full px-10 flex justify-center items-end `}>
                    <img src="/src/shop.jpg" alt="" style={{width:"80% ",height:"80%"}}  />
              </div> */}
               </div>
          </div>

     )

}
export default NewProduct