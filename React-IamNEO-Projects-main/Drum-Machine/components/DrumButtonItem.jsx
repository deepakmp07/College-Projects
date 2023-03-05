import React, { useContext } from "react";
import "../styles.css";

import DrumContext from "../context/drumContext";

const DrumButtonItem = props => {
  const drumContext = useContext(DrumContext);
  const { volume } = drumContext;
  const audio = React.useRef();
  const { keyTrigger, url, id } = props.drum;

  //Play the music
  const play = () => {
    audio.current.play();
    const displayElement = document.getElementById("display");
    console.log(displayElement);
    console.log(audio.current.attributes.displayid);
    displayElement.innerText = audio.current.attributes.displayId.nodeValue;
  };

  const handleVolumeChange = () => {
    audio.current.volume = volume;
  };
  return (
    <div
      onClick={play}
      className="audio-pad drum-btn drum-pad"
      id={`drum-${keyTrigger}`}
    >
      {keyTrigger}
      <audio
        src={url}
        ref={audio}
        displayid={id}
        id={keyTrigger}
        onVolumeChange={handleVolumeChange}
        className="clip"
      />
    </div>
  );
};

export default DrumButtonItem;
