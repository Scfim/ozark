import axios from "axios";
import {
  post_add_exercise,
  post_get_current_exercise,
  post_get_all_exercises
} from "../../constants/exercise";

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

/**
 * Gets the current exercise or The activated current exercise only
 * @returns Current exercise in promise object
 */

export const getCurrentExercise = async () => {
  try {
    const response = await axios.post(
      post_get_current_exercise,
      {},
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (err) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
    throw new Error(err);
  }
};
/**
 * Gets all exercises from the database by this end point
 * @returns All available exercises in the database
 */
export const getAllExercises = async () => {
  try {
    const response = await axios.post(
      post_get_all_exercises,
      {},
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );

    return response.data
  } catch (err) {
    /**
     * In future version we'll through errors in a better way of good user experiences
     * this implementation below is just there of development purposes
     */
    throw new Error(err);
  }
};
