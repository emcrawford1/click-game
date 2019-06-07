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
        url: "images/picture1.jpg",
        guessStatus: false
      },

      {
        url: "images/picture2.jpg",
        guessStatus: false
      },

      {
        url: "images/picture3.jpg",
        guessStatus: false
      },

      {
        url: "images/picture4.jpg",
        guessStatus: false
      },

      {
        url: "images/picture5.jpg",
        guessStatus: false
      },

      {
        url: "images/picture6.jpg",
        guessStatus: false
      },

      {
        url: "images/picture7.jpg",
        guessStatus: false
      },

      {
        url: "images/picture8.jpg",
        guessStatus: false
      },

      {
        url: "images/picture9.jpg",
        guessStatus: false
      },

    ]

  };

  //Functions

  clickHandler(guessStatus, index) {
    //Creating a copy of the pictures array in the "state" object
    let picturesCopy = JSON.parse(JSON.stringify(this.state.pictures));

    //Setting the guessStatus value in the copied picture array to "true" for the picture clicked
    picturesCopy[index].guessStatus = true;

    console.log(guessStatus);

    //Assigning the value of the pictures array in the state object to the value of the picturesCopy array
    this.setState({
      pictures: picturesCopy
    }, () => {

    console.log(this.state.pictures);

    //If the guessStatus of the picture that the user clicked was already true (the user had 
    //previously clicked the picture), the code in this 'if' block will run
    if(guessStatus){
      if(this.state.currentScore > this.state.topScore) {
        this.setState({
          topScore: this.state.currentScore
        })
      };
      this.setState({
        currentScore: 0,
        guessMessage: "You guessed incorrectly!",
        pictures: this.state.pictures.map(picture => ({ url: picture.url, guessStatus: false}))
      }, () => {

      //Shuffle the pictures
      this.shuffle();
      })
    }

    //If picture was not previously clicked run this code
    else{
      console.log(this.state.currentScore);
      this.setState({
        currentScore: this.state.currentScore + 1,
        guessMessage: "You guessed correctly",
        pictures: picturesCopy
      });

      this.shuffle();
    }});
  };


  //Shuffle pictures
  shuffle() {
    let pictureCopy = JSON.parse(JSON.stringify(this.state.pictures));
    let randomPictureArr = [];
    console.log(pictureCopy.length);

    while(pictureCopy.length > 0){
      let itemsLeft = pictureCopy.length;
      let randomIndex = Math.floor(Math.random() * itemsLeft);
      randomPictureArr.push(pictureCopy[randomIndex]);
      pictureCopy.splice(randomIndex, 1);
    }

    this.setState({
      pictures: randomPictureArr
    })
  };

  render() {
    return (
      <div className="wrapper">
        <Nav
        guessMessage={this.state.guessMessage}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        />
        <InstCard/>
        <div style={flexContainer}>
          {this.state.pictures.map ((x, index)  => (
            <Game 
            key={index}
            url={x.url}
            onClick={() => this.clickHandler(x.guessStatus, index)}
            />
          ))}
          
        </div>
        <Footer />
      </div>
     
    )
  }

}


export default MainContainer;