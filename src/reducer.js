export default (state, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, tasks: [...state.tasks, action.addedTask] };
    }
    case "REMOVE": {
      const { indexOfTask } = action;
      const newTasks = state.tasks.filter((_, i) => i !== indexOfTask);
      return { ...state, tasks: newTasks };
    }
    case "CONTROLLED_VALUE": {
      return { ...state, taskControl: action.taskControl };
    }
    default:
      return state;
  }
};
