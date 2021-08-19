import React, { useEffect, useState } from 'react'
import { BiBeer, BiTrophy, BiAbacus, BiAlarmExclamation, BiTrash, BiPencil } from 'react-icons/bi';
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import Router from 'next/router'
import SubCategory from './subCategory';
import { addCategory, getCategory } from '../api/category'


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
     async function GetCategory() {
          await getCategory().then((res) => {
               setDataCategory(res.data.data)
               //  console.log(res.data.data)
          })
     }


     const [stateCategory, setStatecategory] = useState("")
     const [stateSubCategory, setSubStatecategory] = useState("hidden")
     const [title, setTitle] = useState("Sous Catégorie")
     const ChangeState = () => {

          if (stateCategory == "") {
               setStatecategory("hidden")
               setSubStatecategory("")
               setTitle(" Catégorie")
          } else {
               setStatecategory("")
               setSubStatecategory("hidden")
               setTitle("Sous Catégorie")
          }
     }
     const AddCategory = async () => {
          await addCategory({
               name: category,
               type: typeCategory,
          }).then((res) => {
               if (res.data.type === "success") {
                    GetCategory()
               } else { }
          })
     }



     return <div className={`${state} flex flex-col w-full h-screen justify- items-center `}>
          <div className={`${state} flex flex-col `}>
               <div className={` flex my-3`}>

               </div>
               <div id="categorie" className={`w-full flex ${stateCategory}`} >
                    <div className={`flex flex-col`}>
                         <label htmlFor="" className={`text-xl font-bold my-1`}>Ajouter une nouvelle catégorie</label>
                         <label htmlFor="" className={`text-sm mt-1 mb-5 ${style.text} `}>Assurez vous de mieux complèter les champs ci-bas</label>
                         <Input type="text" htmlFor="categoryId" name="category" label="Catégorie" event={onSetcategory} icon={<BiBeer size="0.95rem" />} />
                         <Input type="text" htmlFor="designationId" name="designation" label="Type de la catégorie" event={onSetTypecategoty} icon={<BiTrophy size="0.95rem" />} />
                         <Button text={'Enregistrer la catégorie'} event={() => AddCategory()} />
                    </div>
                    <div className={`flex flex-row mx-16`}>
                         <table className={`border border-gray-200 w-96`}>
                              <tr className={`${style.bg}`}>
                                   <td className={`border border-gray-200 text-white px-2`}>Categorie</td>                               
                              </tr >
                              {dataCategory != undefined|| dataCategory!=null? dataCategory.map((value) => {
                                   return <tr className={`border border-gray-200 text-xs`}>
                                        <td className={`border border-gray-200 text-sm px-2 `}>{value.categorie_name}</td>
                                        <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                        <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                   </tr>
                              }) : null

                              }
                         </table>
                    </div>
               </div>

          </div>
     </div>
}

export default Caterory