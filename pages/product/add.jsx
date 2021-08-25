import React, { useEffect, useState } from 'react'
import { Input } from '../../components/s/input'
import { Button } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiAddToQueue, BiNavigation, BiPencil, BiTrash } from 'react-icons/bi'
import { Dropdown } from '../../components/s/dropdown'

import {getAllLike } from '../api/Mark'
import { addProduct, getProduct,editProduct,deleteProduct } from '../api/product'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'



const NewProduct = () => {
     useIsLoggedIn()

     useEffect(() => {
          GetProduct()
     }, [])
     const [designation, setDesignation] = useState("");
     const onDesignation = (e) => {
          setDesignation(e.target.value);
     };
     const [dosage, setDosage] = useState("");
     const onDosage = (e) => {
          setDosage(e.target.value);
     };
     const [forme, setForme] = useState("");
     const onForme = (e) => {
          setForme(e.target.value);
     };
     const [format, setFormat] = useState("");
     const onFormat = (e) => {
          setFormat(e.target.value);
     };
     const [alertStock, setAlerteStock] = useState("");
     const onAlerteStock = (e) => {
          setAlerteStock(e.target.value);
     };


    
   const [mark, setMark] = useState("");
     const [Idmark, setIdMark] = useState("");
     const [dataMarque, setDataMarque] = useState([]);
     const onSetMark = async (e) => {
          setMark(e.target.value);
          console.log(e.target.value)
          if (e.target.value != "") {
               await getAllLike({ markName: e.target.value }).then((response) => {
                    console.log(response.data.data)
                    setDataMarque(response.data.data)
                    setMarkState("")
               })
          } else setMarkState("hidden")
     };

     const GetMark = (id, mark) => {
          setMarkState("hidden")
          setMark(mark)
          setIdMark(id)
          console.log(id, mark)
     }


     const [markState, setMarkState] = useState("hidden")
     const AddProduct = async () => {
          await addProduct({ markId: Idmark, name: designation,alertStock: alertStock }).then((response) => {
               GetProduct()               
          })
     }
     // const EditProduct = async () => {
     //      await addProduct({ markId: Idmark, name: designation, alertStock: alertStock }).then((response) => {
     //           GetProduct()               
     //      })
     // }
     const DeleteProduct = async (product_Id) => {
          await deleteProduct({productId:product_Id }).then((response) => {
               GetProduct()     
               console.log(product_Id)          
          })
     }

    

     const [data, setData] = useState([])
     const GetProduct = async () => {
          await getProduct().then((response) => {
               setData(response.data.data)              
          })

     }

     return (
          <div className={` flex flex-col  bg-gray-4 my-6 `}>
               <div className={` flex flex-col w-full mx-14`}>
                    <label className={` text-xl font-bold`}> Ajouter un nouveu produit </label>
                    <label className={` text-sm font-normal ${style.text}`}> Complèter les champs ci-bas pour identifier un nouveau produit </label>
               </div>
               <div className="flex mx-14  ">
                    <div className={`flex  `}>
                         <div className={` flex flex-col w-auto bg-white mt-4 p-4 rounded-md shadow-md`}>
                              <Input type="text" htmlFor="designationId" name="designation" label="Désignation" event={onDesignation} icon={<BiNavigation size="0.95rem" />} />
                              <Input type="number" htmlFor="saId" name="sa" label="Stock d'alèrte" event={onAlerteStock} icon={<BiAddToQueue size="0.95rem" />} />
                              <Dropdown state={markState} type="text" htmlFor="markId" name="mark" label="Marque du produit" value={mark} event={onSetMark}>
                                   {dataMarque != undefined ? dataMarque.map((value) => {
                                        return <div key={value.mark_id} className={`text-xs  cursor-pointer py-1 px-2 ${style.bgHovered}`} onClick={() => GetMark(value.mark_id, value.mark_name)}>{value.mark_name}</div>
                                   }) : setDataMarque([])}
                              </Dropdown>
                              <Button text={'Enregistrer le produit'} event={() => AddProduct()} />
                         </div>
                    </div>
                    
                    <div className={`mt-4 w-full ml-3 bg-white p-4  rounded-md shadow-md`}>
                         <table className={`w-full`}>
                              <tr className={`${style.bg}`}>
                                  
                                   <td className={`border border-gray-200 text-white px-2`}>Marques</td>
                                   <td className={`border border-gray-200 text-white px-2`}>Désignation</td>
                                   <td className={`border border-gray-200 text-white px-2`}>Stock Alerte</td>                                  
                              </tr >
                              {
                                   data != undefined? data.map((value) => {
                                        return <tr key={value.product_id} className={`border border-gray-200 text-xs`}>                                        
                                             <td className={`border border-gray-200 text-sm px-2 `}>{value.mark_name}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{value.product_name}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{value.product_alert_stock}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-blue-400`} onClick={()=>DeleteProduct(value.product_id)} />}</td>
                                             <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-blue-400`} />}</td>
                                        </tr>
                                      
                                   }) : setData([])
                              }
                         </table>
                    </div>
                    
               </div>

            
          </div>
     )

}
export default NewProduct