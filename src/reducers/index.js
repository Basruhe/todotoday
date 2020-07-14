import { ADD_GOAL, DELETE_GOAL } from "../constants";

const goal = (action) => {
  // let { text, dueDate } = action;
  console.log("current goal", goal);
  return {
    id: Math.random(),
    text: action.text,
    dueDate: action.dueDate,
  };
};

const removeById = (state = [], id) => {
  const goals = state.filter((reminder) => reminder.id !== id);
  console.log("newly filtered goals", goals);
  return goals;
};

const goals = (state = [], action) => {
  let goals = null;
  switch (action.type) {
    case ADD_GOAL:
      goals = [...state, goal(action)];
      console.log("reminders as state (reducer log):", goals);
      return goals;
    case DELETE_GOAL:
      // note: returns a new array rather than changing the state!
      goals = removeById(state, action.id);
      return goals;
    default:
      return state;
  }
};

export default goals;
