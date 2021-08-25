import axios from "axios";
import { post_add_booking } from "../../constants/booking";

/**
 * This API function should add a new booking
 * @param {object} inputData  booking as a
 * @returns Response sent by the server in some kind of promise 'cause we use async javascript here
 */

export const useAddBooking = async (inputData) => {
  try {
    const response = await axios.post(post_add_booking, inputData);
    return response;
  } catch (error) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
    throw error;
  }
};
