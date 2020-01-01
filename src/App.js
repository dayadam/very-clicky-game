import React, { Component } from "react";
//import Card from "./components/Card";
import Skateboard from "./components/images/Skateboard.svg";
import Bike from "./components/images/Bike.svg";
import Surfer from "./components/images/Surfer.svg";
import HammerThrow from "./components/images/Hammer-throw.svg";
import Runner from "./components/images/Runner.svg";
import Muscle from "./components/images/Muscle.svg";
import Soccer from "./components/images/Soccer.svg";
import Baseball from "./components/images/Baseball.svg";
import Motocross from "./components/images/Motocross.svg";
//import Diver from "./components/images/Diver.svg";
import IceSkating from "./components/images/Ice-skating.svg";
import Stretching from "./components/images/Stretching.svg";
import Steeplechase from "./components/images/Steeplechase.svg";
import "./components/Card.css";

const images = [
  { image: Skateboard, name: "Skateboard" },
  { image: Bike, name: "Bike" },
  { image: Surfer, name: "Surfer" },
  { image: HammerThrow, name: "HammerThrow" },
  { image: Soccer, name: "Soccer" },
  { image: Muscle, name: "Muscle" },
  { image: Runner, name: "Runner" },
  { image: Baseball, name: "Baseball" },
  { image: Motocross, name: "Motocross" },
  { image: IceSkating, name: "IceSkating" },
  { image: Stretching, name: "Stretching" },
  { image: Steeplechase, name: "Steeplechase" }
];

class App extends Component {
  state = {
    score: 0,
    images
  };

  handleClick = event => {};

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Clicky game! Score</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.images.map(image => (
              <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img src={image.image} alt={image.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
