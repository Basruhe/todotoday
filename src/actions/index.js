import { ADD_GOAL } from "../constants";

// addGoal action creator. Creates action object (function)
export const addGoal = (text, dueDate) => {
  const action = {
    type: ADD_GOAL,
    text: text,
    dueDate: dueDate,
  };
  console.log("Following action is submitted with addGoal", action);
  return action;
};
