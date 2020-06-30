import { ADD_GOAL, DELETE_GOAL } from "../constants";

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

export const deleteGoal = (id) => {
  const action = {
    type: DELETE_GOAL,
    id,
  };
  console.log("Action submitted through deleteGoal:", action);
  return action;
};
