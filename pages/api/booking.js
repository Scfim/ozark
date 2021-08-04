import axios from "axios"
import { post_add_booking } from "../../constants/booking"

export const useAddBooking = (inputData) =>{
    return new Promise((resolve, reject)=>{
        axios.post(post_add_booking,inputData).then(result=>{
            //waiting for mak
            
        }).catch(err => reject(err))
    })
}
