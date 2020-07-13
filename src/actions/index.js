import { ADD_GOAL, DELETE_GOAL } from "../constants";

// addGoal action creator. Creates action object (function)
export const addGoal = (text, dueDate) => {
  const action = {
    type: ADD_GOAL,
    text: text,
    dueDate: dueDate,
  };
  console.log("(actions) Action submitted with addGoal: ", action);
  return action;
};

export const deleteGoal = (id) => {
  const action = {
    type: DELETE_GOAL,
    id,
  };
  console.log("(actions) Action submitted through deleteGoal: ", action);
  return action;
};
