import { useReducer } from "react";

import "./styles.css";
import reducer from "./reducer";
import helpers from "./helpers";
export default function App() {
  const [state, dispatch] = useReducer(reducer, { tasks: [], taskControl: "" });
  const { controlledFunc, addTaskFunc, removeTaskFunc } = helpers;

  return (
    <div className="App">
      <input
        value={state.taskControl}
        onChange={(e) => controlledFunc(e, dispatch)}
      />
      <button type="button" onClick={() => addTaskFunc(dispatch, state)}>
        Add
      </button>
      <ul className="list-of-tasks">
        {state.tasks.map((el, index) => {
          return (
            <li key={index}>
              <div>{el}</div>{" "}
              <button onClick={() => removeTaskFunc(dispatch, index)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
