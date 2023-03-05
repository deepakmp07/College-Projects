import React, { useContext } from "react";
import DrumButtonItem from "./DrumButtonItem";
import DrumContext from "../context/drumContext";
const drumPadOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

// const drumPadTwo = [
//   {
//     keyCode: 81,
//     keyTrigger: "Q",
//     id: "Chord-1",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
//   },
//   {
//     keyCode: 87,
//     keyTrigger: "W",
//     id: "Chord-2",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
//   },
//   {
//     keyCode: 69,
//     keyTrigger: "E",
//     id: "Chord-3",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
//   },
//   {
//     keyCode: 65,
//     keyTrigger: "A",
//     id: "Shaker",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
//   },
//   {
//     keyCode: 83,
//     keyTrigger: "S",
//     id: "Open-HH",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
//   },
//   {
//     keyCode: 68,
//     keyTrigger: "D",
//     id: "Closed-HH",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
//   },
//   {
//     keyCode: 90,
//     keyTrigger: "Z",
//     id: "Punchy-Kick",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
//   },
//   {
//     keyCode: 88,
//     keyTrigger: "X",
//     id: "Side-Stick",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
//   },
//   {
//     keyCode: 67,
//     keyTrigger: "C",
//     id: "Snare",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
//   }
// ];

const DrumButtons = () => {
  const drumContext = useContext(DrumContext);
  const { power } = drumContext;
  console.log(power);
  return (
    <div
      className="d-flex justify-content-around align-item-center drum-pad-container flex-wrap flex-grow-1"
      style={power ? {} : { pointerEvents: "none", opacity: "0.4" }}
    >
      <div
        id="display"
        style={{
          width: "100%",
          marginBottom: "20px",
          height: "40px",
          backgroundColor: "#059b5c"
        }}
      />
      {drumPadOne.map((drum, i) => (
        <DrumButtonItem drum={drum} key={drum.keyCode} />
      ))}
    </div>
  );
};

export default DrumButtons;
