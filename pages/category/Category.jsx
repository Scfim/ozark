import React, { useState } from 'react'
import { BiBeer, BiTrophy, BiAddToQueue } from 'react-icons/bi';
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'


const Caterory = ({ state }) => {

     const [category, setCategory] = useState("");
     const onSetcategory = (e) => {
          setCategory(e.target.value);
     };
     const [typeCategory, setTypecategory] = useState("");
     const onSetTypecategoty = (e) => {
          setTypecategory(e.target.value);
     };

     function AddCategory() {     }

     return <div className={`${state} flex flex-row justify-center items-start w-full h-screen`}>
          <div className={`flex flex-col`}>
               <label htmlFor="" className={`mx-16 text-xl font-bold my-1`}>Ajouter une nouvelle catégorie</label>
               <label htmlFor="" className={`mx-16 text-sm mt-1 mb-5 ${style.text} `}>Assurez vous de mieux complèter les champs ci-bas</label>
               <Input type="text" htmlFor="categoryId" name="category" label="Catégorie" event={onSetcategory} icon={<BiBeer size="0.95rem" />} />
               <Input type="text" htmlFor="designationId" name="designation" label="Type de la catégorie" event={onSetTypecategoty} icon={<BiTrophy size="0.95rem" />} />
               <Button text={'Enregistrer la catégorie'} event={() => AddCategory()} />
          </div>
     </div>
}

export default Caterory