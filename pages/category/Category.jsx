import React, { useEffect, useState } from 'react'
import { BiBeer, BiTrophy, BiAddToQueue, BiAbacus, BiAlarmExclamation } from 'react-icons/bi';
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import Router from 'next/router'


const Caterory = ({ state }) => {

     useEffect(() => {
          GetCategory()
     }, [])

     const [category, setCategory] = useState("");
     const onSetcategory = (e) => {
          setCategory(e.target.value);
     };
     const [typeCategory, setTypecategory] = useState("");
     const onSetTypecategoty = (e) => {
          setTypecategory(e.target.value);
     };

     const [dataCategory, setDataCategory] = useState([])
     function GetCategory() {
          const data = {
               category: "automobile",
               type: "voiture lambourgino"
          }
          setDataCategory([data])

     }
     function AddCategory() { }

     return <div className={`${state} flex flex-row justify-center items-start w-full h-screen `}>
          <div className={`flex flex-col  `}>
               <div className={` flex ml-14`}>
                    <div className={`w-44 mt-8 `}>
                         <ButtonIcon text={'Nouveau produit'} event={() => Router.push("/product/add")} icon={<BiAbacus size="0.95rem" className={`${style.text}  mx-1 group-hover:text-white `} />} />
                    </div>
                    <div className={`w-44 mt-8`}>
                         <ButtonIcon text={'Sous Catégorie'} event={() => Router.push("/product/add")} icon={<BiAlarmExclamation size="0.95rem" className={`${style.text}  mx-1 group-hover:text-white `} />} />
                    </div>
               </div>
               <label htmlFor="" className={`mx-16 text-xl font-bold my-1`}>Ajouter une nouvelle catégorie</label>
               <label htmlFor="" className={`mx-16 text-sm mt-1 mb-5 ${style.text} `}>Assurez vous de mieux complèter les champs ci-bas</label>
               <Input type="text" htmlFor="categoryId" name="category" label="Catégorie" event={onSetcategory} icon={<BiBeer size="0.95rem" />} />
               <Input type="text" htmlFor="designationId" name="designation" label="Type de la catégorie" event={onSetTypecategoty} icon={<BiTrophy size="0.95rem" />} />
               <Button text={'Enregistrer la catégorie'} event={() => AddCategory()} />
          </div>
          <div className={`flex flex-row `}>
               {
                    dataCategory.map((value) => {
                         return <div className={`mt-8`}>
                              <table className={`border border-gray-200 w-96`}>
                                   <tr className={`${style.bg}`}>
                                        <th className={`border border-gray-200 text-white `}>Categorie</th>
                                        <th className={`border border-gray-200 text-white`}>Type</th>
                                   </tr >
                                   <tr className={`border border-gray-200 `}>
                                        <td className={`border border-gray-200 text-sm `}>{value.category}</td>
                                        <td className={`border border-gray-200 text-sm`}>{value.type}</td>
                                   </tr>
                              </table>
                         </div>
                    })
               }
          </div>

     </div>
}

export default Caterory