import { ADD_GOAL, DELETE_GOAL, CLEAR_GOALS, EDIT_GOAL } from "../constants";

export const addGoal = (text, dueDate) => {
  const action = {
    type: ADD_GOAL,
    text: text,
    dueDate: dueDate,
  };
  console.log("Following action submitted with addGoal", action);
  return action;
};
