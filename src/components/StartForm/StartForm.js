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
            <h1 class="start-title">FrankenStyle</h1>

            <div className="startform">
              <form onSubmit={this.handleSubmit} className="form form-grid">
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
                <Button
                  buttonClass=" buttons-startgame button-startform"
                  label="Start"
                />
              </form>

              <Button buttonClass="buttons-startgame rules" label="Rules" />

              <div className="rules-text toggle-content is-visible">
                <h2>Rules</h2>
                <p>
                  <span>sr;iough;dsfhgnsr;iough;</span>
                  <span>dsfhgnsr;iough;dsfhgnsr</span>
                  <span>;iough;dsfhgn</span>
                </p>
              </div>
              {/* 
                <Fade bottom cascade>
                  <div>
                    <h2>React Reveal</h2>
                    <h2>React Reveal</h2>
                    <h2>React Reveal</h2>
                  </div>
                </Fade> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StartForm;
