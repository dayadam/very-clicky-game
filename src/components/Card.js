import React from "react";
import Skateboard from "./images/Skateboard.svg";
import Bike from "./images/Bike.svg";
import Surfer from "./images/Surfer.svg";
import HammerThrow from "./images/Hammer-throw.svg";
import Runner from "./images/Runner.svg";
import Muscle from "./images/Muscle.svg";
import Soccer from "./images/Soccer.svg";
import Baseball from "./images/Baseball.svg";
import Motocross from "./images/Motocross.svg";
import Diver from "./images/Diver.svg";
import IceSkating from "./images/Ice-skating.svg";

function textLoop() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<h1 key={i}>Hello world!</h1>);
  }
  return <>{arr}</>;
}

const style = {
  sizing: {
    width: "100%"
  }
}

function Card() {
  return (
    <>
      <img src={Skateboard} alt="Skateboard" />
      <img src={Bike} alt="Bike" />
      <img src={IceSkating} alt="IceSkating" />
      <img src={Diver} alt="Diver" />
      <img src={Motocross} alt="Motocross" />
      <img src={Soccer} alt="Soccer" />
      <img src={Baseball} alt="Baseball" />
      <img src={Surfer} alt="Surfer" />
      <img src={HammerThrow} alt="HammerThrow" />
      <img src={Runner} style={style.sizing} alt="Runner" />
      <img src={Muscle} alt="Muscle" />
    </>
  );
}

export default Card;
