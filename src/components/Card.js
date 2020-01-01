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
//import Diver from "./images/Diver.svg";
import IceSkating from "./images/Ice-skating.svg";
import Stretching from "./images/Stretching.svg";
import Steeplechase from "./images/Steeplechase.svg";
import "./Card.css";

const style = {
  sizing: {
    //width: "100%"
  }
};

function Card() {
  return (
    <>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Skateboard} alt="Skateboard" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Bike} alt="Bike" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={IceSkating} alt="IceSkating" />
      </div>
{/*       <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Diver} alt="Diver" />
      </div> */}
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Motocross} alt="Motocross" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Steeplechase} alt="Steeplechase" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Soccer} alt="Soccer" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Baseball} alt="Baseball" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Surfer} alt="Surfer" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={HammerThrow} alt="HammerThrow" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Runner} style={style.sizing} alt="Runner" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Muscle} alt="Muscle" />
      </div>
      <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <img src={Stretching} alt="Stretching" />
      </div>
    </>
  );
}

export default Card;
