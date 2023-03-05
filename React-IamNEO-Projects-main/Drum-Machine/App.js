import React, { useEffect } from "react";
import "./styles.css";
import DrumContainer from "./components/DrumContainer";
import DrumState from "./context/drumState";
export default function App() {
  const handleKeypress = event => {
    const keyTrigger = event.key.toUpperCase();
    const elementAudio = document.getElementById(keyTrigger);
    if (elementAudio) {
      elementAudio.play();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);

    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, []);

  return (
    <DrumState>
      <div className="App drum-container">
        <DrumContainer />
      </div>
    </DrumState>
  );
}
