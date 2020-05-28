import { ADD_GOAL } from "../constants";

const goal = (action) => {
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
    default:
      return state;
  }
};

export default goals;
