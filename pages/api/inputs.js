import axios from "axios"
import { post_add_input } from "../../constants/input"

export const useAddInput = (inputData) =>{
    return new Promise((resolve, reject)=>{
        axios.post(post_add_input,inputData).then(result=>{
            //waiting for mak
            
        }).catch(err => reject(err))
    })
}
