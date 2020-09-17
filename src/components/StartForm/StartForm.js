import React, { Component } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "../../App.css";

class StartForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1Name: "",
      player2Name: "",
      player3Name: "",
      player4Name: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, input) {
    let change = {};
    change[input] = e.currentTarget.value;
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { player1Name, player2Name, player3Name, player4Name } = this.state;

    if (
      player1Name !== "" &&
      player2Name !== "" &&
      player3Name !== "" &&
      player4Name !== ""
    ) {
      this.props.handleSave(player1Name, player2Name, player3Name, player4Name);
    }
  }

  render() {
    const { player1Name, player2Name, player3Name, player4Name } = this.state;

    return (
      <>
        <div className="container-global">
          <div className="container-form-start">
            {/* <figure className="monster">
              <img
                className="frank"
                src="./svgs/frankenweeny.svg"
                alt="frank"
              />
            </figure> */}

            <h1 class="start-title">FrankenStyle</h1>
            <form onSubmit={this.handleSubmit} className="form startform">
              <div className="row1">
                <Input
                  label="Player 1"
                  name="player1Name"
                  type="text"
                  value={player1Name}
                  handleChange={(e) => this.handleChange(e, "player1Name")}
                  required
                />
              </div>
              <div className="row2">
                <Input
                  label="Player 2"
                  name="player2Name"
                  type="text"
                  value={player2Name}
                  handleChange={(e) => this.handleChange(e, "player2Name")}
                  required
                />
              </div>
              <div className="row3">
                <Input
                  label="Player 3"
                  name="player3Name"
                  type="text"
                  value={player3Name}
                  handleChange={(e) => this.handleChange(e, "player3Name")}
                  required
                />
              </div>
              <div className="row4">
                <Input
                  label="Player 4"
                  name="player4Name"
                  type="text"
                  value={player4Name}
                  handleChange={(e) => this.handleChange(e, "player4Name")}
                  required
                />
              </div>
              <Button buttonClass="button button-startform" label="Start" />
              <Button buttonClass="button rules " label="Rules" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default StartForm;
