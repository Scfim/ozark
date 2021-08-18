import React, { useEffect, useState } from 'react'
import { BiBeer, BiTrophy, BiAbacus, BiAlarmExclamation, BiTrash, BiPencil } from 'react-icons/bi';
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'


const Mark = () => {


    useEffect(() => {

    }, [])
    const [mark, setMark] = useState("");
    const onSetMark = (e) => {
        setMark(e.target.value);
    };
    const [descriptionMark, setDescriptionMark] = useState("");
    const onSetDescriptionMark= (e) => {
        setDescriptionMark(e.target.value);
    };

    const AddMark=()=>{

    }
     
    return <div className={` flex flex-col w-full h-screen justify-center items-center `}>
          <div className={` flex flex-col `}>
              <div className={` flex my-3`}>
                   <div className={`w-44 mt-8 `}>
                        {/* <ButtonIcon text={'Nouveau produit'} event={() => Router.push("/product/add")} icon={<BiAbacus size="0.95rem" className={`${style.text}  mx-1 group-hover:text-white `} />} /> */}
                   </div>
                   <div className={`w-44 mt-8`}>
                        {/* <ButtonIcon text={title} event={() => ChangeState()} icon={<BiAlarmExclamation size="0.95rem" className={`${style.text}  mx-1 group-hover:text-white `} />} /> */}
                   </div>
              </div>
              <div id="categorie" className={`w-full flex`} >
                   <div className={`flex flex-col`}>
                        <label htmlFor="" className={`text-xl font-bold my-1`}>Ajouter une nouvelle catégorie</label>
                        <label htmlFor="" className={`text-sm mt-1 mb-5 ${style.text} `}>Assurez vous de mieux complèter les champs ci-bas</label>
                        <Input type="text" htmlFor="markId" name="mark" label="Marque du produit" event={onSetMark} icon={<BiBeer size="0.95rem" />} />
                        <Input type="text" htmlFor="descrptionId" name="descrption" label="Description de la marque" event={onSetDescriptionMark} icon={<BiTrophy size="0.95rem" />} />
                        <Button text={'Ajouter nouvelle marque'} event={() =>AddMark()} />
                   </div>
                   <div className={`flex flex-row mx-16`}>
                        {/* {
                             dataCategory.map((value) => {
                                  return <div className={`mt-3`}>
                                            <table className={`border border-gray-200 w-96`}>
                                                 <tr className={`${style.bg}`}>
                                                      <td className={`border border-gray-200 text-white px-2`}>Categorie</td>
                                                      <td className={`border border-gray-200 text-white px-2`}>Type</td>
                                                 </tr >
                                                 <tr className={`border border-gray-200 text-xs`}>
                                                      <td className={`border border-gray-200 text-sm px-2 `}>{value.category}</td>
                                                      <td className={`border border-gray-200 text-sm px-2`}>{value.type}</td>
                                                      <td className={`border border-gray-200 text-sm px-2`}>{<BiTrash size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                                      <td className={`border border-gray-200 text-sm px-2`}>{<BiPencil size="0.95rem" className={`cursor-pointer hover:text-gray-900`} />}</td>
                                                 </tr>
                                            </table>
                                  </div>
                             })
                        } */}
                   </div>
              </div>
              {/* <SubCategory state={stateSubCategory} /> */}
         </div>

    </div>



}

export default Mark