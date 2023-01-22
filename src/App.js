import { useState } from "react";
import "./App.css";

function App() {
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();
  const [randomNumber, setRandomNumber] = useState();

  const giveRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="App">
      <div className="randomNum">
        <p>
          Random Number:<span>{randomNumber} </span>
        </p>
        <div className="numContainer">
          <p>Min:</p>
          <input
            type="number"
            value={minVal}
            onChange={(e) => setMinVal(+e.target.value)}
          />
        </div>
        <div className="numContainer">
          <p>Max:</p>
          <input
            type="number"
            value={maxVal}
            onChange={(e) => setMaxVal(+e.target.value)}
          />
        </div>
        <button className="numberBtn btn btn-dark" onClick={giveRandomNumber}>
          Get Random Number
        </button>
      </div>
    </div>
  );
}

export default App;
