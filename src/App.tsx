import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { getXY, getXYFromHands, UTG_MAX_6_RANGE } from "./utils/range2";
import { generateHands } from "./utils/cards";

function App() {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    // console.log(UTG_MAX_6_RANGE);
    // const xy = getXY(UTG_MAX_6_RANGE);
    // console.log(
    //   xy
    //     .map((v: any[]) => {
    //       return generateHands(v, v[0] < v[1] ? true : false);
    //     })
    //     .flat(1)
    // );
    console.log(getXYFromHands("S1", "S2"));
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
