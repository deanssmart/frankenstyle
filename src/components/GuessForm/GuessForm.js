import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class GuessForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roundInput: props.roundInput,
            round: props.round,
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
        const { roundInput, round } = this.state;

        if(roundInput !== "") {        
            this.props.handleGuess(round, roundInput);
        }
    };

    render() {
        const { roundInput, round } = this.state;

        return (
            <>
                <img
                    className="container" 
                    src={ round === 2 ? roundInput[0] : roundInput[2] } 
                />
                <form onSubmit={ this.handleSubmit } className="container">
                    <Input 
                        name="guess"
                        type="text"
                        value={ round === 2 ? roundInput[1] : roundInput[3] }
                        handleChange={ (e) => this.handleChange(e) }
                        required
                    />                
                    <Button
                        buttonClass="btn btn-primary"
                        label="Guess"
                    />
                </form>
            </>
        );
    }
}

export default GuessForm;