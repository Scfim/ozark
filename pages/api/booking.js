import axios from "axios";
import { post_add_booking } from "../../constants/booking";

export const useAddBooking = async (inputData) => {
  try {
    const response = await axios.post(post_add_booking, {});
    return response;
  } catch (error) {
    throw error;
  }
};
