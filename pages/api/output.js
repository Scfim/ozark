import axios from "axios";
import { post_add_output, get_bookings } from "../../constants/output";
/**
 * An output in our case is just a product and this function helps to out one
 * @param {object} outputData when it is about to out a new product,
 * output data is the representation of the product as an object
 * @returns
 */
export const useAddOutPut = async (dataOutput) => {
  try {
    const response = await axios.post(post_add_output, dataOutput, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
    throw error;
  }
};

/**
 * 
 * @param {object} output 
 */
 export const getOutPuts = async (bookingNumber) => {
    try{
      const response = await axios
      .post(
        get_bookings,
        {bookingNumber},
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      return response.data
    }catch(err){
      throw new Error(err)
    }
};

export const getBillStatement = async (bookingNumber) =>{
  try{
    const response = await axios
    .post(
      get_outputBillStatement,
      {bookingNumber},
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    )
    return response.data
  }catch(err){
    throw new Error(err)
  }
}

