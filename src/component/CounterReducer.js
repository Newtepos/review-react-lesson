import React, { useReducer } from "react";

function CounterReducer() {
  const initialCounter = {
    count: 0,
    user: [],
  };

  const CounterReducer = (state, action) => {
    if ((action.type == "increment")) {
      return { count: state.count + 1 };
    } else if ((action.type == "decrement")) {
      return { count: state.count - 1 };
    }
  };

  const [state, dispatch] = useReducer(CounterReducer, initialCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}

export default CounterReducer;
