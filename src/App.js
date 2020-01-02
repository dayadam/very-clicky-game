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
  { image: Skateboard, id: 1, clicked: false, name: "Skateboard" },
  { image: Bike, id: 2, clicked: false, name: "Bike" },
  { image: Surfer, id: 3, clicked: false, name: "Surfer" },
  { image: HammerThrow, id: 4, clicked: false, name: "HammerThrow" },
  { image: Soccer, id: 5, clicked: false, name: "Soccer" },
  { image: Muscle, id: 6, clicked: false, name: "Muscle" },
  { image: Runner, id: 7, clicked: false, name: "Runner" },
  { image: Baseball, id: 8, clicked: false, name: "Baseball" },
  { image: Motocross, id: 9, clicked: false, name: "Motocross" },
  { image: IceSkating, id: 10, clicked: false, name: "IceSkating" },
  { image: Stretching, id: 11, clicked: false, name: "Stretching" },
  { image: Steeplechase, id: 12, clicked: false, name: "Steeplechase" }
];

class App extends Component {
  state = {
    clicked: [],
    score: 0,
    images
  };

  handleClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const clicked = this.state.clicked.concat(id);
    // Set this.state.friends equal to the new friends array
    this.setState({ clicked });
  };

  //handleClick = event => {};

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Clicky game! Score: {this.state.clicked.length}</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.images.map(image => (
              <div
                onClick={() => this.handleClick(image.id)}
                key={image.id}
                id={image.id}
                className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
              >
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
