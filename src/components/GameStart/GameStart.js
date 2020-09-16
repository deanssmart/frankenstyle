import React, { Component } from "react";
import Button from "../Button/Button";
import "../../App.css";

class GameStart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: props.word,
      image: props.image,
      round: props.round,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { round } = this.state;
    this.props.handleStart(round);
  }

  render() {
    const { word, image } = this.state;

    return (
      <div className="container-global">
        <div className="container-grid-gamestart">
          <div className="container-img">
            <img alt={word} className="img-startgame" src={image} />
          </div>

          <p className="gamestart-word">{word}</p>

          <Button
            label="Ready"
            buttonClass="button button-padding button-gamestart"
            handleClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default GameStart;
