export default {
  controlledFunc(e, dispatch) {
    dispatch({
      type: "CONTROLLED_VALUE",
      taskControl: e.target.value
    });
  },
  addTaskFunc(dispatch, state) {
    dispatch({ type: "ADD", addedTask: state.taskControl });
    dispatch({ type: "CONTROLLED_VALUE", taskControl: "" });
  },
  removeTaskFunc(dispatch, index) {
    dispatch({ type: "REMOVE", indexOfTask: index });
  }
};
