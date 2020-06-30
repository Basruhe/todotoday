import { ADD_GOAL, DELETE_GOAL } from "../constants";

const goal = (action) => {
  let { text, dueDate } = action;
  return {
    text: action.text,
    id: Math.random(),
  };
  console.log("current goal", goal);
};

const goals = (state = [], action) => {
  let goals = null;
  switch (action.type) {
    case ADD_GOAL:
      goals = [...state, goal(action)];
      console.log("reminders as state (log from the reducer):", goals);
      return goals;
    case DELETE_GOAL:
      return goals;
    default:
      return state;
  }
};

export default goals;
