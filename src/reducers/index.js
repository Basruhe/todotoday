import { ADD_GOAL } from "../constants";

const goal = (action) => {
  let { text, dueDate } = action;
  return {
    text: action.text,
    id: Math.random(),
  };
};

const goals = (state = [], action) => {
  let goals = null;
  switch (action.type) {
    case ADD_GOAL:
      goals = [...state, goal(action)];
      console.log("reminders as state (log from the reducer):", goals);
      return goals;
    default:
      return state;
  }
};

export default goals;
