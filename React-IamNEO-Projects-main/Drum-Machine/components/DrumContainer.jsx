import React, { Fragment } from "react";
import DrumControls from "./DrumControls";
import DrumButtons from "./DrumButtons";

const DrumContainer = () => {
  return (
    <Fragment>
      <div className="container" id="drum-machine">
        <DrumButtons />
        <DrumControls />
      </div>
    </Fragment>
  );
};
export default DrumContainer;