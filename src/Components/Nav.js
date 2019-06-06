import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="navbar-brand text-white">Clicky Game!</div>
      <span className="navbar-text text-white d-none d-sm-block">
        {props.guessMessage}
      </span>

      <span className="navbar-text text-white">
        Score: {props.currentScore} | Top Score: {props.topScore}
      </span>
    </nav>
  );
}

export default Nav;




