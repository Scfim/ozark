import axios from "axios";
import { post_add_output } from "../../constants/output";
/**
 * An output in our case is just a product and this function helps to out one
 * @param {object} outputData when it is about to out a new product,
 * output data is the representation of the product as an object
 * @returns
 */
export const useAddOutPut = async (outputData) => {
  try {
    const response = await axios.post(post_add_output, outputData, {
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
