import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const handleUp = () => setCount(count + 1);
  const handleDown = () => setCount(count - 1);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button onClick={handleUp} style={{width: 32}}>+</button>
      <div>{count}</div>
      <button onClick={handleDown} style={{width: 32}}>-</button>
    </div>
  );
};

export default App;
