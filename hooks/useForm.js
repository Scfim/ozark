import { useState } from "react";

export default function useForm(initialValues){
    const [values, setValues] = useState(initialValues)

    return [values, event =>{
        if(event.target.getAttribute("data-type") !== "text"){
            setValues({
                ...values,
                [event.target.name]: event.target.value
            })
        }else{
            setValues({
                ...values,
                [event.target.name]: event.target.value
            })
        }
    }]
}