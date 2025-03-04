import { useState } from "react";
import "./App.css";
import Earth1 from "./components/earth1";
import css from "./styles.module.css";

const App = () => {
  const [count, setCount] = useState(0);
  const handleUp = () => setCount(count + 1);
  const handleDown = () => setCount(count - 1);
  return (
    <div className="content">
      <h1 className={css["color-gray"]}>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button onClick={handleUp} style={{width: 32}} type="button">+</button>
      <div>{count}</div>
      <button onClick={handleDown} style={{width: 32}} type="button">-</button>
      <Earth1 width={32} height={32}/>
    </div>
  );
};

export default App;
