import React from 'react'

export default function OutPutDashboard({activeMenu}) {
    return (
        <div className={activeMenu ==="Dashboard" ? "flex w-11/12 h-60 justify-center":"hidden"}>
            Dashboard
        </div>
    )
}
