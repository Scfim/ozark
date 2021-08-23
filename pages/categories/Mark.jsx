import React, { useEffect, useState } from 'react'
import { BiBeer, BiPencil, BiTrash, BiTrophy } from 'react-icons/bi';
import { Input } from '../../components/s/input'
import { Button } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { addMark, getMark } from '../api/Mark';
import {getSubCategory} from '../api/subCategory'
import { Dropdown } from '../../components/s/dropdown';


const Mark = () => {


     useEffect(() => {
          GetMark()
     }, [])
     const [mark, setMark] = useState("");
     const onSetMark = (e) => {
          setMark(e.target.value);
     };
     const [descriptionMark, setDescriptionMark] = useState("");
     const onSetDescriptionMark = (e) => {
          setDescriptionMark(e.target.value);
     };

   
     const [data, setData] = useState([])
     async function AddMark() {
          await addMark({ name: mark, description: descriptionMark, subCategorieId: subCategoryId }).then((response) => {
               GetMark()
          })
     }
   
     const[dataSubCategory,setDataSubCategory]=useState([])
     const[stateSubCategory,setStateSubCategory]=useState("hidden")
     const[subCategory,setCategory]=useState("")
     const[subCategoryId,setSubCategoryId]=useState("")

     const OnsetSubCategory= async(e)=>{
          setCategory(e.target.value)
           if(e.target.value!=""){
               await getSubCategory().then((response)=>{                
                    setDataSubCategory(response.data.data)
                    console.log(response.data.data)
                    setStateSubCategory("")
               })
           }else setStateSubCategory("hidden")
     }
     function GetCategory(subCategoryId,subCategoryName){
          setStateSubCategory("hidden")
          setSubCategoryId(subCategoryId)
          setCategory(subCategoryName)
     }



     async function GetMark() {
          await getMark().then((response) => {
               setData(response.data.data)
          })
     }

     return <div className={` flex flex-col w-full h-screen  items-center `}>
          <div className={` flex flex-col `}>
               <div id="categorie" className={`w-full flex mt-10`} >
                    <div className={`flex flex-col`}>
                         <label htmlFor="" className={`text-xl font-bold my-1`}>Ajouter une nouvelle catégorie</label>
                         <label htmlFor="" className={`text-sm mt-1 mb-5 ${style.text} `}>Assurez vous de mieux complèter les champs ci-bas</label>
                         <Dropdown state={stateSubCategory} type="text" htmlFor="subcategorieId" name="subcatergorie" label="Sous Catégorie du produit" value={subCategory} event={OnsetSubCategory}>
                              {dataSubCategory != undefined && dataSubCategory != null ? dataSubCategory.map((value) => {
                                   return <div key={value.sub_categorie_id} className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetCategory(value.sub_categorie_id, value.sub_categorie_name)}>{value.sub_categorie_name}</div>
                              }) :null}
                         </Dropdown>

                         <Input type="text" htmlFor="markId" name="mark" label="Marque du produit" event={onSetMark} icon={<BiBeer size="0.95rem" />} />
                         <Input type="text" htmlFor="descrptionId" name="descrption" label="Description de la marque" event={onSetDescriptionMark} icon={<BiTrophy size="0.95rem" />} />
                         <Button text={'Ajouter nouvelle marque'} event={() => AddMark()} />
                    </div>
                    <div className={`flex flex-row mx-16 mt-10`}>
                         <div>
                              <table className={`border border-gray-200 w-96`}>
                                   <tr className={`${style.bg}`}>
                                        <td className={`border border-gray-200 text-white px-2`}>Marques des produits</td>
                                        <td className={`border border-gray-200 text-white px-2`}>Descriptions</td>
                                   </tr >
                                   {
                                        data != undefined && data != null ? data.map((value) => {
                                             return <tr className={`border border-gray-200 text-xs`}>
                                                  <td className={`border border-gray-200 text-sm px-2 `}>{value.mark_name}</td>
                                                  <td className={`border border-gray-200 text-sm px-2`}>{value.mark_description}</td>
                                                  <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                                  <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                             </tr>
                                        }) : null
                                   } </table>
                         </div>
                    </div>
               </div>
               {/* <SubCategory state={stateSubCategory} /> */}
          </div>
     </div>



}

export default Mark