import React from "react";

const box = {
    marginTop: '1.5%',
    marginRight: '0.75%',
    marginBottom: '0%',
    marginLeft: '0.75%',
    cursor: 'pointer'
 
}

function Game(props) {
  return (
    <img className="box rounded-lg"  onClick={props.onClick} style={box} src={props.url} alt="picture1"  />
  );
}

export default Game;