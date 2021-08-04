import axios from "axios"
import { post_add_exercise } from "../../constants/exercise"

export const useAddExercise = (startYear, endYear) =>{
    return new Promise((resolve, reject)=>{
        axios.post(post_add_exercise,{startYear,endYear}).then(result=>{
            //waiting for mak
            
        }).catch(err => reject(err))
    })
}
