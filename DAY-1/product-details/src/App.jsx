import Header from "homePage/Header";
import CounterContextObject from "homePage/CounterContext";

function App() {
  let { count, increment } = CounterContextObject.useCounterContext();
  return (
    <>
      <button onClick={increment}>Product increment {count}</button>
      <Header />
      <h1>product Details</h1>
    </>
  );
}

export default App;
