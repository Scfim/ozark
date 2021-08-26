import React from 'react'
import style from '../../styles/App.module.css'

export const Dropdown = ({ state, label, htmlFor, type, name, event, value, close ,children}) => {

  

    return <div className={` 2xl:w-96 xl:w-96 sm:w-80 lg:w-80 md:w-96 w-72 `}>
        <label htmlFor={htmlFor} className=" text-gray-700 text-xs font-bold mb-2">{label}</label>
        <div className={`border flex flex-col justify-center rounded-md ${style.borde} `}>
            <input id={htmlFor} name={name} type={type} value={value} autoComplete="off" placeholder={label} onInput={event} className={`relative appearance-none rounded-lg px-2 py-2 placeholder-gray-500 text-gray-900  outline-none  sm:text-sm`} />
            <div className={`  ${state} py-2 shadow-xl flex flex-col`}>
                 {children}
            </div>
        </div>
    </div>

}