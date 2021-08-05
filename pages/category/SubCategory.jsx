import React, { useState } from 'react'
import { Input } from '../../components/s/input'
import { Button, ButtonIcon } from '../../components/s/button'
import style from '../../styles/App.module.css'
import { BiAlarmSnooze, BiBeer, BiTrash } from 'react-icons/bi'

export const SubCategory = ({ state }) => {
    const [category, setCategory] = useState("");
    const onSetcategory = (e) => {
        setCategory(e.target.value);
    };
    const [typeCategory, setTypecategory] = useState("");
    const onSetTypecategoty = (e) => {
        setTypecategory(e.target.value);
    };

    return (
        <div id="categorie" className={`w-full flex ${state}`}>
            <div className={`flex flex-col  `}>
                <label htmlFor="" className={`mx-16 text-xl font-bold my-1`}>Ajouter une nouvelle sous catégorie</label>
                <label htmlFor="" className={`mx-16 text-sm mt-1 mb-5 ${style.text} `}>Assurez vous de mieux complèter les champs ci-bas</label>
                <Input type="text" htmlFor="categoryId" name="category" label="Sous catégorie" event={onSetcategory} icon={<BiBeer size="0.95rem" />} />
                <Input type="text" htmlFor="designationId" name="designation" label="Type de la catégorie" event={onSetTypecategoty} icon={<BiAlarmSnooze size="0.95rem" />} />
                <Button text={'Enregistrer la sous catégorie'} event={() => AddCategory()} />
            </div>
        </div>
    );
}
