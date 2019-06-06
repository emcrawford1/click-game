import React from "react";

function InstaCard(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Clicky Game!</h1>
        <p className="lead text-center font-italic">Click on an image to earn points, but don't click on any more than once!
      </p>
      </div>
    </div>
  );
}

export default InstaCard;