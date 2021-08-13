import React from 'react'

export default function MenuWrapper({children, title}) {
    return (
        <div className="flex flex-col bg-white m-2 rounded shadow">
            <div className="font-semibold text-center text-gray-700">{title}</div>
            {children}
        </div>
    )
}

MenuWrapper.defaultProps ={
    title:"Titre  ici"
}
