import React, { Component } from "react";
import Nav from "./Nav";
import InstCard from "./InstCard";
import Game from "./Game";
import Footer from "./Footer";


//Styling
const flexContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

class MainContainer extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    guessMessage: "Click on an Image to Begin!",
    pictures: [
      {
        url: "/images/picture1.jpg",
        guessStatus: false
      },

      {
        url: "/images/picture2.jpg",
        guessStatus: false
      },

      {
        url: "/images/picture3.jpg",
        guessStatus: false
      },

      {
        url: "/images/picture4.jpg",
        guessStatus: false
      },

      {
        url: "/images/picture5.jpg",
        guessStatus: false
      },

      {
        url: "/images/picture6.jpg",
        guessStatus: false
      },

      {
        url: "/images/picture7.jpg",
        guessStatus: false
      },

      {
        url: "/images/picture8.jpg",
        guessStatus: false
      },

      {
        url: "/images/picture9.jpg",
        guessStatus: false
      },

    ]

  };

  //Functions

  clickHandler(guessStatus) {
    console.log("guessStatus");
  };

  shuffle() {

  };

  render() {
    return (
      <div className="wrapper">
        <Nav
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        />
        <InstCard/>
        <div style={flexContainer}>
          {this.state.pictures.map ((x, index)  => (
            <Game 
            key={index}
            url={x.url}
            onClick={() => this.clickHandler.bind(x.guessStatus)}
            />
          ))}
          
        </div>
        <Footer />
      </div>
     
    )
  }

}


export default MainContainer;