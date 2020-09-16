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
          <div className="card-upper">
            <img alt={word} className="img-startgame" src={image} />
          </div>
          <div className="card-lower">
            <p className="gamestart-word">{word}</p>

            <Button
              label="Ready"
              buttonClass="button button-padding "
              handleClick={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GameStart;
