import React, { Component } from 'react';
import Input from '../Input/Input';

class StartForm extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            player1Name: props.player1Name,
            player2Name: props.player2Name,
            player3Name: props.player3Name,
            player4Name: props.player4Name,
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
            player3Name, 
            player4Name, 
        } = this.state;

        if(player1Name !== "" && player2Name !== "" && player3Name !== "" && player4Name !== "") {        
            this.props.handleSave(
                player1Name, 
                player2Name, 
                player3Name, 
                player4Name, 
                );
        }
    };

    render() {
        const { 
            player1Name, 
            player2Name, 
            player3Name, 
            player4Name, 
        } = this.state;

        return (
            <form onSubmit={ this.handleSubmit } className="container">
                <Input 
                    label="Player 1"
                    name="player1Name"
                    type="text"
                    value={ player1Name }
                    handleChange={ (e) => this.handleChange(e, "player1Name") }
                    required
                />
                <Input 
                    label="Player 2"
                    name="player2Name"
                    type="text"
                    value={ player2Name }
                    handleChange={ (e) => this.handleChange(e, "player2Name") }
                    required
                />
                <Input 
                    label="Player 3"
                    name="player3Name"
                    type="text"
                    value={ player3Name }
                    handleChange={ (e) => this.handleChange(e, "player3Name") }
                    required
                />
                <Input 
                    label="Player 4"
                    name="player4Name"
                    type="text"
                    value={ player4Name }
                    handleChange={ (e) => this.handleChange(e, "player4Name") }
                    required
                />                                              

                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default StartForm;