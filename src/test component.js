import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function Test(props) {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [name, setName] = useState("Anshu");
  const [disable, setDisable] = useState(false);

  function checkForWin(value, name, setValue) {
    if (value === 5) {
      document.getElementById("winner").innerHTML = name + " is winner";
      document.getElementsByClassName("btn").disabled = setDisable(true);
    } else {
      setValue(value + 1);
    }
  }
  function resetValues(setValue1, setValue2) {
    setValue1(0);
    setValue2(0);
    setDisable(false);
    document.getElementById("winner").innerHTML = "Restart The Game";
  }
  return (
    <div id="testcomponent">
      <h1 id="winner"> Hi this is {name}.</h1>
      <h2> Anshu is {value}.</h2>
      <h2> Sumit is {value2}.</h2>

      <button
        className="btn"
        disabled={disable}
        onClick={() => checkForWin(value, "Anshu", setValue)}
      >
        Increase Anshu
      </button>
      <button
        className="btn"
        disabled={disable}
        onClick={() => checkForWin(value2, "Sumit", setValue2)}
      >
        Increase Sumit
      </button>

      <button className="btn" onClick={() => resetValues(setValue, setValue2)}>
        Reset
      </button>
    </div>
  );
}

export default Test;
