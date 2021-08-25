import axios from "axios";
import { post_add_input } from "../../constants/input";
/**
 * An input in our case is just an new project and this function helps to add one
 * @param {object} inputData when it is about to add a new product,
 * input data is the representation of the product as an object
 * @returns
 */
export const useAddInput = async (inputData) => {
  try {
    const response = await axios.post(post_add_input, inputData);
    return response;
  } catch (error) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */ 
    throw error;
  }
};
