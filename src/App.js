import "./App.css";
import Drummachine from "./components/Drummachine";
import { useState, useEffect } from "react";
import { pads } from "./utility/pads";

function App() {
  const [currentPad, setCurrentPad] = useState({});
  const [allPads, setPads] = useState([]);
  useEffect(() => {
    const defaultPad = {
      keyCode: 1,
      keyName: "",
      clipName: "None",
      url: "",
    };
    setCurrentPad(defaultPad);
    setPads(pads);
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <h1>Drum Machine</h1>
      <Drummachine
        pads={allPads}
        currentPad={currentPad}
        setCurrentPad={setCurrentPad}
      />
    </div>
  );
}

export default App;
