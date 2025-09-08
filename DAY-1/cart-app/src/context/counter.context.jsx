// context

import { createContext, useContext, useState } from "react";

const CounterContext = createContext({});

// hook => custom hook
function useCounterContext() {
  return useContext(CounterContext);
}

// wrapper component
function CounterContextProvider(props) {
  let { children } = props;
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount(count + 1);
  };
  let shared = { count, increment };

  return (
    <CounterContext.Provider value={shared}>{children}</CounterContext.Provider>
  );
}

let CounterContextObject = {
  useCounterContext,
  CounterContextProvider,
};

export default CounterContextObject;
