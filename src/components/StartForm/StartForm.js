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
            <figure className="monster">
              <img
                className="frank"
                src="./svgs/frankenweeny.svg"
                alt="frank"
              />
            </figure>
            <form onSubmit={this.handleSubmit} className="form startform">
              <h1>FrankenStyle</h1>

              <div className="row1">
                <Input
                  label=""
                  name="player1Name"
                  type="text"
                  value={player1Name}
                  handleChange={(e) => this.handleChange(e, "player1Name")}
                  required
                />
              </div>
              <div className="row2">
                <Input
                  label=""
                  name="player2Name"
                  type="text"
                  value={player2Name}
                  handleChange={(e) => this.handleChange(e, "player2Name")}
                  required
                />
              </div>
              <div className="row3">
                <Input
                  label=""
                  name="player3Name"
                  type="text"
                  value={player3Name}
                  handleChange={(e) => this.handleChange(e, "player3Name")}
                  required
                />
              </div>
              <div className="row4">
                <Input
                  label=""
                  name="player4Name"
                  type="text"
                  value={player4Name}
                  handleChange={(e) => this.handleChange(e, "player4Name")}
                  required
                />
              </div>
              <Button buttonClass="button button-startform" label="Start" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default StartForm;
