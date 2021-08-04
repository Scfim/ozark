import React from 'react'
import style from '../../styles/App.module.css'

export const Input = ({ label, htmlFor, type, name, event, value, icon }) => {
    return (
        <div className={`px-12 2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-16 `} >
            <div className={`flex flex-col`}>
                <label htmlFor={htmlFor} className=" text-gray-700 text-xs font-bold mb-2">{label}</label>
                <div className={`flex flex-row border border-gray-3OO 2xl:w-96 xl:w-96 sm:w-80 lg:w-80 md:w-96  w-72 rounded-lg border ${style.borde}`}>
                    <div className={`m-auto ml-2`}>
                        {icon}
                    </div>
                    <input id={htmlFor} name={name} type={type} value={value} autoComplete="off" placeholder={label} onInput={event} className={`appearance-none w-full p-2 placeholder-gray-500 text-gray-900 rounded-lg  focus:outline-none  ${style.input}  sm:text-sm`} />
                </div>
            </div>
        </div>


    );
}

