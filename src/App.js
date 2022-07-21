import "./App.css";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

const Count = ({ className }) => {
  const [count] = useAtom(countAtom);

  return <h2 className={className}>Count: {count}</h2>;
};

const CountDecrease = () => {
  const [, setCount] = useAtom(countAtom);

  return <button onClick={() => setCount((c) => c - 1)}>-</button>;
};

const CountIncrease = () => {
  const [, setCount] = useAtom(countAtom);

  return <button onClick={() => setCount((c) => c + 1)}>+</button>;
};

function App() {
  return (
    <div className="App">
      {/* counter example */}
      <div className="Counter">
        <CountDecrease />
        <Count className="Count" />
        <CountIncrease />
      </div>
    </div>
  );
}

export default App;
