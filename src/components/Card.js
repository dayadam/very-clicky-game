import React from "react";

function textLoop() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<h1 key={i} >Hello world!</h1>);
  }
  return <>{arr}</>;
}

function Card() {
  return <>{textLoop()}</>;
}

export default Card;
