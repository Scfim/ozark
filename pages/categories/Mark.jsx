import React, { useEffect, useState } from 'react'
import { BiBeer, BiPencil, BiTrash, BiTrophy} from 'react-icons/bi';
import { Input } from '../../components/s/input'
import { Button } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { addMark, getMark } from '../api/Mark';


const Mark = () => {


    useEffect(() => {
               GetMark()
    }, [])
    const [mark, setMark] = useState("");
    const onSetMark = (e) => {
        setMark(e.target.value);
    };
    const [descriptionMark, setDescriptionMark] = useState("");
    const onSetDescriptionMark= (e) => {
        setDescriptionMark(e.target.value);
    };

    const [data,setData]=useState([])
    async function AddMark(){
        await addMark({name:mark,description:descriptionMark}).then((response)=>{          
             GetMark()
        })
    }

    async function GetMark(){
         await getMark().then((response)=>{
              setData(response.data.data)
         })
    }
     
    return <div className={` flex flex-col w-full h-screen  items-center `}>
          <div className={` flex flex-col `}>            
              <div id="categorie" className={`w-full flex mt-10`} >
                   <div className={`flex flex-col`}>
                        <label htmlFor="" className={`text-xl font-bold my-1`}>Ajouter une nouvelle catégorie</label>
                        <label htmlFor="" className={`text-sm mt-1 mb-5 ${style.text} `}>Assurez vous de mieux complèter les champs ci-bas</label>
                        <Input type="text" htmlFor="markId" name="mark" label="Marque du produit" event={onSetMark} icon={<BiBeer size="0.95rem" />} />
                        <Input type="text" htmlFor="descrptionId" name="descrption" label="Description de la marque" event={onSetDescriptionMark} icon={<BiTrophy size="0.95rem" />} />
                        <Button text={'Ajouter nouvelle marque'} event={() =>AddMark()} />
                   </div>
                   <div className={`flex flex-row mx-16 mt-10`}>
                        <div>
                        <table className={`border border-gray-200 w-96`}>
                                                 <tr className={`${style.bg}`}>
                                                      <td className={`border border-gray-200 text-white px-2`}>Marques des produits</td>
                                                      <td className={`border border-gray-200 text-white px-2`}>Descriptions</td>
                                                 </tr >
                        {
                           data!=undefined && data.length>0?   data.map((value) => {
                                  return  <tr className={`border border-gray-200 text-xs`}>
                                                      <td className={`border border-gray-200 text-sm px-2 `}>{value.mark_name}</td>
                                                      <td className={`border border-gray-200 text-sm px-2`}>{value.mark_description}</td>
                                                      <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                                      <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                                 </tr>
                                           
                                 
                             }):setData([])
                        } </table>
                   </div>
                   </div>
              </div>
              {/* <SubCategory state={stateSubCategory} /> */}
         </div>

    </div>



}

export default Mark