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
  { image: Skateboard, id: 1, name: "Skateboard" },
  { image: Bike, id: 2, name: "Bike" },
  { image: Surfer, id: 3, name: "Surfer" },
  { image: HammerThrow, id: 4, name: "HammerThrow" },
  { image: Soccer, id: 5, name: "Soccer" },
  { image: Muscle, id: 6, name: "Muscle" },
  { image: Runner, id: 7, name: "Runner" },
  { image: Baseball, id: 8, name: "Baseball" },
  { image: Motocross, id: 9, name: "Motocross" },
  { image: IceSkating, id: 10, name: "IceSkating" },
  { image: Stretching, id: 11, name: "Stretching" },
  { image: Steeplechase, id: 12, name: "Steeplechase" }
];

class App extends Component {
  state = {
    clicked: [],
    prevClick: [],
    score: 0,
    images
  };

  handleClick = id => {
    const prevClick = this.state.clicked.filter(
      clickedItem => clickedItem === id
    );
    const images = this.reorder(this.state.images);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    this.setState({ prevClick, images });
    if (prevClick.length === 0) {
      const clicked = this.state.clicked.concat(id);
      // Set this.state.friends equal to the new friends array
      this.setState({ clicked: clicked });
    } else {
      
      this.setState({ clicked: [], prevClick: [] });
    }
  };

  componentDidMount() {
    const images = this.reorder(this.state.images);
    this.setState({ images });
  }

  reorder = stateImagesArray => {
    var currentIndex = stateImagesArray.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = stateImagesArray[currentIndex];
      stateImagesArray[currentIndex] = stateImagesArray[randomIndex];
      stateImagesArray[randomIndex] = temporaryValue;
    }

    return stateImagesArray;
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
