import React, { useContext } from "react";
import "../styles.css";
import DrumContext from "../context/drumContext";
const DrumControls = () => {
  const drumContext = useContext(DrumContext);
  const { volume } = drumContext;
  // const newVolume = volume * 100;
  return (
    <div className="drum-control-container">
      <label className="switch" onClick={drumContext.handleClickPower}>
        <span className="switch-text">Power</span>
        <input type="checkbox" />
        <span className="slider" />
      </label>

      <div className="slidecontainer">
        <label className="">volume &nbsp;</label>
        <input
          type="range"
          min="0"
          max="1"
          value={volume}
          className="volume-slider"
          id="myRange"
          step="0.01"
          onChange={drumContext.handleChangeVolume}
        />
      </div>
    </div>
  );
};

export default DrumControls;
