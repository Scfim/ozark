import axios from "axios";
import { post_add_exercise } from "../../constants/exercise";

export const useAddExercise = async (startDate, endDate) => {
  try {
    const response = await axios.post(post_add_exercise, { startDate, endDate });
    return response.data
  } catch (e) {}
};
