import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class GuessForm extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            round: props.round,
            guess: props.guess,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const guess = e.currentTarget.value;
        this.setState({ guess });
    }
   
    handleSubmit(e) {
        e.preventDefault();
        const { round, guess } = this.state;

        if(guess !== "") {        
            this.props.handleGuess(round, guess);
        }
    };

    render() {
        const { guess } = this.state;

        return (
            <form onSubmit={ this.handleSubmit } className="container">
                <Input 
                    name="guess"
                    type="text"
                    value={ guess }
                    handleChange={ (e) => this.handleChange(e) }
                    required
                />                
                <Button
                    buttonClass="btn btn-primary"
                    label="Guess"
                />
            </form>
        );
    }
}

export default GuessForm;