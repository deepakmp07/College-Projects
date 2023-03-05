import React, { useReducer } from "react";
import DrumContext from "./drumContext";
import DrumReducer from "./drumReducer";

import { POWER_TOGGLE, CHANGE_VOLUME } from "../types";

const GithubState = props => {
  const initialState = {
    drumPadChange: false,
    power: true
  };
  const [state, dispatch] = useReducer(DrumReducer, initialState);

  const handleClickPower = () => {
    dispatch({ type: POWER_TOGGLE });
  };

  const handleChangeVolume = event => {
    dispatch({ type: CHANGE_VOLUME, payload: event.target.value });
    console.log(event.target.value);
  };

  return (
    <DrumContext.Provider
      value={{
        power: state.power,
        volume: 0.5,
        drumPadChange: state.drumPadChange,
        handleClickPower,
        handleChangeVolume
      }}
    >
      {props.children}
    </DrumContext.Provider>
  );
};
export default GithubState;
