import axios from "axios";
import { post_add_exercise } from "../../constants/exercise";

/**
 * useAddExercise helps to create an new exercise, and track error if use put some wrong dates
 * @param {string} startDate Exercise's start date
 * @param {string} endDate Exercise's end date
 * @returns response object as promise
 */
export const useAddExercise = async (startDate, endDate) => {
  try {
    const response = await axios.post(
      post_add_exercise,
      { startDate, endDate },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (e) {}
};
