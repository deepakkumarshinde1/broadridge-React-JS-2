import CounterContextObject from "./context/counter.context";
function Header() {
  let { count, increment } = CounterContextObject.useCounterContext();

  return (
    <>
      <button onClick={increment}>INC {count}</button>
      <h1>Header Page From Cart App</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}

export default Header;
