import axios from "axios";
import { post_add_input } from "../../constants/input";

export const useAddInput = async (inputData) => {
  try {
    const response = await axios.post(post_add_input, inputData);
    return response;
  } catch (error) {
    throw error;
  }
};
