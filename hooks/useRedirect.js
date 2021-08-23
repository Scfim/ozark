import {useEffect, useState} from 'react'
import Router from "next/router"

/**
 * 
 * @param {string} path  The path to redirect on
 * @param {boolean} withAsync boolean to check whether you need an async redirect on sync, by default is with sync
 */
export default function useRedirect(path = "", withAsync = true) {
    const [state, setState] = useState("")
    //checking if path is an path
    const pathRegex = /(?:https?:\/\/)?(\/)?(?:[^?\/\s]+[?\/])(.*)/gm
    if(pathRegex.test(path) || path === "/"){
        setState(path)
    }else{
        new Error("Invalid path name parameter in hook useRedirect")
    }
    useEffect(()=>{
        if(withAsync){
            Router.push(path)
        }else{
            window.history.pushState({}, "Welcome | Umarps Shop Manager", "http://localhost:3000"+path)
            window.location.reload()
        }
    },[state])
}
