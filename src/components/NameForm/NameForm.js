import React, { Component } from "react";
import Button from "../Button/Button";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: this.props.player1,
      player2: this.props.player2,
      player3: this.props.player3,
      player4: this.props.player4,
    };
    this.handlePlayer1Name = this.handlePlayer1Name.bind(this);
    this.handlePlayer2Name = this.handlePlayer2Name.bind(this);
    this.handlePlayer3Name = this.handlePlayer3Name.bind(this);
    this.handlePlayer4Name = this.handlePlayer4Name.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePlayer1Name(e) {
    this.setState({
      player1Name: e.currentTarget.value,
    });
  }

  handlePlayer2Name(e) {
    this.setState({
      player2Name: e.currentTarget.value,
    });
  }

  handlePlayer3Name(e) {
    this.setState({
      player3Name: e.currentTarget.value,
    });
  }

  handlePlayer4Name(e) {
    this.setState({
      player4Name: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSave(this.props.players);
  }

  //   componentDidMount() {
  //     if (!this.props.loaded) {
  //       this.props.handleLoad();
  //     }
  //   }

  render() {
    const { player1, player2, player3, player4 } = this.state;

    return (
      <>
        <form>
          <div className="form-group">
            <label for="player1">Player1</label>
            <input
              onChange={this.handlePlayer1Name}
              value={player1}
              type="text"
              placeholder="Enter Player One's Name"
            />
          </div>
          <div className="form-group">
            <label for="player2">Player2</label>
            <input
              onChange={this.handlePlayer2Name}
              value={player2}
              type="text"
              placeholder="Enter Player Two's Name"
            />
          </div>
          <div className="form-group">
            <label for="player3">Player3</label>
            <input
              onChange={this.handlePlayer3Name}
              value={player3}
              type="text"
              placeholder="Enter Player Three's Name"
            />
          </div>
          <div className="form-group">
            <label for="player4">Player4</label>
            <input
              onChange={this.handlePlayer4Name}
              value={player4}
              type="text"
              placeholder="Enter Player Four's Name"
            />
          </div>
          <Button onClick={this.handleSubmit} type="submit">
            Save
          </Button>
        </form>
      </>
    );
  }
}
export default NameForm;
