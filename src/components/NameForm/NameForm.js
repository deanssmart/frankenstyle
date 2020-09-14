import React, { Component } from "react";
import Button from "../Button/Button";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: this.state.playerName,
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
    this.props.handleSave();
  }

  //   componentDidMount() {
  //     if (!this.props.loaded) {
  //       this.props.handleLoad();
  //     }
  //   }

  render() {
    const { playerName } = this.props;

    return (
      <>
        <form>
          <div className="form-group">
            <label for="player1">Player1</label>
            <input
              className="form-control"
              onChange={this.handlePlayer1Name}
              value={playerName}
              type="text"
              placeholder="Enter Player One's Name"
            />
          </div>
          <div className="form-group">
            <label for="player2">Player2</label>
            <input
              onChange={this.handlePlayer2Name}
              value={playerName}
              type="text"
              placeholder="Enter Player Two's Name"
            />
          </div>
          <div className="form-group">
            <label for="player3">Player3</label>
            <input
              onChange={this.handlePlayer3Name}
              value={playerName}
              type="text"
              placeholder="Enter Player Three's Name"
            />
          </div>
          <div className="form-group">
            <label for="player4">Player4</label>
            <input
              onChange={this.handlePlayer4Name}
              value={playerName}
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


import React, { Component } from 'react';
import Input from '../Inputs/Input';

class StartForm extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            player1Name: props.player1Name,
            player2Name: props.player2Name,
            winningScore: props.winningScore,
            alternate: props.alternate,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, input) {
        let change = {}
        change[input] = e.currentTarget.value;
        this.setState(change);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { 
            player1Name, 
            player2Name, 
            winningScore, 
            alternate,
        } = this.state;

        if(player1Name !== "" && player2Name !== "") {        
            this.props.handleSave(
                player1Name, 
                player2Name, 
                winningScore, 
                alternate,
                );
        }

    };

    render() {
        const { 
            player1Name, 
            player2Name, 
            winningScore, 
            alternate, 
        } = this.state;

        return (
            <form onSubmit={ this.handleSubmit } className="container">
                <Input 
                    label="Player 1 Name"
                    name="player1Name"
                    type="text"
                    value={ player1Name }
                    handleChange={ (e) => this.handleChange(e, "player1Name") }
                    required
                />
                <Input 
                    label="Player 2 Name"
                    name="player2Name"
                    type="text"
                    value={ player2Name }
                    handleChange={ (e) => this.handleChange(e, "player2Name") }
                    required
                />
                <Input 
                    label="Winning Score"
                    name="winningScore"
                    type="number"
                    value={ winningScore }
                    handleChange={ (e) => this.handleChange(e, "winningScore") }
                />
                <Input 
                    label="Alternate Every"
                    name="alternate"
                    type="number"
                    value={ alternate }
                    handleChange={ (e) => this.handleChange(e, "alternate") }
                />                                                

                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default StartForm;
