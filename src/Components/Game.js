import React from "react";

const box = {
    marginTop: '1.5%',
    marginRight: '0.75%',
    marginBottom: '0%',
    marginLeft: '0.75%',
    cursor: 'pointer',
    hover: 'scale(1.02)'
}

function Game(props) {
  return (
    <img className="box rounded-lg" onMouseOver="this.style.transform: scale(1.02)" onClick={props.onClick} style={box} src={props.url} alt="picture1"  />
  );
}

export default Game;